import React, { useState, useEffect } from "react";

const CreateCheckSVG = ({
    isChecked,
    setIsChecked,
    datas,
    errors,
    handleChange,
    title,
    text,
    name,
    svg,
}) => {
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <>
            <div className="create-category-input">
                <span className="create-category-span">{title}</span>
                <div className="flex items-center w-3/4 ml-[16px] h-[52px]">
                    <div className="custom-checkbox mr-2 ">
                        <input
                            type="checkbox"
                            id={`id-${name}`}
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={`id-${name}`}></label>
                    </div>
                    <span className="create-input-label">Yes</span>
                    <div
                        className={`flex items-center w-full ${
                            isChecked ? "fade-in" : "fade-out"
                        }`}
                    >
                        {isChecked ? (
                            <>
                                <span className="create-input-label text-nowrap mr-4">
                                    {text}
                                </span>
                                <div className="relative w-full">
                                    <input
                                        type="number"
                                        value={datas}
                                        name={name}
                                        min="0"
                                        step="0.01"
                                        onChange={handleChange}
                                        className="create-category-input-svg !mx-0 !w-full"
                                    />
                                    {errors.name && <div>{errors.name}</div>}
                                    <label
                                        htmlFor="agency_fees"
                                        className="abs-label-check"
                                    >
                                        <img src={svg} className="w-5 h-5 " />
                                    </label>
                                </div>
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateCheckSVG;
