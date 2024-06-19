import React from "react";
import AdsList from "./AdsList";

const DashboardBlacklist = ({ ads }) => {
    return (
        <div className="h-full w-full flex flex-col p-8">
            <div className="w-full mt-10">
                <AdsList
                    ads={ads}
                    title={"Blacklisted post"}
                    lastColumn={"Delete"}
                    nextRoute={"ads.blacklist"}
                />
            </div>
        </div>
    );
};

export default DashboardBlacklist;
