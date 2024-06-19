<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\Country;
use App\Models\Property;
use App\Models\Advertisement;
use Illuminate\Database\Seeder;
use App\Models\AdvertisementImage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AdvertisementsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adTypes = ['rent', 'sale'];
        $propertyTypes = ['aparts', 'houses', 'fermes', 'garages', 'buildings', 'storage', 'land', 'office', 'commercial'];

        foreach($adTypes as $adType)
        {
            foreach($propertyTypes as $propertyType)
            {
                $this->processFile($adType, $propertyType);
            }
        }
    }

    private function processFile($adType, $propertyType)
    {
        $path = public_path() . "/ads/{$adType}_{$propertyType}.json";
        if(!file_exists($path))
        {
            echo "Unknown file\n";
            return; 
        }

        $myfile = fopen($path, 'r');
        $data = filesize($path) > 0 ? json_decode(fread($myfile, filesize($path))) : [];
        fclose($myfile);   

        foreach($data as $ad)
        {
            if($this->isValidAd($adType, $propertyType, $ad))
            {
                DB::beginTransaction();
                try
                {
                    $country = Country::where('name', 'Luxembourg')->first();
                    if($country == null)
                    {
                        $newCountry = new Country();
                        $newCountry->name = 'Luxembourg';
                        $newCountry->save();
                        $countryId = $newCountry->id;
                    }
                    else
                    {
                        $countryId = $country->id;
                    }
            
                    $city = City::where('name', $ad->location->city)->where('country_id', $countryId)->first();
                    if($city == null)
                    {
                        $newCity = new City();
                        $newCity->name = $ad->location->city;
                        $newCity->country_id = $countryId;
                        $newCity->post_code = "L-1234";
                        $newCity->save();
                        $cityId = $newCity->id;
                    }
                    else
                    {
                        $cityId = $city->id;
                    }
                    
                    $property = new Property();
                    $property->year_construction = $ad->property->year_construction;
                    $property->year_renovation = $ad->property->year_renovation;
                    $property->property_type_id = $ad->property->type_id;
                    $property->surface = $ad->property->surface;
                    $property->livable_surface = $ad->property->livable_surface;
                    $property->terrain_surface = $ad->property->terrain_surface;
                    $property->floor = $ad->property->floor;
                    $property->floors = $ad->property->floors;
                    $property->rooms = $ad->property->rooms;
                    $property->bedrooms = $ad->property->bedrooms;
                    $property->bathrooms = $ad->property->bathrooms;
                    $property->garage = $ad->property->garage;
                    $property->parking_spots = $ad->property->parking_slots;
                    $property->balcony = $ad->property->balcony ? rand(1, 2) : 0;
                    $property->terrace = $ad->property->terrace ? rand(1, 2) : 0;
                    $property->energy_class_id = $ad->property->energy_class_id;
                    $property->cellar = $ad->property->cellar;
                    $property->fitted_kitchen = $ad->property->fitted_kitchen;
                    $property->separate_toilets = $ad->property->separate_toilets ? rand(1, 3) : 0;
                    $property->insulation_class_id = $ad->property->insulation_class_id;
                    $property->pool = $ad->property->pool ? rand(1, 2) : 0;
                    $property->heating_type_id =$ad->property->heating_type_id;
                    $property->elevator = $ad->property->elevator;
                    $property->city_id = $cityId;
                    $property->latitude = $ad->location->latitude;
                    $property->longitude = $ad->location->longitude;
                    $property->save();
            
                    $advertisement = new Advertisement();
                    $advertisement->user_id = rand(1, 10);
                    $advertisement->title = $ad->ads->title;
                    $advertisement->property_id = $property->id;
                    $advertisement->price = $ad->ads->price;
                    $advertisement->advertisement_type_id = $ad->ads->type_id;
                    $advertisement->monthly_charges = $ad->ads->monthly_charges;
                    $advertisement->status_id = rand(1, 100) < 90 ? 4 : 1; // 90% Published, 10% Waiting for review
                    $advertisement->agency_fees = ($ad->ads->agency_fees / 100) * $ad->ads->price;
                    $advertisement->description = $ad->ads->description;
                    $advertisement->availability = $ad->ads->availability;
                    $advertisement->fee_payer_id = $ad->ads->fee_payer_id;
                    $advertisement->surroundings = "This is a text to display as placeholder for surroundings. Schools, Shops, Transports, etc.";
                    $advertisement->save();

                    $images = $ad->images;
                    Storage::disk('public_folder')->makeDirectory("photos/$adType/$propertyType/{$ad->id}");
                    for($i = 0; $i < count($images); $i++)
                    {
                        $imgPath = "/ads/images/$adType/$propertyType/{$ad->id}/{$ad->images[$i]}.jpg";
                        $destPath = "/photos/$adType/$propertyType/{$ad->id}/{$ad->images[$i]}.jpg";
                        Storage::disk('public_folder')->move($imgPath, $destPath);
                        $adImage = new AdvertisementImage();
                        $adImage->approved = $advertisement->status_id == 4 ? true : false;
                        $adImage->path = "/$adType/$propertyType/{$ad->id}/{$ad->images[$i]}.jpg";;
                        $adImage->advertisement_id = $advertisement->id;
                        $adImage->save();
                    }
            
                    DB::commit();
                    echo "Inserted $adType -> $propertyType -> {$ad->id} : OK\n";
                }
                catch (\Exception $e)
                {
                    DB::rollBack();
                    echo "Error with $adType -> $propertyType -> {$ad->id} : {$e->getMessage()}\n";
                }
            }
        }
    }

    private function isValidAd($adType, $propertyType, $ad)
    {
        $isValid = true;
        if($ad->location->latitude == null || $ad->location->longitude == null || $ad->location->city == null)
        {
            $isValid = false;
            echo "Invalid file: location missing\n";
        }
        if($ad->id == null)
        {
            $isValid = false;
            echo "Invalid file: id missing\n";
        }
        $images = $ad->images;
        for($i = 0; $i < count($images); $i++)
        {
            if(!file_exists(public_path() . "/ads/images/$adType/$propertyType/{$ad->id}/{$ad->images[$i]}.jpg"))
            {
                $isValid = false;
            }
        }
        return $isValid;
    }
}
