<?php

namespace App;

use App\Models\FavoriteAd;
use App\Models\BlacklistAd;
use Illuminate\Support\Facades\Auth;

trait FavoritesAndBlacklistHandler
{
    protected function toggleFavorite($id)
    {
        $count = FavoriteAd::where('user_id', Auth::user()->id)->where('advertisement_id', $id)->count();
        if($count > 0)
        {
            FavoriteAd::where('user_id', Auth::user()->id)->where('advertisement_id', $id)->delete();
        }
        else
        {
            $newFavorite = new FavoriteAd();
            $newFavorite->user_id = Auth::user()->id;
            $newFavorite->advertisement_id = $id;
            $newFavorite->save();
        }
    }

    protected function addToFavorite($id)
    {
        $count = FavoriteAd::where('user_id', Auth::user()->id)->where('advertisement_id', $id)->count();
        if($count === 0)
        {
            $newFavorite = new FavoriteAd();
            $newFavorite->user_id = Auth::user()->id;
            $newFavorite->advertisement_id = $id;
            $newFavorite->save();
        }
    }

    protected function toggleBlacklist($id)
    {
        $count = BlacklistAd::where('user_id', Auth::user()->id)->where('advertisement_id', $id)->count();
        if($count > 0)
        {
            BlacklistAd::where('user_id', Auth::user()->id)->where('advertisement_id', $id)->delete();
        }
        else
        {
            $newBlacklisted = new BlacklistAd();
            $newBlacklisted->user_id = Auth::user()->id;
            $newBlacklisted->advertisement_id = $id;
            $newBlacklisted->save();
        }
    }
}
