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
        Schema::create('energy_classes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
        });

        DB::table('energy_classes')->insert([
            ['name' => 'Not specified'],
            ['name' => 'A'],
            ['name' => 'B'],
            ['name' => 'C'],
            ['name' => 'D'],
            ['name' => 'E'],
            ['name' => 'F'],
            ['name' => 'G'],
            ['name' => 'H'],
            ['name' => 'I'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('energy_classes');
    }
};
