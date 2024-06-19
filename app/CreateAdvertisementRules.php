<?php

namespace App;

trait CreateAdvertisementRules
{
    /**
     * Get the validation rules used to validate the form when creating an advertisement.
     *
     * @return array<int, \Illuminate\Contracts\Validation\Rule|array<mixed>|string>
     */
    protected function advertisementRules(): array
    {
        return [
            "ads_type_id" => ['required', 'integer', 'min:1', 'max:2'],
            "property_type_id" => ['required', 'integer', 'min:1', 'max:8'],
            "title" => ['required', 'string', 'max:200'],
            "number" => ['required', 'string', 'max:200'],
            "street" => ['required', 'string', 'max:200'],
            "street2" => ['nullable', 'string', 'max:200'],
            "post_code" => ['required', 'string', 'max:200'],
            "city" => ['required', 'string', 'max:200'],
            "country" => ['required', 'string', 'max:200'],
            "price" => ['required', 'integer', 'min:1'],
            "description" => ['required', 'string', 'max:3000'],
            "surroundings" => ['required', 'string', 'max:3000'],
            "agency_fees" => ['nullable', 'integer', 'min:0'],
            "monthly_charges" => ['nullable', 'integer', 'min:0'],
            "availability" => ['required', 'string', 'max:200'],
            "fee_payer_id" => ['required', 'integer', 'min:1', 'max:3'],
            "construction_year" => ['required', 'integer', 'min:1'],
            "renovation_year" => ['nullable', 'integer', 'min:1'],
            "surface" => ['nullable', 'numeric', 'min:0'],
            "livable_surface" => ['nullable', 'numeric', 'min:0'],
            "terrain_surface" => ['nullable', 'numeric', 'min:0'],
            "floor" => ['nullable', 'integer', 'min:0'],
            "floors" => ['nullable', 'integer', 'min:0'],
            "rooms" => ['nullable', 'integer', 'min:0'],
            "bedrooms" => ['nullable', 'integer', 'min:0'],
            "bathrooms" => ['nullable', 'integer', 'min:0'],
            "garage" => ['nullable', 'integer', 'min:0'],
            "parking_spots" => ['nullable', 'integer', 'min:0'],
            "balcony" => ['nullable', 'integer', 'min:0'],
            "terrace" => ['nullable', 'integer', 'min:0'],
            "cellar" => ['nullable', 'boolean'],
            "fitted_kitchen" => ['nullable', 'boolean'],
            "separate_toilets" => ['nullable', 'integer', 'min:0'],
            "pool" => ['nullable', 'integer', 'min:0'],
            "elevator" => ['nullable', 'boolean'],
            "energy_class" => ['nullable', 'integer', 'min:1', 'max:10'],
            "insulation_class" => ['nullable', 'integer', 'min:1', 'max:10'],
            "heating_type" => ['nullable', 'integer', 'min:1', 'max:4'],
            "photos" => ['required', 'list', 'min:3', 'max:10'],
            'photos.*' => ['mimes:png,jpg', 'max:2048', 'dimensions:min_width=500,min_height=500'],
        ];
    }
}
