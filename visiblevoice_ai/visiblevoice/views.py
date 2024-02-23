from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate ,login, logout
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from django.contrib.auth.tokens import default_token_generator
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from .inference_classifier import sign_model
from .textapi import sign_text
from .speechapi import sign_speech

def index(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'home.html', {'about': 'about'})

def sign_video(request):
    sign_model()
    return redirect("/dashboard")

def sign_sen(request):
    text = sign_text()
    sign_speech()
    messages.info(request, text)
    return redirect('/dashboard')

def reset_password(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        new_password = request.POST.get('new_password')

        try:
            user = User.objects.get(username=username, email=email)
            user.set_password(new_password)
            user.save()
            return redirect('/login')
        except User.DoesNotExist:
            return redirect('/reset_password')

    return render(request, 'password_change.html')

def login_page(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        if not User.objects.filter(username = username).exists():
            messages.info(request, "Invalid Username")
            return redirect('/login')
        
        user = authenticate(username = username, password = password)

        if user is None:    
            messages.info(request, "Invalid Password")
            return redirect('/login')
        
        else:
            login(request,user)        
            return redirect('/dashboard')
        
    return render(request, 'login.html')

def register(request):

    if request.method != "POST":
        return render(request, 'register.html')

    first_name = request.POST.get('firstname')
    last_name = request.POST.get('lastname')
    username = request.POST.get('username')
    email = request.POST.get('email')
    password = request.POST.get('password')

    user = User.objects.filter(username=username)


    if user.exists():
        messages.info(request, "Username Already Exists")
        return redirect('/register')

    elif User.objects.filter(email=email).exists():
        messages.info(request, "Email Already Taken")
        return redirect('/register')

    user = User.objects.create(
        first_name= first_name, 
        last_name= last_name,
        username=username,
        email=email,
        # password=password  we cant directly add password so we have encrypt it
        )

    user.set_password(password)    # this method is already thier in django
    user.save()
    messages.info(request, "Account created successfully")

    return redirect('/login')

def logout_page(request):
    logout(request)
    return HttpResponseRedirect(reverse("home"))

def contact(request):
    return render(request, 'home.html')

@login_required(login_url="/login")
def dashboard(request):
    return render(request, 'dashboard.html')

