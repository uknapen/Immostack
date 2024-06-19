import React from "react";

const AdsListHeader = ({ lastColumn, lastColumn2 }) => {
    return (
        <>
            <div className="bg-primary_color py-2 px-4 font-bold border border-gray-300">
                Type
            </div>
            <div className="bg-primary_color py-2 px-4 font-bold border border-gray-300">
                Contract
            </div>
            <div className="bg-primary_color py-2 px-4 font-bold border border-gray-300">
                City
            </div>
            <div className="bg-primary_color py-2 px-4 font-bold border border-gray-300">
                Title
            </div>
            <div className="bg-primary_color py-2 px-4 font-bold border border-gray-300">
                Price
            </div>
            <div className="bg-primary_color py-2 px-4 font-bold border border-gray-300">
                {lastColumn}
            </div>
            {lastColumn2 && (
                <div className="bg-primary_color py-2 px-4 font-bold border border-gray-300">
                    {lastColumn2}
                </div>
            )}
        </>
    );
};

export default AdsListHeader;
