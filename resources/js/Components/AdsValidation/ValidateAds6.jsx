import React from "react";
import ValidationField from "./ValidationField";
import CreateAdsSlider from "./ValidateAdsSlider";

const CreateAdsCategory = ({ data, handleChange, ad }) => {
    return (
        <div className="create-category">
            <div className="create-category-title">Validation</div>

            <div className="create-category-input">
                <span className="create-category-span">Description</span>
                <textarea
                    type="text"
                    value={ad.description}
                    name="description"
                    className="create-category-input-textarea w-full h-[200px]"
                    disabled
                />
                <ValidationField
                    name={"description_rejected"}
                    onChange={handleChange}
                    data={data}
                />
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Surrounding</span>
                <textarea
                    type="text"
                    value={ad.surroundings}
                    name="surroundings"
                    className="create-category-input-textarea w-full h-[200px]"
                    disabled
                />
                <ValidationField
                    name={"surroundings_rejected"}
                    onChange={handleChange}
                    data={data}
                />
            </div>
        </div>
    );
};

export default CreateAdsCategory;
