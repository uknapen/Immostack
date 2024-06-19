import React from "react";

const SinglePlan = ({ ad }) => {
    return (
        <div className="single-spec">
            {/* title */}
            <div className="flex justify-between border-b border-outline_color ">
                <span className="p-2">Inside Disposition</span>

                <div className="border-l border-outline_color py-2 px-6">
                    <img src="../svg/plan.svg" className="w-6 h-6 "></img>
                </div>
            </div>
            {/* entries */}
            <div className="flex flex-col gap-2">
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Number of rooms: </span>
                    <span>{ad.property.rooms}</span>
                </div>
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Number of bedrooms: </span>
                    <span>{ad.property.bedrooms}</span>
                </div>
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Number of bathrooms: </span>
                    <span>{ad.property.bathrooms}</span>
                </div>
                {/* 1 Entry */}
                {ad.property.cellar ? (
                    <div className="flex justify-between">
                        <span>Cellar: </span>
                        <span>Yes</span>
                    </div>
                ) : (
                    ""
                )}
                {/* 1 Entry */}
                {ad.property.fitted_kitchen ? (
                    <div className="flex justify-between">
                        <span>Fitted kitchen: </span>
                        <span>Yes</span>
                    </div>
                ) : (
                    ""
                )}
                {/* 1 Entry */}
                {ad.property.separate_toilets !== 0 ? (
                    <div className="flex justify-between">
                        <span>Separated toilet: </span>
                        <span>{ad.property.separate_toilets}</span>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default SinglePlan;
// rooms: "",
// bedrooms: "",
// bathrooms: "",
// cellar: false,
// fitted_kitchen: false,
// separate_toilets: "",
