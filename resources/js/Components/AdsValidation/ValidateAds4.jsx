import React from "react";
import ValidationField from "./ValidationField";

const CreateAdsCategory = ({ data, handleChange, ad }) => {
    return (
        <div className="create-category">
            <div className="create-category-title">Validation</div>

            <div className="create-category-input mt-8">
                <span className="create-category-span">Cellar</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.cellar}
                        name="cellar"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"cellar_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Fitted Kitchen</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.fitted_kitchen}
                        name="fitted_kitchen"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"fitted_kitchen_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Separated toilets</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.separate_toilets}
                        name="separate_toilets"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"separate_toilets_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Elevator</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.elevator}
                        name="elevator"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"elevator_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Pool</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.pool}
                        name="pool"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"pool_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateAdsCategory;
