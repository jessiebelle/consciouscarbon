from rest_framework import serializers
from .models import EPCRating


class EPCSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = EPCRating