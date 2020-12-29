from django.urls import path
from ProjectInfo.views import ProjectInfoList

app_name='ProjectInfo'


urlpatterns=[
    path('',ProjectInfoList.as_view()),
    
 ]