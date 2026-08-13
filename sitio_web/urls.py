from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('servicios/', views.servicios, name='servicios'),
    path('logros/', views.logros, name='logros'),
    path('personal/', views.personal, name='personal'),
]