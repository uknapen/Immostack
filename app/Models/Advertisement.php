<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Advertisement extends Model
{
    use HasFactory;

    protected $table = 'advertisements';

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function advertisement_type(): BelongsTo
    {
        return $this->belongsTo(AdvertisementType::class);
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }

    public function fee_payer(): BelongsTo
    {
        return $this->belongsTo(FeePayer::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(AdvertisementImage::class);
    }

    public function property(): BelongsTo
    {
        return $this->belongsTo(Property::class);
    }

    public function threads(): HasMany
    {
        return $this->hasMany(Thread::class);
    }

    public function favorite_ad(): HasMany
    {
        return $this->hasMany(FavoriteAd::class);
    }

    public function blacklist_ad(): HasMany
    {
        return $this->hasMany(BlacklistAd::class);
    }
}
