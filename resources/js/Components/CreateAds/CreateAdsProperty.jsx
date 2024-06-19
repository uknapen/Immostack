import React, { useState, useEffect } from "react";
import CreateCheckSVG from "./CreateCheckSVG";

const CreateAdsProperty = ({ data, errors, handleChange }) => {
    const [checkboxStates, setCheckboxStates] = useState([
        { name: "renovation_year", isChecked: data.renovation_year !== "" },
    ]);

    const handleCheckboxChange = (name, isChecked) => {
        const updatedStates = checkboxStates.map((state) =>
            state.name === name ? { ...state, isChecked } : state
        );
        setCheckboxStates(updatedStates);
    };
    return (
        <div className="create-category">
            <div className="create-category-title">Properties Information</div>

            {data.property_type_id !== "6" ? (
                <div className="create-category-input">
                    <span className="create-category-span">
                        Year of construction:
                    </span>
                    <input
                        type="number"
                        value={data.construction_year}
                        name="construction_year"
                        id="construction_year"
                        min="1"
                        onChange={handleChange}
                        className="create-category-input-svg"
                    />
                    {errors.construction_year && (
                        <div>{errors.construction_year}</div>
                    )}
                    <label htmlFor="construction_year" className="abs-label ">
                        <img src="../svg/calendar.svg" className="w-5 h-5 " />
                    </label>
                </div>
            ) : (
                ""
            )}

            {data.property_type_id !== "6" ? (
                <CreateCheckSVG
                    datas={data.renovation_year}
                    isChecked={checkboxStates[0].isChecked}
                    setIsChecked={(isChecked) =>
                        handleCheckboxChange(checkboxStates[0].name, isChecked)
                    }
                    errors={errors}
                    handleChange={handleChange}
                    title={"Has it been renovated ?"}
                    text={", in which year ?"}
                    name={"renovation_year"}
                    svg={"../svg/calendar.svg"}
                />
            ) : (
                ""
            )}

            <div className="create-category-input">
                <span className="create-category-span">Ground Surface:</span>
                <input
                    type="number"
                    value={data.surface}
                    name="surface"
                    id="surface"
                    min="1"
                    onChange={handleChange}
                    className="create-category-input-svg"
                />
                {errors.surface && <div>{errors.surface}</div>}
                <label htmlFor="surface" className="abs-label ">
                    <img src="../svg/surface.svg" className="w-5 h-5 " />
                </label>
            </div>

            {data.property_type_id === "1" ||
            data.property_type_id === "2" ||
            data.property_type_id === "4" ? (
                <div className="create-category-input">
                    <span className="create-category-span">
                        Livable Surface:
                    </span>
                    <input
                        type="number"
                        value={data.livable_surface}
                        name="livable_surface"
                        id="livable_surface"
                        min="1"
                        onChange={handleChange}
                        className="create-category-input-svg"
                    />
                    {errors.livable_surface && (
                        <div>{errors.livable_surface}</div>
                    )}
                    <label htmlFor="livable_surface" className="abs-label ">
                        <img src="../svg/surface.svg" className="w-5 h-5 " />
                    </label>
                </div>
            ) : (
                ""
            )}

            <div className="create-category-input">
                <span className="create-category-span">Terrain Surface:</span>
                <input
                    type="number"
                    value={data.terrain_surface}
                    name="terrain_surface"
                    id="terrain_surface"
                    min="1"
                    onChange={handleChange}
                    className="create-category-input-svg"
                />
                {errors.terrain_surface && <div>{errors.terrain_surface}</div>}
                <label htmlFor="terrain_surface" className="abs-label ">
                    <img src="../svg/surface.svg" className="w-5 h-5 " />
                </label>
            </div>
        </div>
    );
};

export default CreateAdsProperty;
