from rest_framework import serializers
from .models import House


class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'address',
            'postcode',
            'current_energy_rating',
            'potential_energy_rating',

        )
        model = House
