import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import CreateAdsCategory from "./CreateAdsCategory";
import CreateAdsLocalisation from "./CreateAdsLocalisation";
import CreateAdsMonetary from "./CreateAdsMonetary";
import CreateAdsProperty from "./CreateAdsProperty";
import CreateAdsBuilding from "./CreateAdsBuilding";
import CreateAdsHousing from "./CreateAdsHousing";
import CreateAdsPictures from "./CreateAdsPictures";
import CreateAdsMisc from "./CreateAdsMisc";
import CreateAdsSummary from "./CreateAdsSummary";
import CreateAdsSummaryOverview from "./CreateAdsSummaryOverview";

const CreateAdsForm = (jetstream) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        ads_type_id: "2",
        property_type_id: "2",
        title: "",
        number: "17",
        street: "Boulevard Pierre Dupong",
        street2: "",
        post_code: "1430",
        city: "Luxembourg",
        country: "Luxembourg",
        price: "",
        agency_fees: "",
        monthly_charges: "",
        availability: "",
        fee_payer_id: "1",

        construction_year: "2000",
        renovation_year: "2018",
        surface: 180,
        livable_surface: 170,
        terrain_surface: 200,

        floor: "",
        floors: "3",
        elevator: false,

        rooms: "5",
        bedrooms: "3",
        bathrooms: "2",
        balcony: "",
        // balcony boolean => number
        terrace: "1",
        // terrace boolean => number
        cellar: false,
        fitted_kitchen: true,
        separate_toilets: "2",
        // separate_toilets boolean => number
        pool: "",
        // pool boolean => number

        garage: "1",
        parking_spots: "",

        energy_class: "3",
        insulation_class: "5",
        heating_type: "3",
        photos: [],

        description: "Nestled in a cozy neighborhood, this charming, petite house offers a perfect blend of comfort and simplicity. With its warm and inviting ambiance, the home features a compact yet efficient layout, including a bright living area, a well-appointed kitchen, and 3 bedroom. The quaint outdoor space provides a peaceful retreat, ideal for relaxing or gardening. Perfect for individuals or couples seeking a low-maintenance lifestyle in a serene setting.",
        surroundings: "The house is situated in a friendly and picturesque neighborhood, surrounded by lush greenery and tree-lined streets. Nearby, you will find a beautiful park, perfect for leisurely strolls, picnics, and outdoor activities. The community boasts excellent local amenities, including charming cafes, boutique shops, and a well-stocked grocery store. With convenient access to public transportation and major roadways, commuting is a breeze. The area is known for its safety and tranquility, making it an ideal location for those seeking a peaceful, yet connected, lifestyle.",
    });

    const [currentSlide, setCurrentSlide] = useState(0);
    const contentComponents = [
        CreateAdsCategory,
        CreateAdsLocalisation,
        CreateAdsMonetary,
        CreateAdsProperty,
        CreateAdsBuilding,
        CreateAdsHousing,
        CreateAdsPictures,
        CreateAdsMisc,
        CreateAdsSummary,
        CreateAdsSummaryOverview,
    ];
    const totalSlides = contentComponents.length;

    const handleChange = (e) => {
        const target = e.currentTarget;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        setData(target.name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.photos.length < 3 || data.photos.length > 10) {
            alert("Please select between 3 and 10 photos");
        } else {
            post(route("ads.store"));
        }
    };
    const [showMonthlyCharges, setShowMonthlyCharges] = useState(
        data.ads_type_id === "1"
    );

    const next = () => setCurrentSlide((currentSlide + 1) % totalSlides);
    const prev = () =>
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);

    const ContentComponent = contentComponents[currentSlide];

    const previousButton = (
        <button type="button" className="btn-form" onClick={prev}>
            <img src="../svg/arrow-left.svg" className="w-5 h-5 icon"></img>
            <span>Previous</span>
        </button>
    );

    const nextButton = (
        <button type="button" className="btn-form" onClick={next}>
            <span>Next</span>
            <img src="../svg/arrow-right.svg" className="w-5 h-5 icon"></img>
        </button>
    );

    const registerButtonPro = (
        <button
            className="btn-form bg-tertiary_color "
            type="button"
            disabled={processing}
            onClick={(e) => handleSubmit(e)}
        >
            <span>Submit the ad to review</span>
            <img src="../svg/submit.svg" className="w-5 h-5 icon"></img>
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
            {currentSlide !== 9 ? nextButton : registerButtonPro}
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
                <div className="create-title-2">Create an advertisement</div>
                <div className="flex h-4/5 w-full justify-center items-center gap-8">
                    <div className="flex flex-col w-[8px] h-4/5">
                        <div
                            className="bg-secondary_color rounded-lg"
                            style={{ height: progressWidth }}
                        ></div>
                    </div>
                    <div className="flex flex-col justify-between h-4/5 w-2/5 py-2">
                        <div style={stylingProg(0)}>Category</div>
                        <div style={stylingProg(1)}>Localisation</div>
                        <div style={stylingProg(2)}>Monetary</div>
                        <div style={stylingProg(3)}>Property</div>
                        <div style={stylingProg(4)}>Building</div>
                        <div style={stylingProg(5)}>Housing</div>
                        <div style={stylingProg(6)}>Overview</div>
                        <div style={stylingProg(7)}>Additionnals</div>
                        <div style={stylingProg(8)}>Summary Information</div>
                        <div style={stylingProg(9)}>Summary Overview</div>
                    </div>
                </div>
            </div>
            <div className="create-col-1">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <>
                        <ContentComponent
                            data={data}
                            setData={setData}
                            errors={errors}
                            handleChange={handleChange}
                            showMonthlyCharges={showMonthlyCharges}
                            setShowMonthlyCharges={setShowMonthlyCharges}
                        />
                    </>
                    <div className="create-category">{button}</div>

                    {errors.db_error && <div>{errors.db_error}</div>}
                </form>
            </div>
        </div>
    );
};

export default CreateAdsForm;
