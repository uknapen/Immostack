<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class LogoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 1; $i <= 6; $i++)
        {
            $logoPath = "/ads/logos/{$i}.jpg";
            $destPath = "/logos/{$i}.jpg";
            Storage::disk('public_folder')->move($logoPath, $destPath);
        }
    }
}
