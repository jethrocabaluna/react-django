from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

#Lead Viewset - allow us to create full crud API without having to specify explicit methods for the functionality
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permision_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer