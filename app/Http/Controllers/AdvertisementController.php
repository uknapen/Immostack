<?php

namespace App\Http\Controllers;

use App\AdvertisementsExport;
use App\AdvertisementsQueries;
use App\CitiesExport;
use App\CreateAdvertisementRules;
use App\FavoritesAndBlacklistHandler;
use App\Models\Advertisement;
use App\Models\FavoriteAd;
use App\SaveAdvertisement;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdvertisementController extends Controller
{
    use CreateAdvertisementRules;
    use SaveAdvertisement;
    use AdvertisementsQueries;
    use AdvertisementsExport;
    use CitiesExport;
    use FavoritesAndBlacklistHandler;

    public function create()
    {
        return Inertia::render('CreateAds', [
            'user' => Auth::user(),
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate($this->advertisementRules());
        return $this->saveToDatabase($validatedData);
    }

    public function show($id)
    {
        return Inertia::render('SingleAd', [
            'user' => Auth::user(),
            'ad' => $this->getPublicExportedAdFromId($id),
        ]);
    }

    public function delete($id)
    {
        $ad = Advertisement::find($id);

        if(!Auth::check() || $ad->user_id != Auth::user()->id)
        {
            return redirect()->route('dashboard')->withErrors(['delete' => 'You can not delete an advertisement if you are not the owner']);
        }

        Advertisement::find($id)->delete();

        return redirect()->route('dashboard')->with(['delete' => "Advertisement id {$id} successfully deleted"]);
    }

    public function homepage(Request $request)
    {
        if(Auth::check() && $request->has('blacklist') && $request->blacklist !== null)
        {
            $this->toggleBlacklist($request->blacklist);
        }

        $cities = $this->getCities();
        $exported = $this->getPublicExportedAds($request, 20, 1);
        $favoriteIds = Auth::check() ? FavoriteAd::where('user_id', Auth::user()->id)->pluck('advertisement_id')->toArray() : [];

        return Inertia::render('Welcome', [
            'user' => Auth::user(),
            'ads' => $exported->ads,
            'totalCount' => $exported->totalCount,
            'cities' => $cities,
            'favoriteIds' => $favoriteIds,
        ]);
    }

    public function edit(Request $request)
    {
        return "Edit page";
    }

    public function validate($id)
    {
        if(!Auth::check() || Auth::user()->user_type_id !== 3)
        {
            return redirect()->route('dashboard')->withErrors(['admin' => 'Reserved to admins']);
        }

        $ad = Advertisement::find($id);

        return Inertia::render('AdsValidation', [
            'user' => Auth::user(),
            'ad' => $ad !== null && $ad->status_id === 1 ? $this->getPublicExportedAdFromId($id) : null,
        ]);
    }

    public function handleValidation(Request $request)
    {
        if(!Auth::check() || Auth::user()->user_type_id !== 3)
        {
            return redirect()->route('dashboard')->withErrors(['admin' => 'Reserved to admins']);
        }

        $ad = Advertisement::find($request->id);

        if($ad === null || $ad->status_id !== 1 )
        {
            return redirect()->route('dashboard')->withErrors(['validation' => 'Already validated']);
        }
        $rejected =
        $request->title_rejected ||
        $request->price_rejected ||
        $request->monthly_charges_rejected ||
        $request->agency_fees_rejected ||
        $request->description_rejected ||
        $request->availability_rejected ||
        $request->fee_payer_rejected ||
        $request->surroundings_rejected ||
        $request->images_rejected ||
        $request->year_construction_rejected ||
        $request->year_renovation_rejected ||
        $request->property_type_id_rejected ||
        $request->surface_rejected ||
        $request->livable_surface_rejected ||
        $request->terrain_surface_rejected ||
        $request->floor_rejected ||
        $request->floors_rejected ||
        $request->rooms_rejected ||
        $request->bedrooms_rejected ||
        $request->bathrooms_rejected ||
        $request->garage_rejected ||
        $request->parking_spots_rejected ||
        $request->balcony_rejected ||
        $request->terrace_rejected ||
        $request->energy_class_id_rejected ||
        $request->cellar_rejected ||
        $request->fitted_kitchen_rejected ||
        $request->city_id_rejected ||
        $request->latitude_rejected ||
        $request->longitude_rejected ||
        $request->separate_toilets_rejected ||
        $request->insulation_class_id_rejected ||
        $request->pool_rejected ||
        $request->heating_type_id_rejected ||
        $request->elevator_rejected;

        $propertyId = $ad->property->id;

        // TODO : update database
        DB::beginTransaction();
        DB::table('advertisements')->where('id', $request->id)->update(
            [
                'title_rejected' => $request->title_rejected,
                'price_rejected' => $request->price_rejected,
                'monthly_charges_rejected' => $request->monthly_charges_rejected,
                'agency_fees_rejected' => $request->agency_fees_rejected,
                'description_rejected' => $request->description_rejected,
                'availability_rejected' => $request->availability_rejected,
                'fee_payer_rejected' => $request->fee_payer_rejected,
                'surroundings_rejected' => $request->surroundings_rejected,
                'images_rejected' => $request->images_rejected,
                'rejected_comment' => $request->rejected_comment,
                'status_id' => $rejected ? 3 : 4,
            ]);
        DB::table('properties')->where('id', $propertyId)->update(
            [
                'year_construction_rejected' => $request->year_construction_rejected,
                'year_renovation_rejected' => $request->year_renovation_rejected,
                'property_type_id_rejected' => $request->property_type_id_rejected,
                'surface_rejected' => $request->surface_rejected,
                'livable_surface_rejected' => $request->livable_surface_rejected,
                'terrain_surface_rejected' => $request->terrain_surface_rejected,
                'floor_rejected' => $request->floor_rejected,
                'floors_rejected' => $request->floors_rejected,
                'rooms_rejected' => $request->rooms_rejected,
                'bedrooms_rejected' => $request->bedrooms_rejected,
                'bathrooms_rejected' => $request->bathrooms_rejected,
                'garage_rejected' => $request->garage_rejected,
                'parking_spots_rejected' => $request->parking_spots_rejected,
                'balcony_rejected' => $request->balcony_rejected,
                'terrace_rejected' => $request->terrace_rejected,
                'energy_class_id_rejected' => $request->energy_class_id_rejected,
                'cellar_rejected' => $request->cellar_rejected,
                'fitted_kitchen_rejected' => $request->fitted_kitchen_rejected,
                'city_id_rejected' => $request->city_id_rejected,
                'latitude_rejected' => $request->latitude_rejected,
                'longitude_rejected' => $request->longitude_rejected,
                'separate_toilets_rejected' => $request->separate_toilets_rejected,
                'insulation_class_id_rejected' => $request->insulation_class_id_rejected,
                'pool_rejected' => $request->pool_rejected,
                'heating_type_id_rejected' => $request->heating_type_id_rejected,
                'elevator_rejected' => $request->elevator_rejected,
           ]);
        DB::commit();

        // dd($request);
        return redirect()->route('dashboard')->with(['validation' => "Advertisement id {$request->id} validation done with result: {($rejected ? 'Rejected' : 'Approved')}"]);
    }

    public function favorite($id)
    {
        $this->toggleFavorite($id);
        return redirect()->back();
    }
    public function addfavorite($id)
    {
        $this->addToFavorite($id);
        return redirect()->back();
    }

    public function blacklist($id)
    {
        $this->toggleBlacklist($id);
        return redirect()->back();
    }
}
