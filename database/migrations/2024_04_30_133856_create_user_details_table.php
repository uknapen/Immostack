<?php

use App\Models\City;
use App\Models\Status;
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
        Schema::create('user_details', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('company_name');
            $table->foreignIdFor(Status::class);
            $table->string('vat_number');
            $table->string('logo')->nullable();
            $table->string('email');
            $table->string('website');
            $table->string('phone');
            $table->foreignIdFor(City::class);
            $table->string('number');
            $table->string('street');
            $table->string('street2');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_details');
    }
};
