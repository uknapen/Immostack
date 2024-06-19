import React from "react";

const SingleSpec = ({ ad }) => {
    const handleColor = (value) => {
        switch (value) {
            case "A":
                return "#008631";
                break;
            case "B":
                return "#4aa639";
                break;
            case "C":
                return "#87b636";
                break;
            case "D":
                return "#ddde20";
                break;
            case "E":
                return "#f0f55a";
                break;
            case "F":
                return "#ffb520";
                break;
            case "G":
                return "#fe7316";
                break;
            case "H":
                return "#f23b13";
                break;
            case "I":
                return "#c80d20";
                break;
        }
    };

    return (
        <div className="single-spec">
            {/* title */}
            <div className="flex justify-between border-b border-outline_color ">
                <span className="p-2">Specification</span>

                <div className="border-l border-outline_color py-2 px-6">
                    <img src="../svg/spec.svg" className="w-6 h-6 "></img>
                </div>
            </div>
            {/* entries */}
            <div className="flex flex-col gap-2">
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Energy class: </span>
                    {ad.property.energy_class === "Not specified" ? (
                        "Not specified"
                    ) : (
                        <div
                            className="letter-icon"
                            style={{
                                backgroundColor: `${handleColor(
                                    ad.property.energy_class
                                )}`,
                            }}
                        >
                            {ad.property.energy_class}
                        </div>
                    )}
                </div>
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Insulation class: </span>
                    {ad.property.insulation_class === "Not specified" ? (
                        "Not specified"
                    ) : (
                        <div
                            className="letter-icon"
                            style={{
                                backgroundColor: `${handleColor(
                                    ad.property.insulation_class
                                )}`,
                            }}
                        >
                            {ad.property.insulation_class}
                        </div>
                    )}
                </div>
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Heating type: </span>

                    {ad.property.heating_type}
                </div>
            </div>
        </div>
    );
};

export default SingleSpec;
// energy_class: "1",
// insulation_class: "1",
// heating_type: "1",
