import React from "react";
import ResultAd from "./ResultAd";

const ResultSearch = ({ads, favoriteIds, handleSubmit, user}) => {
    // const ads = [
    //     {
    //         id: "1",
    //         price: "350,000",
    //         location: "Luxembourg",
    //         name: "Appart sur mer",
    //         agence: "Blabliblo",
    //         surface: 34,
    //         bedroom: 2,
    //         bathroom: 1,
    //         description: `
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem pariatur, neque magnam iure adipisci impedit culpa deserunt eum aliquid consectetur assumenda dolorum suscipit odio ex esse consequatur! Quaerat, provident. `,
    //         contact_mail: "test@test.test",
    //     },
    //     {
    //         id: "2",
    //         price: "350,000",
    //         location: "Luxembourg",
    //         name: "Appart sur mer",
    //         agence: "Blabliblo",
    //         surface: 34,
    //         bedroom: 2,
    //         bathroom: 1,
    //         description: `
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem pariatur, neque magnam iure adipisci impedit culpa deserunt eum aliquid consectetur assumenda dolorum suscipit odio ex esse consequatur! Quaerat, provident. `,
    //         contact_mail: "test@test.test",
    //     },
    // ];

    return (
        <div className="flex flex-col content-center gap-6 w-full">
            {ads.map((ad) => (
                <ResultAd key={ad.id} ad={ad} isFav={favoriteIds.includes(ad.id)} handleSubmit={handleSubmit} user={user} />
            ))}
        </div>
    );
};

export default ResultSearch;
