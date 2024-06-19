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
        Schema::create('fee_payers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
        });

        DB::table('fee_payers')->insert([
            ['name' => 'Not specified'],
            ['name' => 'Buyer'],
            ['name' => 'Seller'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fee_payers');
    }
};
