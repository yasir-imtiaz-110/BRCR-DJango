
# from django.urls import path
# from . import views
# urlpatterns = [
#     path('django',views.course_django),
#     path('python',views.course_python),
# ]

from django.urls import path
from .import views
urlpatterns = [
    path('view/',views.add),
    path('list/', views.UsersList.as_view()),
    path('add/', views.UsersAdd.as_view()),
    path('<int:pk>/',views.GetUser.as_view()),
    path('update/<int:pk>/', views.UsersUpdate.as_view()),
    path('delete/<int:pk>/',views.UsersDelete.as_view()),
]