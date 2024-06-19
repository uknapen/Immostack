import React from "react";
import ValidationField from "./ValidationField";

const CreateAdsCategory = ({ data, handleChange, ad }) => {
    return (
        <div className="create-category">
            <div className="create-category-title">Validation</div>

            <div className="create-category-input mt-8">
                <span className="create-category-span">Post title</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.title}
                        name="title"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"title_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Price</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={`€ ${ad.price.toLocaleString()}`}
                        name="price"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"price_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Monthly charges</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={`€ ${ad.monthly_charges.toLocaleString()}`}
                        name="monthly_charges"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"monthly_charges_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Agency fees</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={`€ ${ad.agency_fees.toLocaleString()}`}
                        name="agency_fees"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"agency_fees_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Fee payer</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.fee_payer}
                        name="fee_payer"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"fee_payer_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Availabity</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.availability}
                        name="availability"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"availability_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateAdsCategory;
