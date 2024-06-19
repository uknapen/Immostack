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
        Schema::create('status', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
        });

        DB::table('status')->insert([
            ['name' => 'Waiting for review'], // 1
            ['name' => 'In review'], // 2
            ['name' => 'Rejected'], // 3
            ['name' => 'Published'], // 4
            ['name' => 'Waiting for edit review'], // 5
            ['name' => 'Edit in review'], // 6
            ['name' => 'Edit rejected'], // 7
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('status');
    }
};
