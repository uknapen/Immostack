<?php

namespace App\Actions\Fortify;

use App\Models\City;
use App\Models\User;
use App\Models\Country;
use App\Models\UserDetails;
use Illuminate\Validation\Rule;
use Laravel\Jetstream\Jetstream;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User|null
    {
        $typeId = isset($input['type_id']) ? intval($input['type_id']) : 0;

        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
            'type_id' => ['required'],

            // For professionals
            'first_name' => [Rule::requiredIf($typeId == 2), 'string', 'max:255'],
            'last_name' => [Rule::requiredIf($typeId == 2), 'string', 'max:255'],
            'company_name' => [Rule::requiredIf($typeId == 2), 'string', 'max:255'],
            'vat_number' => [Rule::requiredIf($typeId == 2), 'string', 'max:255'],
            'public_email' => [Rule::requiredIf($typeId == 2), 'string', 'max:255'],
            'website' => [Rule::requiredIf($typeId == 2), 'string', 'max:255'],
            'phone' => [Rule::requiredIf($typeId == 2), 'string', 'max:255'],
            'number' => [Rule::requiredIf($typeId == 2), 'string'],
            'street' => [Rule::requiredIf($typeId == 2), 'string', 'max:255'],
            'street2' => ['nullable', 'string', 'max:255'],
            'post_code' => [Rule::requiredIf($typeId == 2), 'string', 'max:255'],
            'city' => [Rule::requiredIf($typeId == 2), 'string', 'max:255'],
            'country' => [Rule::requiredIf($typeId == 2), 'string', 'max:255'],
            'logo' => $typeId === 2 ? ['required', 'mimes:png,jpg', 'max:2048', 'dimensions:min_width=100,min_height=100,max_width=500,max_height=500'] : ['nullable'],
        ])->validate();

        // Individual
        if($typeId == 1)
        {
            return User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'password' => Hash::make($input['password']),
                'user_type_id' => $typeId,
            ]);
        }
        // Professional
        else if($typeId == 2)
        {
            // Get city id if exists (city/country)
            // else create country and/or city
            $country = Country::where('name', $input['country'])->first();
            if($country == null)
            {
                $newCountry = new Country();
                $newCountry->name = $input['country'];
                $newCountry->save();
                $countryId = $newCountry->id;
            }
            else
            {
                $countryId = $country->id;
            }

            $city = City::where('name', $input['city'])->where('country_id', $countryId)->where('post_code', $input['post_code'])->first();
            if($city == null)
            {
                $newCity = new City();
                $newCity->name = $input['city'];
                $newCity->country_id = $countryId;
                $newCity->post_code = $input['post_code'];
                $newCity->save();
                $cityId = $newCity->id;
            }
            else
            {
                $cityId = $city->id;
            }

            $logo = request()->file('logo');
            $logoPath = $logo->store('/', 'logos');

            $userDetails = new UserDetails();
            $userDetails->first_name = $input['first_name'];
            $userDetails->last_name = $input['last_name'];
            $userDetails->company_name = $input['company_name'];
            $userDetails->status_id = 1; // Waiting for review
            $userDetails->vat_number = $input['vat_number'];
            $userDetails->email = $input['public_email'];
            $userDetails->website = $input['website'];
            $userDetails->phone = $input['phone'];
            $userDetails->number = $input['number'];
            $userDetails->street = $input['street'];
            $userDetails->street2 = isset($input['street2']) ? $input['street2'] : '';
            $userDetails->city_id = $cityId;
            $userDetails->logo = $logoPath;
            $userDetails->save();

            return User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'password' => Hash::make($input['password']),
                'user_type_id' => $typeId,
                'user_details_id' => $userDetails->id,
            ]);

        }
        else
        {
            return null;
        }

    }
}
