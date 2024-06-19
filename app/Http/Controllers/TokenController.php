<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\PersonalAccessToken;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class TokenController extends Controller
{

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required',
        ]);
        
        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 'The provided credentials are incorrect.',
            ]);
        }
        return response()->json([
            'status' => 'OK',
            'token' => $user->createToken($request->device_name, ['*'], true)->plainTextToken,
        ]);
    }
}
