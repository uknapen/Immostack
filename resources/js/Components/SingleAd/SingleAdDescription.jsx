import React from "react";

const SingleAdDescription = ({ ad }) => {
    return (
        <div className="p-4 bg-background_color rounded-[32px]">
            <div className="text-3xl mb-4">Description</div>
            <span>{ad.description}</span>
        </div>
    );
};

export default SingleAdDescription;
