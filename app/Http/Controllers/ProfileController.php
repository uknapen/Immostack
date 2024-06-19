<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function show($id)
    {
        // Get the user
        $user = User::find($id);

        if($user != null && $user->user_type_id == 2)
        {
            return Inertia::render('UserProfile', [
                'name' => $user->name,
                'details' => $user->user_details,
                'city' => $user->user_details->city,
                'country' => $user->user_details->city->country
            ]);
        }
        else
        {
            return Inertia::render('UserProfile', [
                'name' => '',
                'details' => null,
            ]);
        }
    }
}
