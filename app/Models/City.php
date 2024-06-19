<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class City extends Model
{
    use HasFactory;

    protected $table = 'cities';

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }

    public function userDetails(): HasMany
    {
        return $this->hasMany(UserDetails::class);
    }

    public function properties(): HasMany
    {
        return $this->hasMany(Property::class);
    }
}
