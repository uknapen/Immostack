import React from "react";
import AdsList from "./AdsList";

const DashboardSubmitted = ({ ads }) => {
    console.log(ads);
    return (
        <div className="h-full w-full flex flex-col p-8">
            <div className="w-full mt-10">
                <AdsList
                    ads={ads}
                    title={"My post in waiting of validation"}
                    lastColumn={"Edit"}
                    nextRoute={"ads.edit"}
                    lastColumn2={"Remove"}
                    nextRoute2={"ads.delete"}
                />
            </div>
        </div>
    );
};

export default DashboardSubmitted;
