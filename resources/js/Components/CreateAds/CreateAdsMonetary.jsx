import React, { useState, useEffect } from "react";

const CreateAdsMonetary = ({
    data,
    errors,
    handleChange,
    showMonthlyCharges,
}) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (data.agency_fees !== "") {
            setIsChecked(true);
        }
    }, []);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <div className="create-category">
            <div className="create-category-title">Monetary Informations</div>

            <div className="create-category-input">
                <span className="create-category-span">Price:</span>
                <input
                    type="number"
                    value={data.price}
                    name="price"
                    id="price"
                    onChange={handleChange}
                    className="create-category-input-svg"
                />
                {errors.price && <div>{errors.price}</div>}
                <label htmlFor="price" className="abs-label">
                    €
                </label>
            </div>

            {showMonthlyCharges && (
                <div className="create-category-input">
                    <span className="create-category-span">
                        Monthly charges:
                    </span>
                    <input
                        type="number"
                        value={data.monthly_charges}
                        name="monthly_charges"
                        id="monthly_charges"
                        onChange={handleChange}
                        className="create-category-input-svg"
                    />
                    {errors.monthly_charges && (
                        <div>{errors.monthly_charges}</div>
                    )}
                    <label htmlFor="monthly_charges" className="abs-label">
                        €
                    </label>
                </div>
            )}

            <div className="create-category-input">
                <span className="create-category-span">
                    Is there any agency fees ?
                </span>
                <div className="flex items-center w-3/4 ml-[16px] h-[52px]">
                    <div className="custom-checkbox mr-2 ">
                        <input
                            type="checkbox"
                            id="myCheckbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="myCheckbox"></label>
                    </div>
                    <span className="create-input-label">Yes</span>
                    <div
                        className={`flex items-center w-full ${
                            isChecked ? "fade-in" : "fade-out"
                        }`}
                    >
                        {isChecked ? (
                            <>
                                <span className="create-input-label text-nowrap mr-4">
                                    , how much ?
                                </span>
                                <div className="relative w-full">
                                    <input
                                        type="number"
                                        value={data.agency_fees}
                                        name="agency_fees"
                                        id="agency_fees"
                                        onChange={handleChange}
                                        className="create-category-input-svg !mx-0 !w-full"
                                    />
                                    {errors.agency_fees && (
                                        <div>{errors.agency_fees}</div>
                                    )}
                                    <label
                                        htmlFor="agency_fees"
                                        className="abs-label-check"
                                    >
                                        €
                                    </label>
                                </div>
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Fee payer:</span>
                <select
                    name="fee_payer_id"
                    id="fee_payer_id"
                    onChange={handleChange}
                    value={data.fee_payer_id}
                    className="create-category-input-field"
                >
                    <option value="1">Not specified</option>
                    <option value="2">Buyer</option>
                    <option value="3">Seller</option>
                </select>
                {errors.fee_payer_id && <div>{errors.fee_payer_id}</div>}
            </div>
        </div>
    );
};

export default CreateAdsMonetary;
