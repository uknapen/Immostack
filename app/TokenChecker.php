<?php

namespace App;

use App\Models\PersonalAccessToken;
use App\Models\User;
use Illuminate\Http\Request;

trait TokenChecker
{
    protected function checkToken(Request $request)
    {
        if(!$request->hasHeader('token'))
        {
            return null;
        }

        [$id, $userToken] = explode('|', $request->header('token'), 2);
        $accessToken = PersonalAccessToken::find($id);

        if(!$accessToken)
        {
            return null;
        }

        $isValidToken = $accessToken->token === hash('sha256', $userToken);

        if(!$isValidToken)
        {
            return null;
        }

        $userId = $accessToken->tokenable_id;
        $user = User::find($userId);

        return $user;
    }
}
