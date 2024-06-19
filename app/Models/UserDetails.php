<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserDetails extends Model
{
    use HasFactory;

    protected $table = 'user_details';

    public function user(): HasOne
    {
        return $this->hasOne(User::class);
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }
}
