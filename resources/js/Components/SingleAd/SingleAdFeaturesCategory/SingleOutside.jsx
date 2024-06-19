import React from "react";

const SingleOutside = ({ ad }) => {
    return (
        <>
            {ad.property.balcony ||
            ad.property.terrace ||
            ad.property.pool ||
            ad.property.parking_spots ||
            ad.property.garage ? (
                <div className="single-spec">
                    {/* title */}
                    <div className="flex justify-between border-b border-outline_color ">
                        <span className="p-2">Outside</span>

                        <div className="border-l border-outline_color py-2 px-6">
                            <img
                                src="../svg/terrace.svg"
                                className="w-6 h-6 "
                            ></img>
                        </div>
                    </div>
                    {/* entries */}
                    <div className="flex flex-col gap-2">
                        {/* 1 Entry */}
                        {ad.property.balcony ? (
                            <div className="flex justify-between">
                                <span>Balcony: </span>
                                <span>{ad.property.balcony}</span>
                            </div>
                        ) : (
                            ""
                        )}

                        {/* 1 Entry */}
                        {ad.property.terrace ? (
                            <div className="flex justify-between">
                                <span>Terrace: </span>
                                <span>{ad.property.terrace}</span>
                            </div>
                        ) : (
                            ""
                        )}

                        {/* 1 Entry */}
                        {ad.property.pool ? (
                            <div className="flex justify-between">
                                <span>Pool: </span>
                                <span>{ad.property.pool}</span>
                            </div>
                        ) : (
                            ""
                        )}

                        {/* 1 Entry */}
                        {ad.property.parking_spots ? (
                            <div className="flex justify-between">
                                <span>Parking spots: </span>
                                <span>{ad.property.parking_spots}</span>
                            </div>
                        ) : (
                            ""
                        )}

                        {/* 1 Entry */}
                        {ad.property.garage ? (
                            <div className="flex justify-between">
                                <span>Garage: </span>
                                <span>{ad.property.garage}</span>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default SingleOutside;
// balcony: "",
// terrace: "",
// pool: "",
// garage: "",
// parking_spots: "",
