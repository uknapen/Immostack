<?php

namespace App\Models;

use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;

class PersonalAccessToken extends SanctumPersonalAccessToken
{
    protected $fillable = [
        'name',
        'token',
        'abilities',
    ];

    protected $casts = [
        'abilities'    => 'json',
        'last_used_at' => 'datetime',
    ];
}
