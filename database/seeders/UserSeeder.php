<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\User;
use App\Models\Country;
use App\Models\UserDetails;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    private $individuals =
    [
        [
            'name' => 'Martine',
            'email' => 'martine.chevrolet@fakemail.com',
            'password' => '123456789',
        ],
        [
            'name' => 'Fabrice',
            'email' => 'fabrice.berger@fakemail.com',
            'password' => '123456789',
        ],
        [
            'name' => 'Gérard',
            'email' => 'gerard.merle@fakemail.com',
            'password' => '123456789',
        ],
        [
            'name' => 'Pierrette',
            'email' => 'pierette.roche@fakemail.com',
            'password' => '123456789',
        ],
        [
            'name' => 'Sélène',
            'email' => 'selene.dupond@fakemail.com',
            'password' => '123456789',
        ],
    ];

    private $professionals =
    [
        [
            'name' => 'Martine',
            'email' => 'martine.chevrolet@fakepromail.com',
            'password' => '123456789',
            'first_name' => 'Martine',
            'last_name' => 'Chevrolet',
            'company_name' => 'Real Estate Lux',
            'vat_number' => '123456789',
            'public_email' => 'realestatelux@fakemail.com',
            'website' => 'www.realestatelux.fakesite',
            'phone' => '+352 123 456 789',
            'number' => '12',
            'street' => 'Rue de la boucherie',
            'street2' => '',
            'cityId' => '1',
            'logo' => '1.jpg',
        ],
        [
            'name' => 'Fabrice',
            'email' => 'fabrice.berger@fakepromail.com',
            'password' => '123456789',
            'first_name' => 'Fabrice',
            'last_name' => 'Berger',
            'company_name' => 'ERA Real Estate',
            'vat_number' => '123456789',
            'public_email' => 'era.realestate@fakemail.com',
            'website' => 'www.era-realestate.fakesite',
            'phone' => '+352 123 456 789',
            'number' => '43',
            'street' => 'Rue de l\'innovation',
            'street2' => '',
            'cityId' => '2',
            'logo' => '2.jpg',
        ],
        [
            'name' => 'Gérard',
            'email' => 'gerad.merle@fakepromail.com',
            'password' => '123456789',
            'first_name' => 'Gérard',
            'last_name' => 'Merle',
            'company_name' => 'Prime Real Estate',
            'vat_number' => '123456789',
            'public_email' => 'prime.realestate@fakemail.com',
            'website' => 'www.primerealestate.fakesite',
            'phone' => '+352 123 456 789',
            'number' => '5',
            'street' => 'Place de l\'église',
            'street2' => '',
            'cityId' => '3',
            'logo' => '3.jpg',
        ],
        [
            'name' => 'Pierrette',
            'email' => 'pierrette.roche@fakepromail.com',
            'password' => '123456789',
            'first_name' => 'Pierrette',
            'last_name' => 'Roche',
            'company_name' => 'Real Estate 3000',
            'vat_number' => '123456789',
            'public_email' => 'realestate3000@fakemail.com',
            'website' => 'www.realestate3000.fakesite',
            'phone' => '+352 123 456 789',
            'number' => '71',
            'street' => 'Grand Rue',
            'street2' => '',
            'cityId' => '4',
            'logo' => '4.jpg',
        ],
        [
            'name' => 'Sélène',
            'email' => 'selene.dupond@fakepromail.com',
            'password' => '123456789',
            'first_name' => 'Sélène',
            'last_name' => 'Dupond',
            'company_name' => 'Lorem Ipsum Immo',
            'vat_number' => '123456789',
            'public_email' => 'loremipsum.immo@fakemail.com',
            'website' => 'www.loremipsum-immo.fakesite',
            'phone' => '+352 123 456 789',
            'number' => '1',
            'street' => 'Rue de l\'Eau',
            'street2' => '',
            'cityId' => '5',
            'logo' => '5.jpg',
        ],
        
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach($this->individuals as $individual)
        {
            $this->createIndividual($individual);
        }
        foreach($this->professionals as $professional)
        {
            $this->createProfessional($professional);
        }
    }

    private function createIndividual($user)
    {
        $newUser = new User();
        $newUser->name = $user['name'];
        $newUser->email = $user['email'];
        $newUser->password = Hash::make($user['password']);
        $newUser->user_type_id = 1;
        $newUser->save();
    }

    private function createProfessional($user)
    {
        $userDetails = new UserDetails();
        $userDetails->first_name = $user['first_name'];
        $userDetails->last_name = $user['last_name'];
        $userDetails->company_name = $user['company_name'];
        $userDetails->status_id = 1; // Waiting for review
        $userDetails->vat_number = $user['vat_number'];
        $userDetails->email = $user['public_email'];
        $userDetails->website = $user['website'];
        $userDetails->phone = $user['phone'];
        $userDetails->number = $user['number'];
        $userDetails->street = $user['street'];
        $userDetails->street2 = $user['street2'];
        $userDetails->city_id = $user['cityId'];
        $userDetails->logo = $user['logo'];
        $userDetails->save();

        $newUser = new User();
        $newUser->name = $user['name'];
        $newUser->email = $user['email'];
        $newUser->password = Hash::make($user['password']);
        $newUser->user_type_id = 2;
        $newUser->user_details_id = $userDetails->id;
        $newUser->save();
    }
}
