import React from "react";

const ResultSearchTitle = ({ count }) => {
    return (
        <div className="display-choice flex flex-row justify-between mb-8">
            <div className="text-3xl p-1 ml-10">
                {count} announcement{count > 1 ? "s" : ""} found !
            </div>
            <div className="">
                {/* <button className="hover:bg-primary_color p-1 rounded-lg">
                    <div className="back-4x4">
                        <div className="case-4x4"></div>
                        <div className="case-4x4"></div>
                        <div className="case-4x4"></div>
                        <div className="case-4x4"></div>
                    </div>
                </button> */}
                {/* <button className="hover:bg-primary_color p-1 rounded-lg">
                    <div className="back-1x2">
                        <div className="case-1x2"></div>
                        <div className="case-1x2"></div>
                    </div>
                </button> */}
            </div>
        </div>
    );
};

export default ResultSearchTitle;
