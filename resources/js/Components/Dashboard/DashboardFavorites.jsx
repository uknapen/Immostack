import React from "react";
import AdsList from "./AdsList";

const DashboardFavorites = ({ ads }) => {
    console.log(ads);
    return (
        <div className="h-full w-full flex flex-col p-8">
            <div className="w-full mt-10">
                <AdsList
                    ads={ads}
                    title={"Favorite post"}
                    lastColumn={"Remove"}
                    nextRoute={"ads.favorite.toggle"}
                />
            </div>
        </div>
    );
};

export default DashboardFavorites;
