import React, { useState } from "react";

const CreateCheck = ({ data, name, handleChange, text }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <div className="flex items-center">
            <div class="custom-checkbox mr-2">
                <input
                    type="checkbox"
                    id="myCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <label for="myCheckbox"></label>
            </div>
            <span className="create-input-label">Yes</span>
            {isChecked ? (
                <>
                    <span className="create-input-label mr-4">, {text}</span>
                    <input
                        type="number"
                        value={data.name}
                        name={name}
                        min="1"
                        onChange={handleChange}
                        className="create-box"
                        defaultValue={1}
                    />
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default CreateCheck;
