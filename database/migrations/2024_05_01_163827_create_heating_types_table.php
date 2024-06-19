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
        Schema::create('heating_types', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
        });

        DB::table('heating_types')->insert([
            ['name' => 'Not specified'],
            ['name' => 'Fuel'],
            ['name' => 'Natural gas'],
            ['name' => 'Electricity'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('heating_types');
    }
};
