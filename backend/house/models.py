from django.db import models


class House(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey('auth.User', related_name='houses', on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    postcode = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    current_energy_rating = models.CharField(max_length=100)
    potential_energy_rating = models.CharField(max_length=100)
    current_energy_efficiency = models.CharField(max_length=100)
    potential_energy_efficiency = models.CharField(max_length=100)
    property_type = models.CharField(max_length=100)
    co2_emissions_current = models.CharField(max_length=100)
    co2_emissions_potential = models.CharField(max_length=100)

    def __str__(self):
        return self.name

