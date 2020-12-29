from django.shortcuts import render
from rest_framework import generics
from ProjectInfo.models import ProjectInfo
from ProjectInfo.serializer import ProjectInfoSerializer

# Project Info viewset
# allows us to create a CRUD api without specifying methods for functionality

# class ProjectInfoViewSet(viewsets.ModelViewSet):

#     queryset = ProjectInfo.objects.filter(show=True)
#     serializer_class = ProjectInfoSerializer

class ProjectInfoList(generics.ListCreateAPIView):
    queryset = ProjectInfo.objects.all()
    serializer_class = ProjectInfoSerializer