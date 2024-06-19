import React from "react";
import ValidationField from "./ValidationField";

const CreateAdsCategory = ({ data, handleChange, ad }) => {
    return (
        <div className="create-category">
            <div className="create-category-title">Validation</div>

            <div className="create-category-input mt-8">
                <span className="create-category-span">Number of rooms</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.rooms}
                        name="rooms"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"rooms_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Number of bedrooms</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.bedrooms}
                        name="bedrooms"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"bedrooms_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">
                    Number of bathrooms
                </span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.bathrooms}
                        name="bathrooms"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"bathrooms_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Garage</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.garage}
                        name="garage"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"garage_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Parking spots</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.parking_spots}
                        name="parking_spots"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"parking_spots_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Balcony</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.balcony}
                        name="balcony"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"balcony_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Terrace</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.terrace}
                        name="terrace"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"terrace_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateAdsCategory;
