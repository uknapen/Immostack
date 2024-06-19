import React, { useState } from "react";
import Tooltip from "@/Components/Tooltip";

const RegisterFormSlide4 = ({
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
                <span>Localisation Information</span>
            </div>
            <div className="form-inputs">
                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Street Number"
                        value={data.number}
                        name="number"
                        onChange={handleChange}
                        onFocus={() => handleFocus("number")}
                        onBlur={handleBlur}
                        style={
                            errors.number && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/place.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "number" && (
                        <Tooltip text="The street number">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.number && (
                    <div className="error-message">{errors.number}</div>
                )}

                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Street Name"
                        value={data.street}
                        name="street"
                        onChange={handleChange}
                        onFocus={() => handleFocus("street")}
                        onBlur={handleBlur}
                        style={
                            errors.street && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/place.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "street" && (
                        <Tooltip text="The street name">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.street && (
                    <div className="error-message">{errors.street}</div>
                )}

                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Street Name 2"
                        value={data.street2}
                        name="street2"
                        onChange={handleChange}
                        onFocus={() => handleFocus("street2")}
                        onBlur={handleBlur}
                        style={
                            errors.street2 && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/place.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "street2" && (
                        <Tooltip text="The street street">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.street2 && (
                    <div className="error-message">{errors.street2}</div>
                )}

                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Post Code"
                        value={data.post_code}
                        name="post_code"
                        onChange={handleChange}
                        onFocus={() => handleFocus("post_code")}
                        onBlur={handleBlur}
                        style={
                            errors.post_code && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/place.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "post_code" && (
                        <Tooltip text="The post code">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.post_code && (
                    <div className="error-message">{errors.post_code}</div>
                )}

                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="City"
                        value={data.city}
                        name="city"
                        onChange={handleChange}
                        onFocus={() => handleFocus("city")}
                        onBlur={handleBlur}
                        style={
                            errors.city && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/place.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "city" && (
                        <Tooltip text="The city">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.city && (
                    <div className="error-message">{errors.city}</div>
                )}

                {jetstream.hasTermsAndPrivacyPolicyFeature && (
                    <div>
                        <input
                            type="checkbox"
                            checked={data.terms}
                            name="terms"
                            onChange={handleChange}
                        />
                        I agree to the{" "}
                        <a target="_blank" href={route("terms.show")}>
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a target="_blank" href={route("policy.show")}>
                            Privacy Policy
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterFormSlide4;
