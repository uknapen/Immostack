<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class HeatingType extends Model
{
    use HasFactory;

    protected $table = 'heating_types';

    public function properties(): HasMany
    {
        return $this->hasMany(Property::class);
    }
}
