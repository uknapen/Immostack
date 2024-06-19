import React from "react";

const AdsListEmpty = ({ lastColumn2 }) => {
    console.log(
        lastColumn2 ? "7" : "6"
    );
    return (
        <div
            className={`col-span-${
                lastColumn2 ? "7" : "6"
            } py-4 text-center text-gray-500 border border-gray-300`}
        >
            No post available
        </div>
    );
};

export default AdsListEmpty;
