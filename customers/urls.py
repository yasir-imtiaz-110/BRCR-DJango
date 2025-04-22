from django.urls import path
from . import views
from .views import AddCustomers
from .views import CustomersList, CustomersUpdate, GetCustomer, CustomerDelete


urlpatterns = [
    path('add-customer/', views.add),
    path('add/', AddCustomers.as_view(), name='add-customer'),
    path('list/', CustomersList.as_view(), name='list-customer'),
    path('update/<int:pk>/', CustomersUpdate.as_view(), name='update-customer'),
    path('<int:pk>/',GetCustomer.as_view()),
    path('delete/<int:pk>/',CustomerDelete.as_view()),


]
