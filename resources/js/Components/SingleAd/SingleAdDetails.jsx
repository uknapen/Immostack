import React from "react";
import Map from "../Map";
import SingleAdDescription from "./SingleAdDescription";
import SingleAdFeatures from "./SingleAdFeatures";
import SingleAdLocalisation from "./SingleAdLocalisation";
import SingleAdSurrounding from "./SingleAdSurrounding";

const SingleAdDetails = ({ ad }) => {
    return (
        <div className="single-details " id="single-detail">
            <SingleAdDescription ad={ad} />
            <SingleAdFeatures ad={ad} />
            <SingleAdLocalisation ad={ad} />
            <SingleAdSurrounding ad={ad} />
        </div>
    );
};

export default SingleAdDetails;
