<?php

namespace App;

use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Sanctum\NewAccessToken;

trait HasStorableApiTokens
{
    use HasApiTokens;

    public function createToken(string $name, array $abilities = ['*'], $store = false)
    {
        $plainTextToken = Str::random(40);
        $token = $this->tokens()->create([
            'name'       => $name,
            'token'      => hash('sha256', $plainTextToken),
            'abilities'  => $abilities,
        ]);

        return new NewAccessToken($token, $token->getKey() . '|' . $plainTextToken);
    }
}
