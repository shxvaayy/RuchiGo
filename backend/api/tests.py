from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase
from .models import *


class ApiFlowTests(APITestCase):
    def setUp(self):
        self.customer = User.objects.create_user("customer@example.com", "StrongPass123", role="customer")
        self.owner = User.objects.create_user("restaurant@example.com", "StrongPass123", role="restaurant")
        self.other_customer = User.objects.create_user("other@example.com", "StrongPass123", role="customer")
        self.admin = User.objects.create_superuser("admin@example.com", "StrongPass123")
        self.restaurant = Restaurant.objects.create(owner=self.owner, name="Ruchi Kitchen", phone="9999999999", address="Main Street", city="Delhi", is_approved=True, is_open=True)
        self.category = Category.objects.create(name="Meals", slug="meals", is_active=True)
        self.item = MenuItem.objects.create(restaurant=self.restaurant, category=self.category, name="Thali", price=Decimal("199.00"))
        self.address = Address.objects.create(user=self.customer, line1="1 Main Street", city="Delhi", state="Delhi", postal_code="110001")

    def authenticate(self, user):
        self.client.force_authenticate(user=user)

    def test_register_and_login(self):
        r = self.client.post("/api/v1/auth/register/", {"email": "new@example.com", "password": "StrongPass123", "role": "customer"}, format="json")
        self.assertEqual(r.status_code, status.HTTP_201_CREATED)
        self.assertIn("access", r.data["tokens"])
        r = self.client.post("/api/v1/auth/login/", {"email": "new@example.com", "password": "StrongPass123", "role": "customer"}, format="json")
        self.assertEqual(r.status_code, status.HTTP_200_OK)

    def test_cart_checkout(self):
        self.authenticate(self.customer)
        r = self.client.post("/api/v1/cart/items/", {"menu_item": self.item.id, "quantity": 2}, format="json")
        self.assertEqual(r.status_code, status.HTTP_201_CREATED)
        r = self.client.post("/api/v1/cart/checkout/", {"address_id": self.address.id, "payment_method": "cod"}, format="json")
        self.assertEqual(r.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Order.objects.count(), 1)
        self.assertEqual(Order.objects.first().total, Decimal("438.00"))
        self.assertEqual(Cart.objects.get(user=self.customer).items.count(), 0)

    def test_public_menu_hides_unavailable_and_unapproved_items(self):
        unavailable = MenuItem.objects.create(restaurant=self.restaurant, category=self.category, name="Sold Out", price=Decimal("100.00"), is_available=False)
        hidden_category = Category.objects.create(name="Hidden", slug="hidden", is_active=False)
        hidden_item = MenuItem.objects.create(restaurant=self.restaurant, category=hidden_category, name="Hidden", price=Decimal("100.00"))
        unapproved_owner = User.objects.create_user("pending@example.com", "StrongPass123", role="restaurant")
        unapproved = Restaurant.objects.create(owner=unapproved_owner, name="Pending", phone="9999999998", address="Street", city="Delhi", is_approved=False)
        unapproved_item = MenuItem.objects.create(restaurant=unapproved, category=self.category, name="Private", price=Decimal("100.00"))
        response = self.client.get("/api/v1/menu-items/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        ids = {row["id"] for row in response.data["results"]} if isinstance(response.data, dict) and "results" in response.data else {row["id"] for row in response.data}
        self.assertIn(self.item.id, ids)
        self.assertNotIn(unavailable.id, ids)
        self.assertNotIn(hidden_item.id, ids)
        self.assertNotIn(unapproved_item.id, ids)
        self.assertEqual(self.client.get("/api/v1/addresses/").status_code, status.HTTP_401_UNAUTHORIZED)

    def test_restaurant_cannot_edit_other_menu(self):
        other = User.objects.create_user("other-restaurant@example.com", "StrongPass123", role="restaurant")
        self.authenticate(other)
        r = self.client.patch(f"/api/v1/menu-items/{self.item.id}/", {"name": "Nope"}, format="json")
        self.assertEqual(r.status_code, status.HTTP_404_NOT_FOUND)

    def test_cart_rejects_invalid_quantity(self):
        self.authenticate(self.customer)
        r = self.client.post("/api/v1/cart/items/", {"menu_item": self.item.id, "quantity": "not-a-number"}, format="json")
        self.assertEqual(r.status_code, status.HTTP_400_BAD_REQUEST)
        r = self.client.post("/api/v1/cart/items/", {"menu_item": self.item.id, "quantity": 100}, format="json")
        self.assertEqual(r.status_code, status.HTTP_400_BAD_REQUEST)

    def test_checkout_rejects_other_users_address(self):
        self.authenticate(self.other_customer)
        self.client.post("/api/v1/cart/items/", {"menu_item": self.item.id, "quantity": 1}, format="json")
        r = self.client.post("/api/v1/cart/checkout/", {"address_id": self.address.id}, format="json")
        self.assertEqual(r.status_code, status.HTTP_400_BAD_REQUEST)

    def test_coupon_usage_limit(self):
        coupon = Coupon.objects.create(code="LIMIT1", discount_amount=Decimal("50"), starts_at=timezone.now()-timedelta(days=1), ends_at=timezone.now()+timedelta(days=1), usage_limit=1, usage_count=1)
        self.authenticate(self.customer)
        self.client.post("/api/v1/cart/items/", {"menu_item": self.item.id, "quantity": 1}, format="json")
        r = self.client.post("/api/v1/cart/checkout/", {"address_id": self.address.id, "coupon_code": coupon.code}, format="json")
        self.assertEqual(r.status_code, status.HTTP_400_BAD_REQUEST)

    def test_order_status_transition_is_enforced(self):
        order = Order.objects.create(customer=self.customer, restaurant=self.restaurant, delivery_address=self.address, subtotal=Decimal("100"), total=Decimal("140"), delivery_fee=Decimal("40"))
        self.authenticate(self.owner)
        r = self.client.post(f"/api/v1/orders/{order.id}/status/", {"status": "ready"}, format="json")
        self.assertEqual(r.status_code, status.HTTP_400_BAD_REQUEST)
        r = self.client.post(f"/api/v1/orders/{order.id}/status/", {"status": "confirmed"}, format="json")
        self.assertEqual(r.status_code, status.HTTP_200_OK)

    def test_review_requires_delivered_own_order(self):
        order = Order.objects.create(customer=self.customer, restaurant=self.restaurant, delivery_address=self.address, subtotal=Decimal("100"), total=Decimal("140"), delivery_fee=Decimal("40"), status=Order.Status.PENDING)
        self.authenticate(self.customer)
        r = self.client.post("/api/v1/reviews/", {"order": order.id, "rating": 5, "comment": "Great"}, format="json")
        self.assertEqual(r.status_code, status.HTTP_400_BAD_REQUEST)
        order.status = Order.Status.DELIVERED
        order.save(update_fields=["status"])
        r = self.client.post("/api/v1/reviews/", {"order": order.id, "rating": 5, "comment": "Great"}, format="json")
        self.assertEqual(r.status_code, status.HTTP_201_CREATED)
