<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Status extends Model
{
    use HasFactory;

    protected $table = 'status';

    public function user_details(): HasMany
    {
        return $this->hasMany(UserDetails::class);
    }

    public function advertisements(): HasMany
    {
        return $this->hasMany(Advertisement::class);
    }
}
