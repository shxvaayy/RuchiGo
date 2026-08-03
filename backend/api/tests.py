from decimal import Decimal
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import *

class ApiFlowTests(APITestCase):
    def setUp(self):
        self.customer=User.objects.create_user("customer@example.com", "StrongPass123", role="customer")
        self.owner=User.objects.create_user("restaurant@example.com", "StrongPass123", role="restaurant")
        self.restaurant=Restaurant.objects.create(owner=self.owner,name="Ruchi Kitchen",phone="9999999999",address="Main Street",city="Delhi",is_approved=True)
        self.category=Category.objects.create(name="Meals",slug="meals")
        self.item=MenuItem.objects.create(restaurant=self.restaurant,category=self.category,name="Thali",price=Decimal("199.00"))
        self.address=Address.objects.create(user=self.customer,line1="1 Main Street",city="Delhi",state="Delhi",postal_code="110001")
    def authenticate(self, user): self.client.force_authenticate(user=user)
    def test_register_and_login(self):
        r=self.client.post("/api/v1/auth/register/", {"email":"new@example.com","password":"StrongPass123","role":"customer"}, format="json")
        self.assertEqual(r.status_code,status.HTTP_201_CREATED); self.assertIn("access",r.data["tokens"])
        r=self.client.post("/api/v1/auth/login/", {"email":"new@example.com","password":"StrongPass123","role":"customer"}, format="json")
        self.assertEqual(r.status_code,status.HTTP_200_OK)
    def test_cart_checkout(self):
        self.authenticate(self.customer)
        r=self.client.post("/api/v1/cart/items/", {"menu_item":self.item.id,"quantity":2}, format="json")
        self.assertEqual(r.status_code,status.HTTP_201_CREATED)
        r=self.client.post("/api/v1/cart/checkout/", {"address_id":self.address.id,"payment_method":"cod"}, format="json")
        self.assertEqual(r.status_code,status.HTTP_201_CREATED); self.assertEqual(Order.objects.count(),1); self.assertEqual(Order.objects.first().total,Decimal("438.00"))
    def test_public_menu_and_protected_addresses(self):
        self.assertEqual(self.client.get("/api/v1/menu-items/").status_code,status.HTTP_200_OK)
        self.assertEqual(self.client.get("/api/v1/addresses/").status_code,status.HTTP_401_UNAUTHORIZED)
    def test_restaurant_cannot_edit_other_menu(self):
        other=User.objects.create_user("other@example.com","StrongPass123",role="restaurant")
        self.authenticate(other)
        r=self.client.patch(f"/api/v1/menu-items/{self.item.id}/", {"name":"Nope"}, format="json")
        self.assertEqual(r.status_code,status.HTTP_404_NOT_FOUND)
