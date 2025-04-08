from django.urls import path
from . import views


urlpatterns = [
    path('add-customer/', views.add),
    path('add/', views.AddCustomers),
]
