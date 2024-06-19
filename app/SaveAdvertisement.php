<?php

namespace App;

use App\Models\City;
use App\Models\Country;
use App\Models\Property;
use App\Models\Advertisement;
use App\Models\AdvertisementImage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

trait SaveAdvertisement
{
    use CoordsFromAddress;

    protected function saveToDatabase($validated)
    {
        $coords = $this->getCoordinates($validated['number'], $validated['street'], $validated['street2'], $validated['post_code'], $validated['city'], $validated['country']);
        DB::beginTransaction();
        try {
            $country = Country::where('name', $validated['country'])->first();
            if ($country == null) {
                $newCountry = new Country();
                $newCountry->name = $validated['country'];
                $newCountry->save();
                $countryId = $newCountry->id;
            } else {
                $countryId = $country->id;
            }

            $city = City::where('name', $validated['city'])->where('country_id', $countryId)->where('post_code', $validated['post_code'])->first();
            if ($city == null) {
                $newCity = new City();
                $newCity->name = $validated['city'];
                $newCity->country_id = $countryId;
                $newCity->post_code = $validated['post_code'];
                $newCity->save();
                $cityId = $newCity->id;
            } else {
                $cityId = $city->id;
            }

            $property = new Property();
            $property->year_construction = $validated['construction_year'];
            $property->year_renovation = $validated['renovation_year'];
            $property->property_type_id = $validated['property_type_id'];
            $property->surface = $validated['surface'] ? $validated['surface'] : 0;
            $property->livable_surface = $validated['livable_surface'] ? $validated['livable_surface'] : 0;
            $property->terrain_surface = $validated['terrain_surface'] ? $validated['terrain_surface'] : 0;
            $property->floor = $validated['floor'] ? $validated['floor'] : 0;
            $property->floors = $validated['floors'] ? $validated['floors'] : 0;
            $property->rooms = $validated['rooms'] ? $validated['rooms'] : 0;
            $property->bedrooms = $validated['bedrooms'] ? $validated['bedrooms'] : 0;
            $property->bathrooms = $validated['bathrooms'] ? $validated['bathrooms'] : 0;
            $property->garage = $validated['garage'] ? $validated['garage'] : 0;
            $property->parking_spots = $validated['parking_spots'] ? $validated['parking_spots'] : 0;
            $property->balcony = $validated['balcony'] ? $validated['balcony'] : 0;
            $property->terrace = $validated['terrace'] ? $validated['terrace'] : 0;
            $property->energy_class_id = $validated['energy_class'] ? $validated['energy_class'] : 1;
            $property->cellar = $validated['cellar'] ? $validated['cellar'] : false;
            $property->fitted_kitchen = $validated['fitted_kitchen'] ? $validated['fitted_kitchen'] : false;
            $property->separate_toilets = $validated['separate_toilets'] ? $validated['separate_toilets'] : 0;
            $property->insulation_class_id = $validated['insulation_class'] ? $validated['insulation_class'] : 1;
            $property->pool = $validated['pool'] ? $validated['pool'] : 0;
            $property->heating_type_id = $validated['heating_type'] ? $validated['heating_type'] : 1;
            $property->elevator = $validated['elevator'] ? $validated['elevator'] : false;
            $property->city_id = $cityId;
            $property->latitude = $coords->lat;
            $property->longitude = $coords->lng;
            $property->save();

            $ad = new Advertisement();
            $ad->user_id = Auth::user()->id;
            $ad->title = $validated['title'];
            $ad->property_id = $property->id;
            $ad->price = $validated['price'];
            $ad->advertisement_type_id = $validated['ads_type_id'];
            $ad->monthly_charges = $validated['monthly_charges'] ? $validated['monthly_charges'] : 0;
            $ad->status_id = 1; // Waiting for review
            $ad->agency_fees = $validated['agency_fees'] ? $validated['agency_fees'] : 0;
            $ad->description = $validated['description'];
            $ad->availability = $validated['availability'];
            $ad->fee_payer_id = $validated['fee_payer_id'];
            $ad->surroundings = $validated['surroundings'];
            $ad->save();

            $files = request()->file('photos');
            for ($i = 0; $i < count($files); $i++) {
                $file = $files[$i];
                $filePath = $file->store('/', 'photos');
                $adImage = new AdvertisementImage();
                $adImage->approved = false;
                $adImage->path = $filePath;
                $adImage->advertisement_id = $ad->id;
                $adImage->save();
            }
            DB::commit();
            return redirect()->route('dashboard');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->withErrors(array('db_error' => $e->getMessage()));
        }
    }
}
