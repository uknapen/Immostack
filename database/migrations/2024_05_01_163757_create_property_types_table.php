<?php

use Illuminate\Support\Facades\DB;
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
        Schema::create('property_types', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
        });

        DB::table('property_types')->insert([
            ['name' => 'Apartment'],
            ['name' => 'House'],
            ['name' => 'Garage/Parking'],
            ['name' => 'Building'],
            ['name' => 'Storage'],
            ['name' => 'Land'],
            ['name' => 'Office'],
            ['name' => 'Commercial'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_types');
    }
};
