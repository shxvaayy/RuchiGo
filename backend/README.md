# RuchiGo backend

Production-oriented Django REST API for the RuchiGo React frontend.

## Local run

1. Create a virtual environment and install `pip install -r requirements.txt`.
2. Copy `.env.example` to `.env`; SQLite is the default local database. Set `DJANGO_DB_ENGINE=mysql` plus the MySQL values for production.
3. Run `python manage.py migrate`, `python manage.py createsuperuser`, then `python manage.py runserver`.
4. Open `http://127.0.0.1:8000/api/docs/` for the OpenAPI/Swagger UI and use the API at `/api/v1/`.

## Frontend connection

Set `VITE_API_BASE_URL=http://127.0.0.1:8000/api/v1` in the React app's `.env`. Login uses `POST /auth/login/`; persist `tokens.access` in memory and send it as `Authorization: Bearer <token>`. Refresh through `POST /auth/token/refresh/`.

## Key endpoints

- `/auth/register/`, `/auth/login/`, `/auth/me/`, `/auth/forgot_password/`, `/auth/reset_password/`, `/auth/request_email_verification/`, `/auth/verify_email/`
- `/restaurants/`, `/categories/`, `/menu-items/`, `/addresses/`, `/wishlist/`, `/cart/`, `/orders/`
- `/coupons/`, `/offers/`, `/deliveries/`, `/notifications/`, `/reviews/`, `/analytics/`

The API enforces role gates for restaurant, delivery, and admin activities, and supports pagination, filtering, search, ordering, OpenAPI documentation, media files, CORS, JWT refresh tokens, and MySQL configuration.
