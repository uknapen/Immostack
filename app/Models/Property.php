<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Property extends Model
{
    use HasFactory;

    protected $table = 'properties';

    public function advertisement(): HasOne
    {
        return $this->hasOne(Advertisement::class);
    }

    public function property_type(): BelongsTo
    {
        return $this->belongsTo(PropertyType::class);
    }

    public function energy_class(): BelongsTo
    {
        return $this->belongsTo(EnergyClass::class);
    }

    public function insulation_class(): BelongsTo
    {
        return $this->belongsTo(InsulationClass::class);
    }

    public function heating_type(): BelongsTo
    {
        return $this->belongsTo(HeatingType::class);
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }
}
