from django.urls import path
from matplotlib.cbook import violin_stats
from . import views
from django.contrib.auth.views import LoginView

urlpatterns = [

    path('main/',views.main, name='main'),
    path('create/',views.create,name='create'),
    path('home/',views.home,name='home'),
    path('create/addrecord/',views.addrecord, name='addrecord'),
    path('users/',views.users,name='users'),
    path('<int:id>/',views.main, name='main'),
    path('account/',views.account,name='account'),
    path('image/',views.CreateProfileView.as_view()),
    path('image/<int:pk>',views.ProfileView.as_view()),
    path('login',LoginView.as_view(),name='login'),
    
]