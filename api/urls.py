from django.urls import path
from .views import GenerateMusic

urlpatterns = [
    path('', GenerateMusic.as_view(), name='Generate')
]
