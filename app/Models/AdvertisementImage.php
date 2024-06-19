<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AdvertisementImage extends Model
{
    use HasFactory;

    protected $table = 'advertisement_images';

    public function advertisement(): BelongsTo
    {
        return $this->belongsTo(Advertisement::class);
    }
}
