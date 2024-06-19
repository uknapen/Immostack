import React, { useState } from "react";
import Tooltip from "@/Components/Tooltip";

const RegisterFormSlide3 = ({
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
                <span>Public Information</span>
            </div>
            <div className="form-inputs">
                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Public Email"
                        value={data.public_email}
                        name="public_email"
                        onChange={handleChange}
                        onFocus={() => handleFocus("public_email")}
                        onBlur={handleBlur}
                        style={
                            errors.public_email && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/mail.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "public_email" && (
                        <Tooltip text="The mail that will be shown on the ads">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.public_email && (
                    <div className="error-message">{errors.public_email}</div>
                )}

                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Website"
                        value={data.website}
                        name="website"
                        onChange={handleChange}
                        onFocus={() => handleFocus("website")}
                        onBlur={handleBlur}
                        style={
                            errors.website && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/web.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "website" && (
                        <Tooltip text="The website of your agency">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.website && (
                    <div className="error-message">{errors.website}</div>
                )}

                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Phone"
                        value={data.phone}
                        name="phone"
                        onChange={handleChange}
                        onFocus={() => handleFocus("phone")}
                        onBlur={handleBlur}
                        style={
                            errors.phone && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/phone.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "phone" && (
                        <Tooltip text="The phone number that will be shown on the ads">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.phone && (
                    <div className="error-message">{errors.phone}</div>
                )}

                <div
                    className="input-file-box w-full"
                    style={
                        errors.logo && {
                            boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                        }
                    }
                >
                    <input
                        type="file"
                        id="input-logo"
                        placeholder="Logo"
                        name="logo"
                        className="w-full"
                        onChange={(e) => setData("logo", e.target.files[0])}
                    />
                    <label
                        htmlFor="input-logo"
                        style={{ color: "rgb(107 115 128)" }}
                    >
                        Upload your logo
                    </label>
                    <img src="./svg/file.svg" className="w-5 h-5 icon"></img>
                    <Tooltip text="The logo that will be shown on the ads. Must be between 50px by 50px to 500px by 500px.">
                        <img
                            src="./svg/question-circle.svg"
                            className="w-5 h-5"
                        />
                    </Tooltip>
                </div>
                {errors.logo && (
                    <div className="error-message">{errors.logo}</div>
                )}

                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Country"
                        value={data.country}
                        name="country"
                        onChange={handleChange}
                        onFocus={() => handleFocus("country")}
                        onBlur={handleBlur}
                        style={
                            errors.country && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/place.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "country" && (
                        <Tooltip text="The country of your agency">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.country && (
                    <div className="error-message">{errors.country}</div>
                )}
            </div>
        </div>
    );
};

export default RegisterFormSlide3;
