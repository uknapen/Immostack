<?php

namespace App\Http\Controllers;

use App\AdvertisementsExport;
use App\Models\Advertisement;
use App\Models\FavoriteAd;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{

    use AdvertisementsExport;

    public function display(Request $request)
    {
        if(Auth::user()->user_type_id == 3) // Admin
        {
            $accounts = User::join('user_details', 'user_details.id', '=', 'users.user_details_id')
            ->where('user_details.status_id', 1)
            ->take(20)
            ->get();

            $ads = Advertisement::orderBy('advertisements.id', 'desc')
            ->select('advertisements.id AS adId', 'advertisements.*')
            ->where('advertisements.status_id', 1)
            ->orWhere('advertisements.status_id', 5)
            ->take(20)
            ->get();

            return Inertia::render('Dashboard', [
                'user' => Auth::user(),
                'accounts' => $accounts,
                'ads' => $this->getExportedAds($ads),
                'isAdmin' => true,
            ]);
        }
        else
        {
            $favorites = Advertisement::join('favorite_ads', 'advertisements.id', '=', 'favorite_ads.advertisement_id')
            ->select('advertisements.id AS adId', 'advertisements.*')
            ->where('favorite_ads.user_id', Auth::user()->id)->get();
    
            $blacklisted = Advertisement::join('blacklist_ads', 'advertisements.id', '=', 'blacklist_ads.advertisement_id')
            ->select('advertisements.id AS adId', 'advertisements.*')
            ->where('blacklist_ads.user_id', Auth::user()->id)->get();
    
            $ownAds = Advertisement::orderBy('advertisements.id', 'desc')
            ->select('advertisements.id AS adId', 'advertisements.*')
            ->where('advertisements.user_id', Auth::user()->id)->get();
    
            // dd($favorites);
            return Inertia::render('Dashboard', [
                'user' => Auth::user(),
                'favorites' => $this->getExportedAds($favorites),
                'blacklist' => $this->getExportedAds($blacklisted),
                'ownAds' => $this->getExportedAds($ownAds),
                'isAdmin' => false,
            ]);
        }
    }
}
