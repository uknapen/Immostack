<?php

namespace App;

use App\Models\Advertisement;
use App\Models\BlacklistAd;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

trait AdvertisementsQueries
{
    protected function getAdsFromRequest($request)
    {
        $blacklist = Auth::check() ? BlacklistAd::where('user_id', Auth::user()->id)->pluck('advertisement_id')->toArray() : [];

        return Advertisement::with('property')
            ->join('properties', 'advertisements.property_id', '=', 'properties.id')
            ->join('cities', 'properties.city_id', '=', 'cities.id')
            ->join('energy_classes', 'energy_classes.id', '=', 'properties.energy_class_id')
            ->join('insulation_classes', 'insulation_classes.id', '=', 'properties.insulation_class_id')
            ->join('heating_types', 'heating_types.id', '=', 'properties.heating_type_id')
            ->orderBy('advertisements.id', 'desc')
            ->select('advertisements.id AS adId', 'advertisements.*', 'properties.*', 'cities.*')
            ->whereNotIn('advertisements.id', $blacklist)
            ->where('advertisements.advertisement_type_id', '=', $request->has('contractType') ? $request->contractType : 2)
            ->where('advertisements.status_id', '>=', 4)
            ->where('properties.property_type_id', '=', $request->has('property_type') ? $request->property_type : 1)
            ->when($request->has('cities') && count($request->cities) > 0, function (Builder $q) use ($request) {
                return $q->whereIn('cities.name', $request->cities);
            })
            ->where('advertisements.price', '>=', $request->has('min_budget') && $request->min_budget != null ? $request->min_budget : 0)
            ->where('advertisements.price', '<=', $request->has('max_budget') && $request->max_budget != null ? $request->max_budget : 999999999999)
            ->where('properties.surface', '>=', $request->has('min_surface') && $request->min_surface != null ? $request->min_surface : 0)
            ->where('properties.surface', '<=', $request->has('max_surface') && $request->max_surface != null ? $request->max_surface : 999999999999)
            ->where('properties.terrain_surface', '>=', $request->has('min_terrain_surface') && $request->min_terrain_surface != null ? $request->min_terrain_surface : 0)
            ->where('properties.terrain_surface', '<=', $request->has('max_terrain_surface') && $request->max_terrain_surface != null ? $request->max_terrain_surface : 999999999999)
            ->where('properties.bedrooms', '>=', $request->has('min_bedrooms') && $request->min_bedrooms != null ? $request->min_bedrooms : 0)
            ->where('properties.bedrooms', '<=', $request->has('max_bedrooms') && $request->max_bedrooms != null ? $request->max_bedrooms : 999999999999)
            ->where('properties.bathrooms', '>=', $request->has('min_bathrooms') && $request->min_bathrooms != null ? $request->min_bathrooms : 0)
            ->where('properties.bathrooms', '<=', $request->has('max_bathrooms') && $request->max_bathrooms != null ? $request->max_bathrooms : 999999999999)
            ->where('properties.garage', '>=', $request->has('garage') && $request->garage === true ? 1 : 0)
            ->where('properties.balcony', '>=', $request->has('balcony') && $request->balcony === true ? 1 : 0)
            ->where('properties.terrace', '>=', $request->has('terrace') && $request->terrace === true ? 1 : 0)
            ->where('properties.cellar', '>=', $request->has('cellar') && $request->cellar === true ? 1 : 0)
            ->where('properties.fitted_kitchen', '>=', $request->has('fitted_kitchen') && $request->fitted_kitchen === true ? 1 : 0)
            ->where('properties.separate_toilets', '>=', $request->has('separate_toilets') && $request->separate_toilets === true ? 1 : 0)
            ->where('properties.pool', '>=', $request->has('pool') && $request->pool === true ? 1 : 0)
            ->where('properties.elevator', '>=', $request->has('elevator') && $request->elevator === true ? 1 : 0)
            ->get();
    }
}
