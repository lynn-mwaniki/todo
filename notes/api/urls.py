from django import views
from django.urls import path
from .views import *

urlpatterns = [
    path('', GetNotes.as_view(), name='NOTES' ),
    path('notes/<pk>/', NoteDetail.as_view(), name='note'),
    path('add_note/', CreateNote.as_view(), name="ADD NOTE"),
    path('update_note/<pk>/', NoteUpdate.as_view(), name='UPDATE NOTE'),
    path('delete_note/<pk>/', DeleteNote.as_view(), name='DELETE NOTE')
]