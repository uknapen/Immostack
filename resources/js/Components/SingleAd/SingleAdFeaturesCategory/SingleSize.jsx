import React from "react";

const SingleSize = ({ ad }) => {
    console.log(ad.property.year_renovation);
    return (
        <div className="single-spec">
            {/* title */}
            <div className="flex justify-between border-b border-outline_color ">
                <span className="p-2">Size</span>

                <div className="border-l border-outline_color py-2 px-6">
                    <img src="../svg/size.svg" className="w-6 h-6 "></img>
                </div>
            </div>
            {/* entries */}
            <div className="flex flex-col gap-2">
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Build in: </span>
                    <span>{ad.property.year_construction}</span>
                </div>
                {/* 1 Entry */}
                {ad.property.year_renovation !== null ? (
                    <div className="flex justify-between">
                        <span>Renovated in: </span>
                        <span>{ad.property.year_renovation}</span>
                    </div>
                ) : (
                    ""
                )}
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Ground surface: </span>
                    <span>{ad.property.surface} m²</span>
                </div>
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Livable surface: </span>
                    <span>{ad.property.livable_surface} m²</span>
                </div>
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Terrain surface: </span>
                    <span>{ad.property.terrain_surface} m²</span>
                </div>
            </div>
        </div>
    );
};

export default SingleSize;
// construction_year: "",
// renovation_year: "",
// surface: 0,
// livable_surface: 0,
// terrain_surface: 0,
