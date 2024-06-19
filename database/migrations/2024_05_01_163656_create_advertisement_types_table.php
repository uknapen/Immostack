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
        Schema::create('advertisement_types', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
        });

        DB::table('advertisement_types')->insert([
            ['name' => 'Sale'],
            ['name' => 'Rent'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('advertisement_types');
    }
};
