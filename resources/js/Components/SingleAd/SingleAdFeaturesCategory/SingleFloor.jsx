import React from "react";

const SingleFloor = ({ ad }) => {
    return (
        <div className="single-spec">
            {/* title */}
            <div className="flex justify-between border-b border-outline_color ">
                <span className="p-2">Building</span>

                <div className="border-l border-outline_color py-2 px-6">
                    <img src="../svg/building.svg" className="w-6 h-6 "></img>
                </div>
            </div>
            {/* entries */}
            <div className="flex flex-col gap-2">
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Number of floors: </span>
                    <span>{ad.property.floors}</span>
                </div>
                {/* 1 Entry */}
                {ad.floor !== "1" ? (
                    <>
                        <div className="flex justify-between">
                            <span>Floor: </span>
                            <span>{ad.property.floor}</span>
                        </div>
                        {ad.property.elevator ? (
                            <div className="flex justify-between">
                                <span>Elevator: </span>
                                <span>{ad.property.elevator}</span>
                            </div>
                        ) : (
                            ""
                        )}
                    </>
                ) : (
                    ""
                )}
                {/* 1 Entry */}
            </div>
        </div>
    );
};

export default SingleFloor;
// floor: "",
// floors: "",
// elevator: false,
