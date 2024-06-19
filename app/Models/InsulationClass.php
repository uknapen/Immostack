<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class InsulationClass extends Model
{
    use HasFactory;

    protected $table = 'insulation_classes';

    public function properties(): HasMany
    {
        return $this->hasMany(Property::class);
    }
}
