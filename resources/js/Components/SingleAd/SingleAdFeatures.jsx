import React from "react";
import SingleContrat from "./SingleAdFeaturesCategory/SingleContrat";
import SingleFloor from "./SingleAdFeaturesCategory/SingleFloor";
import SingleSize from "./SingleAdFeaturesCategory/SingleSize";
import SinglePlan from "./SingleAdFeaturesCategory/SinglePlan";
import SingleOutside from "./SingleAdFeaturesCategory/SingleOutside";
import SingleSpec from "./SingleAdFeaturesCategory/SingleSpec";

const SingleAdFeatures = ({ ad }) => {
    return (
        <div className="mb-4 p-4 bg-background_color rounded-[32px]">
            <div className="text-3xl">Features</div>
            <div className="flex mt-5 flex-wrap gap-y-8 justify-between">
                <SingleContrat ad={ad} />
                <SingleFloor ad={ad} />
                <SingleSize ad={ad} />
                <SinglePlan ad={ad} />
                <SingleOutside ad={ad} />
                <SingleSpec ad={ad} />
            </div>
        </div>
    );
};

export default SingleAdFeatures;
