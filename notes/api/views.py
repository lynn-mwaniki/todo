
from django.shortcuts import render

# Create your views here.
from rest_framework import permissions
from rest_framework.decorators import api_view
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
     CreateAPIView,
    DestroyAPIView,
    UpdateAPIView

)


from .models import Notes
from .serializers import NoteSerializer

@api_view(['GET']) 
def ApiOverview(request):
    api_urls={
        'List':'/api/list/',
        'Detail View': '/api/<int:pk>/',
        'Create New Item':'/api/create/'
    }
    return Response(api_urls)

class GetNotes(ListAPIView):
    queryset = Notes.objects.all()
    serializer_class = NoteSerializer
    permission_classes = (permissions.AllowAny,)
  

class NoteDetail(RetrieveAPIView):
    queryset=Notes.objects.all()
    serializer_class=NoteSerializer
    permission_classes = (permissions.AllowAny,)

class CreateNote(CreateAPIView):
    queryset=Notes.objects.all()
    serializer_class= NoteSerializer
    permission_classes = (permissions.AllowAny,)

class NoteUpdate(UpdateAPIView):
    queryset=Notes.objects.all()
    serializer_class= NoteSerializer
    permission_classes = (permissions.AllowAny,)

class DeleteNote(DestroyAPIView):
    queryset=Notes.objects.all()
    serializer_class= NoteSerializer
    permission_classes = (permissions.AllowAny,)