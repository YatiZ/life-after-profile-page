from django import forms
from django import forms

class ProfileForm(forms.Form):
    userimage = forms.ImageField()