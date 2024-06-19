import React, { useState } from "react";
import Tooltip from "@/Components/Tooltip";
import { Link } from "@inertiajs/inertia-react";

const RegisterFormSlide1 = ({
    data,
    errors,
    setData,
    handleChange,
    jetstream,
    choiceBoolean,
    setChoiceBoolean,
}) => {
    const activeButton = { backgroundColor: "#3f72af", color: "#ffffff" };
    const inactiveButton = { backgroundColor: "rgba(255, 255, 255, 0.2)" };
    const validIcon = <img src="./svg/check.svg" alt="" className="h-5 w-5" />;

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
                <span>Sign Up</span>
            </div>
            <div className="form-inputs">
                <div className="input-box">
                    <div className="choice-field flex justify-center">
                        <div
                            className="choice-boolean choice-boolean-1"
                            onClick={() => {
                                setChoiceBoolean("individual");
                                setData("type_id", "1");
                            }}
                            style={
                                choiceBoolean === "individual"
                                    ? activeButton
                                    : inactiveButton
                            }
                        >
                            {choiceBoolean === "individual" ? validIcon : ""}
                            <span>Individual</span>
                        </div>

                        <div
                            className="choice-boolean choice-boolean-2"
                            onClick={() => {
                                setChoiceBoolean("professional");
                                setData("type_id", "2");
                            }}
                            style={
                                choiceBoolean === "professional"
                                    ? activeButton
                                    : inactiveButton
                            }
                        >
                            Professional
                            {choiceBoolean === "professional" ? validIcon : ""}
                        </div>
                    </div>
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="User Name"
                        value={data.name}
                        name="name"
                        onChange={handleChange}
                        onFocus={() => handleFocus("name")}
                        onBlur={handleBlur}
                        style={
                            errors.name && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/user.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "name" && (
                        <Tooltip text="How we will call you">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.name && (
                    <div className="error-message">{errors.name}</div>
                )}
                <div className="input-box">
                    <input
                        type="email"
                        className="input-field"
                        placeholder="Email"
                        value={data.email}
                        name="email"
                        onChange={handleChange}
                        onFocus={() => handleFocus("email")}
                        onBlur={handleBlur}
                        style={
                            errors.email && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/mail.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "email" && (
                        <Tooltip text="The connexion email. This email won't be shown to the public.">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.email && (
                    <div className="error-message">{errors.email}</div>
                )}
                <div className="input-box">
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Password"
                        value={data.password}
                        name="password"
                        onChange={handleChange}
                        onFocus={() => handleFocus("password")}
                        onBlur={handleBlur}
                        style={
                            errors.password && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/lock.svg" className="w-5 h-5 icon"></img>
                    {focusedInput === "password" && (
                        <Tooltip text="Must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 special character.">
                            <img
                                src="./svg/question-circle.svg"
                                className="w-5 h-5"
                            />
                        </Tooltip>
                    )}
                </div>
                {errors.password && (
                    <div className="error-message">{errors.password}</div>
                )}
                <div className="input-box">
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Confirm Password"
                        value={data.password_confirmation}
                        name="password_confirmation"
                        onChange={handleChange}
                        style={
                            errors.password_confirmation && {
                                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
                            }
                        }
                    />
                    <img src="./svg/lock.svg" className="w-5 h-5 icon"></img>
                </div>
                {errors.password_confirmation && (
                    <div className="error-message">
                        {errors.password_confirmation}
                    </div>
                )}
            </div>
            <div className="forget-pass">
                {/* <a href="#">Forgot Password</a> */}
                <Link href={"/login"}>Already have an account ?</Link>
            </div>
        </div>
    );
};

export default RegisterFormSlide1;
