import React, { useState } from "react";

const test = () => {
    const obj = [
        { name: "bedrooms", isChecked: data.bedrooms !== "" },
        { name: "bathrooms", isChecked: data.bathrooms !== "" },
        { name: "balcony", isChecked: data.balcony !== "" },
        { name: "terrace", isChecked: data.terrace !== "" },
        { name: "separate_toilets", isChecked: data.separate_toilets !== "" },
    ];

    return (
        <div>
            {obj.map((name, index) => {
                <>
                    <span>{name}</span>
                    <span>{index}</span>
                </>;
            })}
        </div>
    );
};

export default test;
