from django.db import models

# Create your models here.
class Notes(models.Model):
  body = models.TextField( null=True)
  updatedAt = models.DateTimeField(auto_now=True)
  createdAt = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return self.body