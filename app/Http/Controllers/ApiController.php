<?php

namespace App\Http\Controllers;

use App\TokenChecker;
use Illuminate\Http\Request;
use App\AdvertisementsExport;
use App\Models\Advertisement;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{

    use AdvertisementsExport;
    use TokenChecker;

    public function homepage(Request $request)
    {
        $user = $this->checkToken($request);
        $exported = $this->getPublicExportedAds($request, 20, 1);

        return response()->json([
            'status' => 'OK',
            'user' => $user,
            'ads' => $exported->ads,
            'totalCount' => $exported->totalCount,
        ]);
    }

    public function adminDashboardDisplay(Request $request)
    {
        $user = $this->checkToken($request);

        if($user === null)
        {
            return response()->json([
                'status' => 'Please log in before trying to access this resource.',
            ]);
        }

        if($user->user_type_id !== 3)
        {
            return response()->json([
                'status' => 'Reserved to admins.',
            ]);
        }

        $ads = Advertisement::orderBy('advertisements.id', 'desc')
            ->select('advertisements.id AS adId', 'advertisements.*')
            ->where('advertisements.status_id', 1)
            ->orWhere('advertisements.status_id', 5)
            ->take(20)
            ->get();

        return response()->json([
            'status' => 'OK',
            'user' => $user,
            'ads' => $this->getExportedAds($ads),
        ]);       
    }

    public function validate(Request $request)
    {
        $user = $this->checkToken($request);

        if($user === null)
        {
            return response()->json([
                'status' => 'Please log in before trying to access this resource.',
            ]);
        }

        if(!$request->hasHeader('adId'))
        {
            return response()->json([
                'status' => 'Please provide an advertisement Id.',
            ]);
        }

        $ad = Advertisement::find($request->header('adId'));

        return response()->json([
            'status' => 'OK',
            'user' => $user,
            'ad' => $ad !== null && $ad->status_id === 1 ? $this->getPublicExportedAdFromId($request->header('adId')) : null,
        ]);
    }

    public function handleValidation(Request $request)
    {
        $user = $this->checkToken($request);

        if($user === null)
        {
            return response()->json([
                'status' => 'Please log in before trying to access this resource.',
            ]);
        }

        if($user->user_type_id !== 3)
        {
            return response()->json([
                'status' => 'Reserved to admins.',
            ]);
        }

        $ad = Advertisement::find($request->id);

        if($ad === null || $ad->status_id !== 1 )
        {
            return response()->json([
                'status' => 'These advertisement can not be validated.',
            ]);
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
        return response()->json([
            'status' => 'OK',
            'user' => $user,
            'message' => "Advertisement id {$request->id} validation done with result: {($rejected ? 'Rejected' : 'Approved')}"
        ]);
    }
}
