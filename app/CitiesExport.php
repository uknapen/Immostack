<?php

namespace App;

use App\Models\City;

trait CitiesExport
{
    protected function getCities()
    {
        return City::select('name')->orderBy('name', 'asc')->distinct()->pluck('name')->toArray();
    }
}
