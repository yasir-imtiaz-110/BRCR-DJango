
from django.urls import path
from .import views
urlpatterns = [
    path('add/',views.AddVehicle.as_view()),
    path('list/',views.VehiclesList.as_view()),
    path('delete/<int:pk>',views.DeleteVehicle.as_view()),
    path('update/<int:pk>/',views.UpdateVehicle.as_view()),
    path('get/<int:pk>/', views.GetVehicle.as_view()),
]
