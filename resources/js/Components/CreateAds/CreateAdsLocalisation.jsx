import React from "react";

const CreateAdsLocalisation = ({ data, errors, handleChange }) => {
    return (
        <div className="create-category">
            <div className="create-category-title">Property Localisation</div>

            <div className="create-category-input">
                <span className="create-category-span">Street name:</span>
                <input
                    type="text"
                    value={data.street}
                    name="street"
                    onChange={handleChange}
                    className="create-category-input-field"
                />
                {errors.street && <div>{errors.street}</div>}
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Street name 2:</span>
                <input
                    type="text"
                    value={data.street2}
                    name="street2"
                    onChange={handleChange}
                    className="create-category-input-field"
                />
                {errors.street2 && <div>{errors.street2}</div>}
            </div>

            <div className="create-category-input">
                <span className="create-category-span mr-4">
                    Street number:
                </span>
                <input
                    type="text"
                    value={data.number}
                    name="number"
                    onChange={handleChange}
                    className="create-category-input-field"
                />
                {errors.number && <div>{errors.number}</div>}
            </div>

            <div className="create-category-input">
                <span className="create-category-span mr-4">Post code:</span>
                <input
                    type="text"
                    value={data.post_code}
                    name="post_code"
                    id="post_code"
                    onChange={handleChange}
                    className="create-category-input-svg"
                ></input>
                <label htmlFor="post_code" className="abs-label top-0">
                    L
                </label>
                {errors.post_code && <div>{errors.post_code}</div>}
            </div>

            <div className="create-category-input">
                <span className="create-category-span">City:</span>
                <input
                    type="text"
                    value={data.city}
                    name="city"
                    onChange={handleChange}
                    className="create-category-input-field"
                />
                {errors.city && <div>{errors.city}</div>}
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Country:</span>
                <input
                    type="text"
                    value={data.country}
                    name="country"
                    onChange={handleChange}
                    className="create-category-input-field"
                />
                {errors.country && <div>{errors.country}</div>}
            </div>
        </div>
    );
};

export default CreateAdsLocalisation;
