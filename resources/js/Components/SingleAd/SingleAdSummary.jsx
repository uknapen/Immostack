import React from "react";
import SingleAdImageSlider from "./SingleAdImageSlider";
import SingleAdSummaryText from "./SingleAdSummaryText";

const SingleAdSummary = ({ ad, user }) => {
    return (
        <div className="single-summary">
            <div className="single-summary-title">
                <span>{ad.title}</span>
            </div>
            <div className="single-summary-content">
                <SingleAdImageSlider ad={ad} />
                <SingleAdSummaryText ad={ad} user={user} />
            </div>
        </div>
    );
};

export default SingleAdSummary;
