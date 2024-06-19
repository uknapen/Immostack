import React, { useState } from "react";
import CreateAdsRadioSelect from "./CreateAdsRadioSelect";

const CreateAdsCategory = ({
    data,
    setData,
    errors,
    handleChange,
    setShowMonthlyCharges,
}) => {
    const handleAdsTypeChange = (e) => {
        const { value } = e.target;
        setData("ads_type_id", value);
        setShowMonthlyCharges(value === "1");
    };

    const [selectedPropertyType, setSelectedPropertyType] = useState(
        data.property_type_id
    );

    const handleBoxClick = (selectedValue) => {
        setData("property_type_id", selectedValue);
        setSelectedPropertyType(selectedValue); // Update selected property type
    };

    const propertyTypeList = [
        { label: "Apartment", value: "1", svg: "../svg/apartment.svg" },
        { label: "House", value: "2", svg: "../svg/house.svg" },
        { label: "Garage/Parking", value: "3", svg: "../svg/parking.svg" },
        { label: "Building", value: "4", svg: "../svg/building.svg" },
        { label: "Storage", value: "5", svg: "../svg/warehouse.svg" },
        { label: "Land", value: "6", svg: "../svg/field.svg" },
        { label: "Office", value: "7", svg: "../svg/office.svg" },
        { label: "Commercial", value: "8", svg: "../svg/shop.svg" },
    ];
    return (
        <div className="create-category">
            <div className="create-category-title">Advertisement Category</div>
            <div className="create-category-input">
                <span className="create-category-span mb-4">
                    Do you want to :
                </span>
                <div className="create-category-div mb-2">
                    <input
                        type="radio"
                        value={`1`}
                        id="radio-rent"
                        name="ads_type_id"
                        checked={data.ads_type_id === "1"}
                        onChange={handleAdsTypeChange}
                    />{" "}
                    <label htmlFor="radio-rent" className="create-input-label">
                        Rent
                    </label>
                </div>
                <div className="create-category-div">
                    <input
                        type="radio"
                        value={`2`}
                        id="radio-buy"
                        name="ads_type_id"
                        checked={data.ads_type_id === "2"}
                        onChange={handleAdsTypeChange}
                    />
                    <label htmlFor="radio-buy" className="create-input-label">
                        Sell
                    </label>
                </div>

                {errors.ads_type_id && <div>{errors.ads_type_id}</div>}
            </div>
            <div className="create-category-input mt-8">
                <span className="create-category-span mb-4">
                    What kind of property are you advertising
                </span>
                <div className="create-property-list">
                    {propertyTypeList.map((item) => (
                        <CreateAdsRadioSelect
                            key={item.value}
                            label={item.label}
                            value={item.value}
                            handleBoxClick={handleBoxClick}
                            selectedValue={selectedPropertyType}
                            svg={item.svg}
                        />
                    ))}
                </div>
                {errors.property_type_id && (
                    <div>{errors.property_type_id}</div>
                )}
            </div>
            <div className="create-category-input mt-8">
                <span className="create-category-span">
                    What's the title of the property ? This will be how the
                    advertisement is called on our website :
                </span>
                <input
                    type="text"
                    value={data.title}
                    name="title"
                    onChange={handleChange}
                    className="create-category-input-field"
                />
                {errors.title && <div>{errors.title}</div>}
            </div>
        </div>
    );
};

export default CreateAdsCategory;
