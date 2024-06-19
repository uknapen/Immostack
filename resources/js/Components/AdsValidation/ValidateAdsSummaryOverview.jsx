import React from "react";
import CreateAdsSlider from "./ValidateAdsSlider";

const CreateAdsSummaryOverview = ({ data, errors, handleChange }) => {
    // console.log(data.photos);
    return (
        <div className="create-category">
            <div className="create-category-title">Summary</div>
            <div className="create-category-input">
                <CreateAdsSlider data={data.photos} />
            </div>
            <div className="create-category-input">
                <span>You have set this description :</span>
                <blockquote className="p-4">{data.description}</blockquote>
            </div>
            <div className="create-category-input">
                <span>
                    This is how you describe the surroundings of the properties
                    :
                </span>
                <blockquote className="p-4">{data.surroundings}</blockquote>
            </div>
        </div>
    );
};

export default CreateAdsSummaryOverview;
