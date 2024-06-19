import React, { useState } from "react";

const FormInput = (data, value, errors) => {
    const [focused, setFocused] = useState(false);
    const [valid, setValid] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = (event) => {
        setFocused(false);
        const isValid = event.target.validity.valid;
        setValid(isValid);
    };
    const handleChange = (e) => {
        const target = e.currentTarget;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        setData(target.name, value);
    };
    console.log(value);
    return (
        <>
            {/* <div className="input-box">
                <input
                    type="text"
                    className="input-field"
                    value={data.value}
                    name={value}
                    id={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <label
                    for={value}
                    className="input-label"
                    style={{
                        transform: `translateY(${
                            focused || valid ? "-28px" : "0"
                        })`,
                        fontSize: focused || valid ? "14px" : "16px",
                        color: focused || valid ? "black" : "gray",
                    }}
                >
                    {value}
                </label>
                <i className="bx bx-user icon"></i>
            </div>
            {errors.value && <div>{errors.value}</div>} */}
        </>
    );
};

export default FormInput;
