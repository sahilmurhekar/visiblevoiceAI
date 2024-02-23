from django.contrib import admin
from django.urls import path
from visiblevoice import views
from django.contrib.auth import views as auth_views


urlpatterns = [
    path("", views.index, name='home'),
    path("login", views.login_page, name='login_page'),
    path("logout", views.logout_page, name='logout_page'),
    path("register", views.register, name='register'),
    path("home", views.index, name='home'),
    path("dashboard", views.dashboard, name='dashboard'),
    path("sign_video", views.sign_video, name='sign_video'),
    path("sign_sen", views.sign_sen, name='sign_sen'),
    path("reset_password", views.reset_password, name='reset_password'),
]