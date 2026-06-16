from django.urls import path
from . import views

app_name = 'website'

urlpatterns = [
    path('',          views.home,      name='home'),
    path('about/',    views.about,     name='about'),
    path('products/', views.products,  name='products'),
    path('solutions/', views.solutions, name='solutions'),
]
