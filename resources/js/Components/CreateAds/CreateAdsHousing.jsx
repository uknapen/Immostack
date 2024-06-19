import React, { useState } from "react";
import CreateCheckSVG from "./CreateCheckSVG";

const CreateAdsHousing = ({ data, errors, handleChange }) => {
    const [checkboxStates, setCheckboxStates] = useState([
        { name: "bedrooms", isChecked: data.bedrooms !== "" },
        { name: "bathrooms", isChecked: data.bathrooms !== "" },
        { name: "balcony", isChecked: data.balcony !== "" },
        { name: "terrace", isChecked: data.terrace !== "" },
        { name: "separate_toilets", isChecked: data.separate_toilets !== "" },
    ]);

    const handleCheckboxChange = (name, isChecked) => {
        const updatedStates = checkboxStates.map((state) =>
            state.name === name ? { ...state, isChecked } : state
        );
        setCheckboxStates(updatedStates);
    };
    return (
        <div className="create-category">
            <div className="create-category-title">Housing Informations</div>

            {data.property_type_id === "1" || data.property_type_id === "2" ? (
                <CreateCheckSVG
                    datas={data.bedrooms}
                    isChecked={checkboxStates[0].isChecked}
                    setIsChecked={(isChecked) =>
                        handleCheckboxChange(checkboxStates[0].name, isChecked)
                    }
                    errors={errors}
                    handleChange={handleChange}
                    title={"Does it includes any bedrooms ?"}
                    text={", how many ?"}
                    name={"bedrooms"}
                    svg={"../svg/calendar.svg"}
                />
            ) : (
                ""
            )}

            {data.property_type_id === "1" ||
            data.property_type_id === "2" ||
            data.property_type_id === "5" ||
            data.property_type_id === "7" ||
            data.property_type_id === "8" ? (
                <CreateCheckSVG
                    datas={data.bathrooms}
                    isChecked={checkboxStates[1].isChecked}
                    setIsChecked={(isChecked) =>
                        handleCheckboxChange(checkboxStates[1].name, isChecked)
                    }
                    errors={errors}
                    handleChange={handleChange}
                    title={"Does it includes any bathrooms ?"}
                    text={", how many ?"}
                    name={"bathrooms"}
                    svg={"../svg/calendar.svg"}
                />
            ) : (
                ""
            )}

            {data.property_type_id !== "6" && data.floors !== "0" ? (
                <CreateCheckSVG
                    datas={data.balcony}
                    isChecked={checkboxStates[2].isChecked}
                    setIsChecked={(isChecked) =>
                        handleCheckboxChange(checkboxStates[2].name, isChecked)
                    }
                    errors={errors}
                    handleChange={handleChange}
                    title={"Does it includes any balcony ?"}
                    text={", how many ?"}
                    name={"balcony"}
                    svg={"../svg/calendar.svg"}
                />
            ) : (
                ""
            )}
            {data.property_type_id !== "6" ? (
                <CreateCheckSVG
                    datas={data.terrace}
                    isChecked={checkboxStates[3].isChecked}
                    setIsChecked={(isChecked) =>
                        handleCheckboxChange(checkboxStates[3].name, isChecked)
                    }
                    errors={errors}
                    handleChange={handleChange}
                    title={"Does it includes any terrace ?"}
                    text={", how many ?"}
                    name={"terrace"}
                    svg={"../svg/calendar.svg"}
                />
            ) : (
                ""
            )}
            {data.property_type_id !== "6" ? (
                <div className="create-category-input">
                    <span className="create-category-span">
                        Does it include a cellar ?
                    </span>
                    <div className="flex items-center w-3/4 ml-[16px] h-[52px]">
                        <div className="custom-checkbox mr-2 ">
                            <input
                                type="checkbox"
                                id="cellar"
                                value={data.cellar}
                                name="cellar"
                                onChange={handleChange}
                                checked={data.cellar}
                            />
                            <label htmlFor="cellar"></label>
                        </div>
                        <span className="create-input-label">Yes</span>
                        {errors.cellar && <div>{errors.cellar}</div>}
                    </div>
                </div>
            ) : (
                ""
            )}
            {data.property_type_id !== "6" ? (
                <div className="create-category-input">
                    <span className="create-category-span">
                        Does it include a fitted kitchen ?
                    </span>
                    <div className="flex items-center w-3/4 ml-[16px] h-[52px]">
                        <div className="custom-checkbox mr-2 ">
                            <input
                                type="checkbox"
                                id="fitted_kitchen"
                                value={data.fitted_kitchen}
                                name="fitted_kitchen"
                                onChange={handleChange}
                                checked={data.fitted_kitchen}
                            />
                            <label htmlFor="fitted_kitchen"></label>
                        </div>
                        <span className="create-input-label">Yes</span>
                        {errors.fitted_kitchen && (
                            <div>{errors.fitted_kitchen}</div>
                        )}
                    </div>
                </div>
            ) : (
                ""
            )}
            {data.property_type_id !== "6" ? (
                <CreateCheckSVG
                    datas={data.separate_toilets}
                    isChecked={checkboxStates[4].isChecked}
                    setIsChecked={(isChecked) =>
                        handleCheckboxChange(checkboxStates[4].name, isChecked)
                    }
                    errors={errors}
                    handleChange={handleChange}
                    title={"Does it includes any separated toilets ?"}
                    text={", how many ?"}
                    name={"separate_toilets"}
                    svg={"../svg/calendar.svg"}
                />
            ) : (
                ""
            )}
        </div>
    );
};

export default CreateAdsHousing;
