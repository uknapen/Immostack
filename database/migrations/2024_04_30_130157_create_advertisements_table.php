<?php

use App\Models\AdvertisementType;
use App\Models\FeePayer;
use App\Models\Property;
use App\Models\Status;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('advertisements', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignIdFor(User::class);
            $table->string('title');
            $table->string('title_review')->nullable();
            $table->boolean('title_rejected')->default(false);
            $table->foreignIdFor(Property::class);
            $table->integer('price');
            $table->integer('price_review')->nullable();
            $table->boolean('price_rejected')->default(false);
            $table->foreignIdFor(AdvertisementType::class);
            $table->integer('monthly_charges')->default(0);
            $table->integer('monthly_charges_review')->nullable();
            $table->boolean('monthly_charges_rejected')->default(false);
            $table->foreignIdFor(Status::class);
            $table->integer('agency_fees')->default(0);
            $table->integer('agency_fees_review')->nullable();
            $table->boolean('agency_fees_rejected')->default(false);
            $table->text('description');
            $table->text('description_review')->nullable();
            $table->boolean('description_rejected')->default(false);
            $table->string('availability');
            $table->string('availability_review')->nullable();
            $table->boolean('availability_rejected')->default(false);
            $table->foreignIdFor(FeePayer::class);
            $table->integer('fee_payer_review')->nullable();
            $table->boolean('fee_payer_rejected')->default(false);
            $table->text('surroundings');
            $table->text('surroundings_review')->nullable();
            $table->boolean('surroundings_rejected')->default(false);
            $table->boolean('images_review')->default(false);
            $table->boolean('images_rejected')->default(false);
            $table->integer('in_review_by')->nullable();
            $table->text('rejected_comment')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('advertisements');
    }
};
