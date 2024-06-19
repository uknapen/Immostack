<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EnergyClass extends Model
{
    use HasFactory;

    protected $table = 'energy_classes';

    public function properties(): HasMany
    {
        return $this->hasMany(Property::class);
    }
}
