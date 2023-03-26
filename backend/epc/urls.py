from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListEPC.as_view()),
    path('<int:pk>/', views.DetailEPC.as_view()),
]