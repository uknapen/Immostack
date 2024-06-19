import React from "react";
import AdsList from "./AdsList";

const DashboardRejected = ({ ads }) => {
    return (
        <div className="h-full w-full flex flex-col p-8">
            <div className="w-full mt-10">
                <AdsList
                    ads={ads}
                    title={"My rejected post"}
                    lastColumn={"Edit"}
                    nextRoute={"ads.edit"}
                    lastColumn2={"Remove"}
                    nextRoute2={"ads.delete"}
                />
            </div>
        </div>
    );
};

export default DashboardRejected;
