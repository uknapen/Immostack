import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import ValidateAds1 from "./ValidateAds1";
import ValidateAds2 from "./ValidateAds2";
import ValidateAds3 from "./ValidateAds3";
import ValidateAds4 from "./ValidateAds4";
import ValidateAds5 from "./ValidateAds5";
import ValidateAds6 from "./ValidateAds6";
import ValidateAds7 from "./ValidateAds7";

const ValidateAdsForm = ({ ad }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        id: ad.id,
        title_rejected: false,

        price_rejected: false,
        monthly_charges_rejected: false,
        agency_fees_rejected: false,
        availability_rejected: false,
        fee_payer_rejected: false,
        property_type_id_rejected: false,

        description_rejected: false,
        surroundings_rejected: false,
        images_rejected: false,

        year_construction_rejected: false,
        year_renovation_rejected: false,
        surface_rejected: false,
        livable_surface_rejected: false,
        terrain_surface_rejected: false,
        floor_rejected: false,
        floors_rejected: false,

        rooms_rejected: false,
        bedrooms_rejected: false,
        bathrooms_rejected: false,
        garage_rejected: false,
        parking_spots_rejected: false,
        balcony_rejected: false,
        terrace_rejected: false,

        cellar_rejected: false,
        fitted_kitchen_rejected: false,
        separate_toilets_rejected: false,
        elevator_rejected: false,
        pool_rejected: false,

        energy_class_id_rejected: false,
        insulation_class_id_rejected: false,
        heating_type_id_rejected: false,

        rejected_comment: "",

        city_id_rejected: false,
        latitude_rejected: false,
        longitude_rejected: false,
    });

    const [currentSlide, setCurrentSlide] = useState(0);
    const contentComponents = [
        ValidateAds1,
        ValidateAds2,
        ValidateAds3,
        ValidateAds4,
        ValidateAds5,
        ValidateAds6,
        ValidateAds7,
    ];
    const totalSlides = contentComponents.length;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setData(name, val);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("ads.validation.submit"));
    };

    const next = () => setCurrentSlide((currentSlide + 1) % totalSlides);
    const prev = () =>
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);

    const ContentComponent = contentComponents[currentSlide];

    const previousButton = (
        <button type="button" className="btn-form" onClick={prev}>
            <img src="/svg/arrow-left.svg" className="w-5 h-5 icon"></img>
            <span>Previous</span>
        </button>
    );

    const nextButton = (
        <button type="button" className="btn-form" onClick={next}>
            <span>Next</span>
            <img src="/svg/arrow-right.svg" className="w-5 h-5 icon"></img>
        </button>
    );

    const registerButtonPro = (
        <button
            className="btn-form bg-tertiary_color "
            type="button"
            disabled={processing}
            onClick={(e) => handleSubmit(e)}
        >
            <span>Validate</span>
            <img src="/svg/submit.svg" className="w-5 h-5 icon"></img>
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
            {currentSlide !== 6 ? nextButton : registerButtonPro}
        </div>
    );

    const progressWidth = ((currentSlide + 1) / totalSlides) * 100 + "%";
    const stylingProg = (index) => {
        return {
            color: currentSlide === index ? "#565360" : "#908e9b",
            fontSize: currentSlide === index ? "24px" : "18px",
            fontWeight: currentSlide === index ? "bold" : "",
        };
    };

    return (
        <div className="create-page">
            <div className="create-col-2">
                <div className="create-title-2">Validate the post</div>
                <div className="flex h-4/5 w-full justify-center items-center gap-8">
                    <div className="flex flex-col w-[8px] h-4/5">
                        <div
                            className="bg-secondary_color rounded-lg"
                            style={{ height: progressWidth }}
                        ></div>
                    </div>
                    <div className="flex flex-col justify-between h-4/5 w-2/5 py-2">
                        <div style={stylingProg(0)}>1</div>
                        <div style={stylingProg(1)}>2</div>
                        <div style={stylingProg(2)}>3</div>
                        <div style={stylingProg(3)}>4</div>
                        <div style={stylingProg(4)}>5</div>
                        <div style={stylingProg(5)}>6</div>
                        <div style={stylingProg(6)}>7</div>
                    </div>
                </div>
            </div>
            <div className="create-col-1">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <>
                        <ContentComponent
                            data={data}
                            ad={ad}
                            handleChange={handleChange}
                        />
                    </>
                    <div className="create-category">{button}</div>
                </form>
            </div>
        </div>
    );
};

export default ValidateAdsForm;
