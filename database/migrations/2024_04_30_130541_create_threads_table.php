<?php

use App\Models\Advertisement;
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
        Schema::create('threads', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignIdFor(Advertisement::class);
            $table->foreignIdFor(User::class);
            $table->boolean('is_new_for_user');
            $table->boolean('is_new_for_announcer');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('threads');
    }
};
