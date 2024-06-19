import React from "react";

const SingleAdSurrounding = ({ ad }) => {
    return (
        <>
            {ad.surroundings ? (
                <div className="p-4 bg-background_color rounded-[32px]">
                    <div className="text-3xl mb-4">Surroundings</div>
                    <div>{ad.surroundings}</div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default SingleAdSurrounding;
