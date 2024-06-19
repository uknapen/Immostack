<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FeePayer extends Model
{
    use HasFactory;

    protected $table = 'fee_payers';

    public function advertisements(): HasMany
    {
        return $this->hasMany(Advertisement::class);
    }
}
