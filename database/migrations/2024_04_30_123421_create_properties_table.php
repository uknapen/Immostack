<?php

use App\Models\City;
use App\Models\EnergyClass;
use App\Models\HeatingType;
use App\Models\PropertyType;
use App\Models\InsulationClass;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('year_construction');
            $table->string('year_construction_review')->nullable();
            $table->boolean('year_construction_rejected')->default(false);
            $table->string('year_renovation')->nullable();
            $table->string('year_renovation_review')->nullable();
            $table->boolean('year_renovation_rejected')->default(false);
            $table->foreignIdFor(PropertyType::class);
            $table->integer('property_type_id_review')->nullable();
            $table->boolean('property_type_id_rejected')->default(false);
            $table->float('surface');
            $table->float('surface_review')->nullable();
            $table->boolean('surface_rejected')->default(false);
            $table->float("livable_surface");
            $table->float("livable_surface_review")->nullable();
            $table->boolean('livable_surface_rejected')->default(false);
            $table->float("terrain_surface");
            $table->float("terrain_surface_review")->nullable();
            $table->boolean('terrain_surface_rejected')->default(false);
            $table->integer('floor');
            $table->integer('floor_review')->nullable();
            $table->boolean('floor_rejected')->default(false);
            $table->integer('floors');
            $table->integer('floors_review')->nullable();
            $table->boolean('floors_rejected')->default(false);
            $table->integer('rooms');
            $table->integer('rooms_review')->nullable();
            $table->boolean('rooms_rejected')->default(false);
            $table->integer('bedrooms');
            $table->integer('bedrooms_review')->nullable();
            $table->boolean('bedrooms_rejected')->default(false);
            $table->integer('bathrooms');
            $table->integer('bathrooms_review')->nullable();
            $table->boolean('bathrooms_rejected')->default(false);
            $table->integer('garage');
            $table->integer('garage_review')->nullable();
            $table->boolean('garage_rejected')->default(false);
            $table->integer('parking_spots');
            $table->integer('parking_spots_review')->nullable();
            $table->boolean('parking_spots_rejected')->default(false);
            $table->integer('balcony');
            $table->integer('balcony_review')->nullable();
            $table->boolean('balcony_rejected')->default(false);
            $table->integer('terrace');
            $table->integer('terrace_review')->nullable();
            $table->boolean('terrace_rejected')->default(false);
            $table->foreignIdFor(EnergyClass::class);
            $table->integer('energy_class_id_review')->nullable();
            $table->boolean('energy_class_id_rejected')->default(false);
            $table->boolean('cellar');
            $table->boolean('cellar_review')->nullable();
            $table->boolean('cellar_rejected')->default(false);
            $table->boolean('fitted_kitchen');
            $table->boolean('fitted_kitchen_review')->nullable();
            $table->boolean('fitted_kitchen_rejected')->default(false);
            $table->foreignIdFor(City::class);
            $table->integer('city_id_review')->nullable();
            $table->boolean('city_id_rejected')->default(false);
            $table->float('latitude');
            $table->float('latitude_review')->nullable();
            $table->boolean('latitude_rejected')->default(false);
            $table->float('longitude');
            $table->float('longitude_review')->nullable();
            $table->boolean('longitude_rejected')->default(false);
            $table->integer('separate_toilets');
            $table->integer('separate_toilets_review')->nullable();
            $table->boolean('separate_toilets_rejected')->default(false);
            $table->foreignIdFor(InsulationClass::class);
            $table->integer('insulation_class_id_review')->nullable();
            $table->boolean('insulation_class_id_rejected')->default(false);
            $table->integer('pool');
            $table->integer('pool_review')->nullable();
            $table->boolean('pool_rejected')->default(false);
            $table->foreignIdFor(HeatingType::class);
            $table->integer('heating_type_id_review')->nullable();
            $table->boolean('heating_type_id_rejected')->default(false);
            $table->boolean('elevator');
            $table->boolean('elevator_review')->nullable();
            $table->boolean('elevator_rejected')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
