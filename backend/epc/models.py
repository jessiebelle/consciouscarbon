from django.db import models


class EPCRating(models.Model):
    house = models.ForeignKey('house.House', related_name='epc_ratings', on_delete=models.CASCADE)
    date = models.DateField()
    current_energy_rating = models.CharField(max_length=100)
    potential_energy_rating = models.CharField(max_length=100)
    current_energy_efficiency = models.CharField(max_length=100)
    potential_energy_efficiency = models.CharField(max_length=100)
    property_type = models.CharField(max_length=100)
    co2_emissions_current = models.CharField(max_length=100)
    co2_emissions_potential = models.CharField(max_length=100)
