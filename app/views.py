from re import template
from django.shortcuts import redirect, render
from django.http import Http404, HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from django.views.generic.edit import CreateView
from django.views.generic import DetailView
from. forms import ProfileForm
from .models import app, UserProfile
from django.contrib.auth.decorators import login_required
# Create your views here.
def home(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render({},request))

# def main(request):
#     template = loader.get_template('main.html')
#     return HttpResponse(template.render({},request))

def create(request):
    template = loader.get_template('create.html')
    return HttpResponse(template.render({},request))

def users(request):
    users = app.objects.all().values()
    template = loader.get_template('users.html')
    context = {
        'users':users,
    }
    return HttpResponse(template.render(context,request))

def addrecord(request):
    x = request.POST['username']
    y = request.POST['age']
    z = request.POST['country']
    a = request.POST['email']
    b = request.POST['password']
    user = app(username = x, age= y, country = z, email = a,password = b)
    user.save()
    return redirect('main',id =user.id)

@login_required
def main(request,id):
    try:
        users = app.objects.get(id = id)
    except:
        raise Http404
    template = loader.get_template('main.html')
    context = {'users': users}
    return HttpResponse(template.render(context,request))

# def main(request):
#     template= loader.get_template('main.html')
#     return HttpResponse(template.render({},request))

def account(request):
    template= loader.get_template('account.html')
    return HttpResponse(template.render({},request))

class CreateProfileView(CreateView):
    template_name = "main.html"
    model = UserProfile
    fields = '__all__'
    success_url = "/<int:id>"

class ProfileView(DetailView):
    model = UserProfile
    template_name = "main.html"
    context_object_name = "profile"

def login(request):
    pass

def logout(request):
    pass


