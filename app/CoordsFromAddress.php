<?php

namespace App;

use stdClass;
use Illuminate\Support\Facades\Http;

trait CoordsFromAddress
{
    protected function getCoordinates($number, $street, $street2, $post_code, $city, $country)
    {
        $coords = new stdClass();
        $address = "{$number} {$street} {$street2} {$post_code} {$city} {$country}";
        $address = str_replace(' ', '%20', $address);
        $url = "https://maps.googleapis.com/maps/api/geocode/json?address=$address&key=AIzaSyDVmkGfrdrSbnxQJ2KEp45UOymoIrQBGUY";
        $response = Http::get($url);
        $geocode = $response->json();
        if ($geocode['status'] === 'OK' && isset($geocode['results'][0]['geometry']['location'])) {
            $coords->lat = $geocode['results'][0]['geometry']['location']['lat'];
            $coords->lng = $geocode['results'][0]['geometry']['location']['lng'];
        } else {
            $coords->lat = 49.61088;
            $coords->lng = 6.13274;
        }
        return $coords;
    }
}
