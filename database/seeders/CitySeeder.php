<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->createCity("Luxembourg", "L-1728");
        $this->createCity("Esch-sur-Alzette", "L-4360");
        $this->createCity("Mersch", "L-7520");
        $this->createCity("Clervaux", "L-9713");
        $this->createCity("Diekirch", "L-9240");
    }

    private function createCity($name, $post_code)
    {
        $newCity = new City();
        $newCity->name = $name;
        $newCity->country_id = 1;
        $newCity->post_code = $post_code;
        $newCity->save();
    }
}
