import React from "react";
import RegisterForm from "@/Components/RegisterForm";
import GoBack from "@/Components/GoBack";

const Register = ({ jetstream }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  px-20 bg-background_color">
            <GoBack />
            <div className="form-container ">
                <div className="col-1 ">
                    <div className="house-container">
                        <div className="blocklogin trianglelogin "></div>
                        <div className="blocklogin square"></div>
                    </div>
                    <p className="featured-words form-title">ImmoStack</p>
                </div>
                <div className="col-2">
                    <div className="flex justify-center items-end h-full">
                        <RegisterForm jetstream={jetstream} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
