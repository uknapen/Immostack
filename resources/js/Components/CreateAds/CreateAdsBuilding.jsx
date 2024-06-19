import React, { useState } from "react";
import CreateCheckSVG from "./CreateCheckSVG";

const CreateAdsBuilding = ({ data, errors, handleChange }) => {
    const rentorsell = data.ads_type_id === "1" ? "renting" : "selling";

    const [checkboxStates, setCheckboxStates] = useState([
        { name: "floors", isChecked: data.floors !== "" },
        { name: "floor", isChecked: data.floor !== "" },
        { name: "garage", isChecked: data.garage !== "" },
        { name: "parking_spots", isChecked: data.parking_spots !== "" },
    ]);

    const handleCheckboxChange = (name, isChecked) => {
        const updatedStates = checkboxStates.map((state) =>
            state.name === name ? { ...state, isChecked } : state
        );
        setCheckboxStates(updatedStates);
    };

    return (
        <div className="create-category">
            <div className="create-category-title">Building Informations</div>

            {data.property_type_id !== "6" ? (
                <CreateCheckSVG
                    datas={data.floors}
                    isChecked={checkboxStates[0].isChecked}
                    setIsChecked={(isChecked) =>
                        handleCheckboxChange(checkboxStates[0].name, isChecked)
                    }
                    errors={errors}
                    handleChange={handleChange}
                    title={"Does the building has multiple floors ?"}
                    text={", how many ?"}
                    name={"floors"}
                    svg={"../svg/calendar.svg"}
                />
            ) : (
                ""
            )}

            {data.property_type_id !== "6" ? (
                <div className="create-category-input">
                    <span className="create-category-span">
                        Does the building has at least one elevator ?
                    </span>
                    <div className="flex items-center w-3/4 ml-[16px] h-[52px]">
                        <div className="custom-checkbox mr-2 ">
                            <input
                                type="checkbox"
                                id="elevator"
                                value={data.elevator}
                                name="elevator"
                                onChange={handleChange}
                                checked={data.elevator === true}
                            />
                            <label htmlFor="elevator"></label>
                        </div>
                        <span className="create-input-label">Yes</span>
                        {errors.elevator && <div>{errors.elevator}</div>}
                    </div>
                </div>
            ) : (
                ""
            )}

            {data.property_type_id !== "6" ? (
                <CreateCheckSVG
                    datas={data.floor}
                    isChecked={checkboxStates[1].isChecked}
                    setIsChecked={(isChecked) =>
                        handleCheckboxChange(checkboxStates[1].name, isChecked)
                    }
                    errors={errors}
                    handleChange={handleChange}
                    title={`Does the property is not at the first floor ?`}
                    text={", which one ?"}
                    name={"floor"}
                    svg={"../svg/calendar.svg"}
                />
            ) : (
                ""
            )}

            {data.property_type_id !== "6" && data.property_type_id !== "3" ? (
                <CreateCheckSVG
                    datas={data.garage}
                    isChecked={checkboxStates[2].isChecked}
                    setIsChecked={(isChecked) =>
                        handleCheckboxChange(checkboxStates[2].name, isChecked)
                    }
                    errors={errors}
                    handleChange={handleChange}
                    title={`Does the property has a garage ?`}
                    text={", how many ?"}
                    name={"garage"}
                    svg={"../svg/calendar.svg"}
                />
            ) : (
                ""
            )}

            <CreateCheckSVG
                data={data.parking_spots}
                isChecked={checkboxStates[3].isChecked}
                setIsChecked={(isChecked) =>
                    handleCheckboxChange(checkboxStates[3].name, isChecked)
                }
                errors={errors}
                handleChange={handleChange}
                title={`Does the property has a parking slot ?`}
                text={", how many ?"}
                name={"parking_spots"}
                svg={"../svg/calendar.svg"}
            />

            {data.property_type_id === "4" ||
            data.property_type_id === "5" ||
            data.property_type_id === "7" ||
            data.property_type_id === "8" ? (
                <div className="create-category-input">
                    <label className="create-category-span">
                        How many rooms does the property you are {rentorsell}{" "}
                        includes ?
                    </label>
                    <input
                        type="number"
                        value={data.rooms}
                        name="rooms"
                        min="0"
                        onChange={handleChange}
                        className="create-category-input-field"
                    />
                    {errors.rooms && <div>{errors.rooms}</div>}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default CreateAdsBuilding;
