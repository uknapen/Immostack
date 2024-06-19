<?php

namespace App;

use App\Models\Advertisement;
use stdClass;

trait AdvertisementsExport
{
    use AdvertisementsQueries;

    protected function getPublicExportedAdFromId($id)
    {
        $ad = Advertisement::find($id);
        $ad->adId = $ad->id;
        return $ad != null ? $this->getExportedAd($ad) : null;
    }
    protected function getPublicExportedAds($request, $perPage, $page)
    {
        $exportedAds = new stdClass();
        $ads = $this->getAdsFromRequest($request);
        $exported = [];
        foreach ($ads->skip($perPage * ($page - 1))->take($perPage) as $advertisement) {
            $exported[] = $this->getExportedAd($advertisement);
        }

        $exportedAds->ads = $exported;
        $exportedAds->totalCount = count($ads);

        return $exportedAds;
    }

    protected function getExportedAds($ads)
    {
        $exported = [];
        foreach ($ads as $ad) {
            $exported[] = $this->getExportedAd($ad);
        }
        return $exported;
    }

    private function getExportedAd($advertisement)
    {
        $advertisement->id = $advertisement->adId;
        $exportedAd = [];
        $exportedAd['id'] = $advertisement->adId;
        $exportedAd['status'] = $advertisement->status_id;
        $exportedAd['user_id'] = $advertisement->user_id;
        $exportedAd['user_type'] = $advertisement->user_type_id;
        $exportedAd['title'] = $advertisement->title;
        $exportedAd['price'] = $advertisement->price;
        $exportedAd['type'] = $advertisement->advertisement_type->name;
        $exportedAd['monthly_charges'] = $advertisement->monthly_charges;
        $exportedAd['agency_fees'] = $advertisement->agency_fees;
        $exportedAd['availability'] = $advertisement->availability;
        $exportedAd['description'] = $advertisement->description;
        $exportedAd['fee_payer'] = $advertisement->fee_payer->name;
        $exportedAd['images'] = $this->getAdsImages($advertisement);
        $exportedAd['user_name'] = $advertisement->user->name;
        $exportedAd['property'] = $this->getAdsProperty($advertisement);
        $exportedAd['surroundings'] = $advertisement->surroundings;
        // TODO : export missing attributes

        return $exportedAd;
    }

    private function getAdsImages($ad)
    {
        $images = [];
        foreach ($ad->images as $img) {
            $images[] = $img->path;
        }
        return $images;
    }

    private function getAdsProperty($ad)
    {
        $property = [];
        $property['city'] = $ad->property->city->name;
        $property['post_code'] = $ad->property->city->post_code;
        $property['country'] = $ad->property->city->country->name;
        $property['surface'] = $ad->property->surface;
        $property['bedrooms'] = $ad->property->bedrooms;
        $property['bathrooms'] = $ad->property->bathrooms;
        $property['latitude'] = $ad->property->latitude;
        $property['longitude'] = $ad->property->longitude;
        $property['year_construction'] = $ad->property->year_construction;
        $property['year_renovation'] = $ad->property->year_renovation;
        $property['livable_surface'] = $ad->property->livable_surface;
        $property['terrain_surface'] = $ad->property->terrain_surface;
        $property['floor'] = $ad->property->floor;
        $property['floors'] = $ad->property->floors;
        $property['rooms'] = $ad->property->rooms;
        $property['bedrooms'] = $ad->property->bedrooms;
        $property['bathrooms'] = $ad->property->bathrooms;
        $property['garage'] = $ad->property->garage;
        $property['parking_spots'] = $ad->property->parking_spots;
        $property['balcony'] = $ad->property->balcony;
        $property['terrace'] = $ad->property->terrace;
        $property['cellar'] = $ad->property->cellar;
        $property['fitted_kitchen'] = $ad->property->fitted_kitchen;
        $property['separate_toilets'] = $ad->property->separate_toilets;
        $property['pool'] = $ad->property->pool;
        $property['elevator'] = $ad->property->elevator;
        $property['energy_class'] = $ad->property->energy_class->name;
        $property['insulation_class'] = $ad->property->insulation_class->name;
        $property['heating_type'] = $ad->property->heating_type->name;
        $property['property_type'] = $ad->property->property_type->name;
        // TODO : export missing attributes

        return $property;
    }
}
