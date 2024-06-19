import React from "react";
import ValidationField from "./ValidationField";
import CreateAdsSlider from "./ValidateAdsSlider";

const CreateAdsCategory = ({ data, handleChange, ad }) => {
    console.log(ad);
    return (
        <div className="create-category">
            <div className="create-category-title">Validation</div>

            <div className="create-category-input mt-8">
                <span className="create-category-span">Pictures</span>

                <CreateAdsSlider data={ad.images} />
                <ValidationField
                    name={"images_rejected"}
                    onChange={handleChange}
                    data={data}
                />
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Energy class</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.energy_class}
                        name="energy_class_id"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"energy_class_id_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Insulation class</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.insulation_class}
                        name="insulation_class_id"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"insulation_class_id_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Heating Type</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.heating_type}
                        name="heating_type"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"heating_type_id_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateAdsCategory;
