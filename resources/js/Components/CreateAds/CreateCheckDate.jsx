import React, { useState } from "react";

const CreateCheckDate = ({ data, name, handleChange, text }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <div className="flex items-center">
            <div className="custom-checkbox mr-2">
                <input
                    type="checkbox"
                    id="myCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="myCheckbox"></label>
            </div>
            <span className="create-input-label">Yes</span>
            {isChecked ? (
                <>
                    <span className="create-input-label mr-4">, {text}</span>
                    <input
                        type="number"
                        value={data.name}
                        name={name}
                        onChange={handleChange}
                        min={data.construction_year}
                        max="2025"
                        className="create-box-date"
                    />
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default CreateCheckDate;
