
from django.db import models
# Create your models here.

class app(models.Model):
    username = models.CharField(max_length=225)
    age      = models.IntegerField()
    country  = models.CharField(max_length = 255)
    email    = models.EmailField()
    password = models.CharField(max_length =5)

class UserProfile(models.Model):
    image = models.ImageField(upload_to = "images")