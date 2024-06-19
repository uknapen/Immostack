# Immostack

This project was done for the final project of the 2024 FullStack bootcamp. By 2, we took 3 weeks to realise it.

## Project

This is a realestate application.
We created 3 types of account :

-   User: This is a registered account that can see and add to favorite listings. It has access to a user portal with all the favorite listings.
-   Professional: This is a registered account that have the same autorisations as user but it can also create listings and delete his own. The newly created listing has to be validated by a admin account before being display on the website.
-   Admin: This is a pre-created account that can validate or reject listings.

## Build

Run the following command:
`composer install`
config the .env file (you can copy the .env.example then modify it with your db)
`php artisan key:generate`
`php artisan migrate`
`php artisan serve`

On a different terminal, run:
`npm install`
`npm run dev`

If you want to create an add you will need the certificat [cacert.pem](https://curl.se/docs/caextract.html) and update the php.ini with the location of the certificat at the ligne `curl.cainfo`

## Todo

We won't work anymore on this project but this is what we have planned for the next

-   Allow admin to delete any listings
-   Create the edit listings for the professional account
-   Create a LiveSearch
-   Create a Chatbox between User and Professional
-   Add a modal for the picture
-   Add statistic and datas to the professional portal to transform it into a dashboard
-   Implement Unit Testing
-   Add security filter (for the login and the contact)
-   Add step by step verification to the forms

## Known bug to fix

-   The edit and delete link in the professional portal are not working
