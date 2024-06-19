import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import RegisterFormSlide1 from "./RegisterFormSlide1";
import RegisterFormSlide2 from "./RegisterFormSlide2";
import RegisterFormSlide3 from "./RegisterFormSlide3";
import RegisterFormSlide4 from "./RegisterFormSlide4";

const RegisterForm = (jetstream) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [choiceBoolean, setChoiceBoolean] = useState("individual");
    const contentComponents = [
        RegisterFormSlide1,
        RegisterFormSlide2,
        RegisterFormSlide3,
        RegisterFormSlide4,
    ];
    const totalSlides = contentComponents.length;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        type_id: "1",
        logo: null,
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setData(name, val);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("merde");
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    const next = () => setCurrentSlide((currentSlide + 1) % totalSlides);
    const prev = () =>
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);

    const ContentComponent = contentComponents[currentSlide];

    const previousButton = (
        <button type="button" className="btn-form" onClick={prev}>
            <img src="./svg/arrow-left.svg" className="w-5 h-5 icon"></img>
            <span>Previous</span>
        </button>
    );

    const nextButton = (
        <button type="button" className="btn-form" onClick={next}>
            <span>Next</span>
            <img src="./svg/arrow-right.svg" className="w-5 h-5 icon"></img>
        </button>
    );

    const registerButton = (
        <button
            className="input-submit bg-secondary_color "
            type="button"
            disabled={processing}
            onClick={(e) => handleSubmit(e)}
        >
            <span>Register</span>
            <img src="./svg/submit.svg" className="w-5 h-5"></img>
        </button>
    );

    const registerButtonPro = (
        <button
            className="btn-form bg-tertiary_color "
            type="button"
            disabled={processing}
            onClick={(e) => handleSubmit(e)}
        >
            <span>Register</span>
            <img src="./svg/submit.svg" className="w-5 h-5 icon"></img>
        </button>
    );

    const button = (
        <div
            className="flex w-full"
            style={
                currentSlide == 0
                    ? { justifyContent: "flex-end" }
                    : { justifyContent: "space-between" }
            }
        >
            {currentSlide !== 0 ? previousButton : ""}
            {currentSlide !== 3 ? nextButton : registerButtonPro}
        </div>
    );

    return (
        <>
            <form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="w-full"
            >
                <div className="register-form">
                    <ContentComponent
                        data={data}
                        errors={errors}
                        handleChange={handleChange}
                        setData={setData}
                        jetstream={jetstream}
                        choiceBoolean={choiceBoolean}
                        setChoiceBoolean={setChoiceBoolean}
                    />

                    {data.type_id === "1" ? (
                        <div className="input-box w-full">{registerButton}</div>
                    ) : (
                        button
                    )}
                </div>
            </form>
        </>
    );
};

export default RegisterForm;
