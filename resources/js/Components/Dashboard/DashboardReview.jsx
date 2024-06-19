import React from "react";
import AdsList from "./AdsList";

const DashboardReview = ({ ads }) => {
    return (
        <div className="h-full w-full flex flex-col p-8">
            <div className="w-full mt-10">
                <AdsList
                    ads={ads}
                    title={"Post to review"}
                    lastColumn={"Review"}
                    nextRoute={"ads.validate"}
                />
            </div>
        </div>
    );
};

export default DashboardReview;
