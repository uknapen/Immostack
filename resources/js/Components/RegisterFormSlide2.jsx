import React, { useState } from "react";
import Tooltip from "@/Components/Tooltip";

const RegisterFormSlide2 = ({
    data,
    errors,
    setData,
    handleChange,
    jetstream,
    choiceBoolean,
    setChoiceBoolean,
}) => {
    const [focusedInput, setFocusedInput] = useState(null);
    const handleFocus = (name) => {
        setFocusedInput(name);
    };
    const handleBlur = () => {
        setFocusedInput(null);
    };

    return (
        <div className="content">
            <div className="form-title">
                <span>Contact Information</span>
            </div>
            <div className="form-inputs">
                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Contact First Name"
                        value={data.first_name}
                        name="first_name"
                        onChange={handleChange}
                        onFocus={() => handleFocus("first_name")}
                        onBlur={handleBlur}
                        style={
                            errors.first_name && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/user.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "first_name" && (
                        <Tooltip text="The contact person first name">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.first_name && (
                    <div className="error-message">{errors.first_name}</div>
                )}

                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Contact Last Name"
                        value={data.last_name}
                        name="last_name"
                        onChange={handleChange}
                        onFocus={() => handleFocus("last_name")}
                        onBlur={handleBlur}
                        style={
                            errors.last_name && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/user.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "last_name" && (
                        <Tooltip text="The contact person last name">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.last_name && (
                    <div className="error-message">{errors.last_name}</div>
                )}

                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Company Name"
                        value={data.company_name}
                        name="company_name"
                        onChange={handleChange}
                        onFocus={() => handleFocus("company_name")}
                        onBlur={handleBlur}
                        style={
                            errors.company_name && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/note.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "company_name" && (
                        <Tooltip text="The name of your agence that will be displayed on the ads">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.company_name && (
                    <div className="error-message">{errors.company_name}</div>
                )}

                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="VAT Number"
                        value={data.vat_number}
                        name="vat_number"
                        onChange={handleChange}
                        onFocus={() => handleFocus("vat_number")}
                        onBlur={handleBlur}
                        style={
                            errors.vat_number && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/number.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "vat_number" && (
                        <Tooltip text="must be 2 letter followed by the number. Example: LU99999999">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.vat_number && (
                    <div className="error-message">{errors.vat_number}</div>
                )}

                <div className="input-box">
                    <select
                        className="input-field"
                        placeholder="Favorite way of contact"
                        style={{ color: "rgb(107 115 128)" }}
                        onFocus={() => handleFocus("way")}
                        onBlur={handleBlur}
                    >
                        <option value="">Favorite way of contact</option>
                        <option value="">Email</option>
                        <option value="">Phone</option>
                        <option value="">Both</option>
                    </select>
                    <img src="./svg/contact.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "way" && (
                        <Tooltip text="Which way of contact will be shown on the ads">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RegisterFormSlide2;
