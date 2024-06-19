import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import GoBack from "@/Components/GoBack";
import Tooltip from "@/Components/Tooltip";

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    const handleChange = (e) => {
        const target = e.currentTarget;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        setData(target.name, value);
    };

    const [focusedInput, setFocusedInput] = useState(null);
    const handleFocus = (name) => {
        setFocusedInput(name);
    };
    const handleBlur = () => {
        setFocusedInput(null);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen px-20 bg-background_color">
                <GoBack />
                <div className="form-container">
                    <div className="col-1">
                        <div className="house-container">
                            <div className="blocklogin trianglelogin "></div>
                            <div className="blocklogin square"></div>
                        </div>
                        <p className="featured-words form-title">ImmoStack</p>
                    </div>
                    <div className="col-2">
                        <form onSubmit={handleSubmit} className="">
                            <div className="register-form">
                                <div className="content">
                                    <div className="form-title">
                                        <span>Sign In</span>
                                    </div>
                                    <div className="form-inputs">
                                        <div>
                                            <div className="input-box">
                                                <input
                                                    type="text"
                                                    value={data.email}
                                                    className="input-field"
                                                    name="email"
                                                    id="email"
                                                    onChange={handleChange}
                                                    onFocus={() =>
                                                        handleFocus("email")
                                                    }
                                                    onBlur={handleBlur}
                                                    placeholder="Mail Adress"
                                                    style={
                                                        errors.email && {
                                                            boxShadow:
                                                                "0 0 10px rgba(255, 0, 0, 0.4)",
                                                        }
                                                    }
                                                />
                                                <img
                                                    src="./svg/user.svg"
                                                    className="w-5 h-5 icon"
                                                ></img>
                                                {focusedInput === "email" && (
                                                    <Tooltip text="Your mail address">
                                                        <img
                                                            src="./svg/question-circle.svg"
                                                            className="w-5 h-5"
                                                        />
                                                    </Tooltip>
                                                )}
                                            </div>
                                            {errors.email && (
                                                <div className="error-message">
                                                    {errors.email}
                                                </div>
                                            )}
                                            <div className="input-box">
                                                <input
                                                    type="password"
                                                    value={data.password}
                                                    className="input-field"
                                                    id="password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    placeholder="Password"
                                                    style={
                                                        errors.password && {
                                                            boxShadow:
                                                                "0 0 10px rgba(255, 0, 0, 0.4)",
                                                        }
                                                    }
                                                    onFocus={() =>
                                                        handleFocus("password")
                                                    }
                                                    onBlur={handleBlur}
                                                />
                                                <img
                                                    src="./svg/lock.svg"
                                                    className="w-5 h-5 icon"
                                                ></img>
                                                {focusedInput ===
                                                    "password" && (
                                                    <Tooltip text="Your password">
                                                        <img
                                                            src="./svg/question-circle.svg"
                                                            className="w-5 h-5"
                                                        />
                                                    </Tooltip>
                                                )}
                                            </div>
                                            {errors.password && (
                                                <div className="error-message">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>

                                        {/* <div className="forget-pass">
                                        <a href="#">Forgot Password</a>
                                        </div> */}

                                        <div className="input-box w-full mt-10">
                                            {!processing && (
                                                <button
                                                    className="input-submit bg-secondary_color "
                                                    type="submit"
                                                    disabled={processing}
                                                >
                                                    <span>Sign In</span>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
