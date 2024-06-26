<?php

use App\Models\Advertisement;
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
        Schema::create('advertisement_images', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->boolean('approved');
            $table->string('path');
            $table->foreignIdFor(Advertisement::class);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('advertisement_images');
    }
};
