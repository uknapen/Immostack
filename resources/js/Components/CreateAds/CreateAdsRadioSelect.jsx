import React from "react";

const CreateAdsRadioSelect = ({
    label,
    value,
    handleBoxClick,
    selectedValue,
    svg,
}) => {
    const handleClick = () => {
        handleBoxClick(value);
    };

    return (
        <div className="createAdsRadioSelect " onClick={handleClick}>
            <label
                htmlFor={value}
                className="flex flex-col justify-center items-center gap-2"
            >
                <img src={svg} className="w-5 h-5 icon"></img>
                <span className="createAdsRadioSelect-label">{label}</span>
                <input
                    type="radio"
                    name="property_type_id"
                    id={value}
                    value={value}
                    checked={selectedValue === value}
                    onChange={() => {}}
                />
            </label>
        </div>
    );
};

export default CreateAdsRadioSelect;
