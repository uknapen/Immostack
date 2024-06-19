import React from "react";
import ValidationField from "./ValidationField";

const CreateAdsCategory = ({ data, handleChange, ad }) => {
    return (
        <div className="create-category">
            <div className="create-category-title">Validation</div>

            <div className="create-category-input mt-8">
                <span className="create-category-span">
                    Rejection comment. Please comment only in case of a
                    rejection of the submission
                </span>
                <textarea
                    className="create-category-input-textarea"
                    name="rejected_comment"
                    id="rejected_comment"
                    onChange={handleChange}
                    value={data["rejected_comment"]}
                    placeholder="Write your comment for rejection of the advertisement"
                />
            </div>
        </div>
    );
};

export default CreateAdsCategory;
