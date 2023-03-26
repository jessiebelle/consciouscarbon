from epc.models import EPCRating


def create_epc_rating(data):
    epc_rating = EPCRating.objects.create(current_energy_rating=data['current_energy_rating'],
                             potential_energy_rating=data['potential_energy_rating'],
                             current_energy_efficiency=data['current_energy_efficiency'],
                             potential_energy_efficiency=data['potential_energy_efficiency'],
                             property_type=data['property_type'],
                             co2_emissions_current=data['co2_emissions_current'],
                             co2_emissions_potential=data['co2_emissions_potential'],
                             house=data['house'],
                             date=data['date'])
    return epc_rating