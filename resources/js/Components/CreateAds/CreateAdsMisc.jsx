import React, { useState } from "react";
import CreateCheckSVG from "./CreateCheckSVG";

const CreateAdsMisc = ({ data, errors, handleChange }) => {
    const [checkboxStates, setCheckboxStates] = useState([
        { name: "pool", isChecked: data.pool !== "" },
    ]);

    const handleCheckboxChange = (name, isChecked) => {
        const updatedStates = checkboxStates.map((state) =>
            state.name === name ? { ...state, isChecked } : state
        );
        setCheckboxStates(updatedStates);
    };
    return (
        <div className="create-category">
            <div className="create-category-title">Additionnal information</div>
            {data.property_type_id !== "5" &&
            data.property_type_id !== "6" &&
            data.property_type_id !== "8" ? (
                <CreateCheckSVG
                    datas={data.pool}
                    isChecked={checkboxStates[0].isChecked}
                    setIsChecked={(isChecked) =>
                        handleCheckboxChange(checkboxStates[0].name, isChecked)
                    }
                    errors={errors}
                    handleChange={handleChange}
                    title={"Does it includes any pool ?"}
                    text={", how many ?"}
                    name={"pool"}
                    svg={"../svg/calendar.svg"}
                />
            ) : (
                ""
            )}
            {data.property_type_id !== "6" ? (
                <div className="create-category-input">
                    <label className="create-category-span">
                        Energy class:
                    </label>
                    <select
                        name="energy_class"
                        id="energy_class"
                        onChange={handleChange}
                        className="create-category-input-field"
                        value={data.energy_class}
                    >
                        <option value="1">Not specified</option>
                        <option value="2">A</option>
                        <option value="3">B</option>
                        <option value="4">C</option>
                        <option value="5">D</option>
                        <option value="6">E</option>
                        <option value="7">F</option>
                        <option value="8">G</option>
                        <option value="9">H</option>
                        <option value="10">I</option>
                    </select>
                    {errors.energy_class && <div>{errors.energy_class}</div>}
                </div>
            ) : (
                ""
            )}
            {data.property_type_id !== "6" ? (
                <div className="create-category-input">
                    <label className="create-category-span">
                        Insulation class:
                    </label>
                    <select
                        name="insulation_class"
                        id="insulation_class"
                        onChange={handleChange}
                        className="create-category-input-field"
                        value={data.insulation_class}
                    >
                        <option value="1">Not specified</option>
                        <option value="2">A</option>
                        <option value="3">B</option>
                        <option value="4">C</option>
                        <option value="5">D</option>
                        <option value="6">E</option>
                        <option value="7">F</option>
                        <option value="8">G</option>
                        <option value="9">H</option>
                        <option value="10">I</option>
                    </select>
                    {errors.insulation_class && (
                        <div>{errors.insulation_class}</div>
                    )}
                </div>
            ) : (
                ""
            )}
            {data.property_type_id !== "6" ? (
                <div className="create-category-input">
                    <label className="create-category-span">
                        Heating type:
                    </label>
                    <select
                        name="heating_type"
                        id="heating_type"
                        onChange={handleChange}
                        className="create-category-input-field"
                        value={data.heating_type}
                    >
                        <option value="1">Not specified</option>
                        <option value="2">Fuel</option>
                        <option value="3">Natural gas</option>
                        <option value="4">Electricity</option>
                    </select>
                    {errors.heating_type && <div>{errors.heating_type}</div>}
                </div>
            ) : (
                ""
            )}

            <div className="create-category-input">
                <label className="create-category-span">Availability:</label>
                <input
                    type="text"
                    value={data.availability}
                    name="availability"
                    onChange={handleChange}
                    className="create-category-input-field"
                />
                {errors.availability && <div>{errors.availability}</div>}
            </div>
        </div>
    );
};

export default CreateAdsMisc;
