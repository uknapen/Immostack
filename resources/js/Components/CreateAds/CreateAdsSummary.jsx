import React, { useState } from "react";

const CreateAdsSummary = ({ data, errors, handleChange }) => {
    const rentorsell = data.ads_type_id === "1" ? "renting" : "selling";
    const propertyTypeList = [
        "Apartment",
        "House",
        "Garage/Parking",
        "Building",
        "Storage",
        "Land",
        "Office",
        "Commercial",
    ];
    let feePayer = "";
    switch (data.fee_payer_id) {
        case "1":
            feePayer = "not specified";
            break;
        case "2":
            feePayer = `the buyer`;
            break;
        case "3":
            feePayer = `the seller`;
            break;
    }

    let energyClass = "";
    switch (data.energy_class) {
        case "1":
            energyClass = `not specified`;
            break;
        case "2":
            energyClass = `A`;
            break;
        case "3":
            energyClass = `B`;
            break;
        case "4":
            energyClass = `C`;
            break;
        case "5":
            energyClass = `D`;
            break;
        case "6":
            energyClass = `E`;
            break;
        case "7":
            energyClass = `F`;
            break;
        case "8":
            energyClass = `G`;
            break;
        case "9":
            energyClass = `H`;
            break;
        case "10":
            energyClass = `I`;
            break;
    }

    let insulationClass = "";
    switch (data.insulation_class) {
        case "1":
            insulationClass = `not specified`;
            break;
        case "2":
            insulationClass = `A`;
            break;
        case "3":
            insulationClass = `B`;
            break;
        case "4":
            insulationClass = `C`;
            break;
        case "5":
            insulationClass = `D`;
            break;
        case "6":
            insulationClass = `E`;
            break;
        case "7":
            insulationClass = `F`;
            break;
        case "8":
            insulationClass = `G`;
            break;
        case "9":
            insulationClass = `H`;
            break;
        case "10":
            insulationClass = `I`;
            break;
    }
    let heatingType = "";
    switch (data.heating_type) {
        case "1":
            heatingType = `not specified`;
            break;
        case "2":
            heatingType = `fuel`;
            break;
        case "3":
            heatingType = `natural gas`;
            break;
        case "4":
            heatingType = `electricity`;
            break;
    }

    let surfaceSummary = "";
    let roomSummary = "";
    let annexSummary = "";

    switch (data.property_type_id) {
        case "1":
            surfaceSummary = `${data.livable_surface}m² of livable surface.`;

            roomSummary = `The properties has ${
                data.bedrooms === "0" ? `no` : `${data.bedrooms}`
            } ${data.bedrooms === "1" ? "bedroom" : "bedrooms"}, ${
                data.bathrooms === "0" ? `no` : `${data.bathrooms}`
            } ${data.bathrooms === "1" ? "bathroom" : "bathrooms"}`;

            annexSummary = `${
                data.floors !== "1"
                    ? `${
                          data.balcony === "0"
                              ? ""
                              : `${
                                    data.balcony === "1"
                                        ? ", a balcony"
                                        : `, ${data.balcony} balconies`
                                }`
                      }`
                    : ""
            }${
                data.terrace === "0"
                    ? ""
                    : `${
                          data.terrace === "1"
                              ? `, a terrace`
                              : `, ${data.terrace} terraces`
                      }`
            }${data.cellar ? ", a cellar" : ""}${
                data.fitted_kitchen ? ", a fitted kitchen" : ""
            }${
                data.separate_toilets === "0"
                    ? ""
                    : `${
                          data.separate_toilets === "1"
                              ? `, a separated toilet`
                              : `, ${data.separate_toilets} separated toilets`
                      }`
            }${
                data.pool === "0"
                    ? ""
                    : `${
                          data.pool === "0" ? `, a pool` : `, ${data.pool}`
                      } pools`
            }.
            `;

            break;
        case "2":
            surfaceSummary = `${data.livable_surface}m² of livable surface, ${data.surface}m² of usable surface and ${data.terrain_surface}m² of terrain surface.`;

            roomSummary = `The properties has ${
                data.bedrooms === "0" ? `no` : `${data.bedrooms}`
            } ${data.bedrooms === "1" ? "bedroom" : "bedrooms"}, ${
                data.bathrooms === "0" ? `no` : `${data.bathrooms}`
            } ${data.bathrooms === "1" ? "bathroom" : "bathrooms"}`;

            annexSummary = `${
                data.floors !== "1"
                    ? `${
                          data.balcony === "0"
                              ? ""
                              : `${
                                    data.balcony === "1"
                                        ? ", a balcony"
                                        : `, ${data.balcony} balconies`
                                }`
                      }`
                    : ""
            }${
                data.terrace === ""
                    ? ""
                    : `${
                          data.terrace === "1"
                              ? `, a terrace`
                              : `, ${data.terrace} terraces`
                      }`
            }${data.cellar ? ", a cellar" : ""}${
                data.fitted_kitchen ? ", a fitted kitchen" : ""
            }${
                data.separate_toilets === ""
                    ? ""
                    : `${
                          data.separate_toilets === "1"
                              ? `, a separated toilet`
                              : `, ${data.separate_toilets} separated toilets`
                      }`
            }${
                data.pool === ""
                    ? ""
                    : `${
                          data.pool === "0" ? `, a pool` : `, ${data.pool}`
                      } pools`
            }.
            `;
            break;
        case "3":
            surfaceSummary = `${data.surface}m² of usable surface and ${data.terrain_surface}m² of terrain surface.`;

            roomSummary = `The properties has`;
            annexSummary = `${
                data.floors !== "1"
                    ? `${
                          data.balcony === "0"
                              ? ""
                              : `${
                                    data.balcony === "1"
                                        ? ", a balcony"
                                        : `, ${data.balcony} balconies`
                                }`
                      }`
                    : ""
            }${
                data.terrace === "0"
                    ? ""
                    : `${
                          data.terrace === "1"
                              ? `, a terrace`
                              : `, ${data.terrace} terraces`
                      }`
            }${data.cellar ? ", a cellar" : ""}${
                data.fitted_kitchen ? ", a fitted kitchen" : ""
            }${
                data.separate_toilets === "0"
                    ? ""
                    : `${
                          data.separate_toilets === "1"
                              ? `, a separated toilet`
                              : `, ${data.separate_toilets} separated toilets`
                      }`
            }${
                data.pool === "0"
                    ? ""
                    : `${
                          data.pool === "0" ? `, a pool` : `, ${data.pool}`
                      } pools`
            }.
            `;
            break;
        case "4":
            surfaceSummary = `${data.livable_surface}m² of livable surface, ${data.surface}m² of usable surface and ${data.terrain_surface}m² of terrain surface.`;

            roomSummary = `The properties has ${
                data.rooms === "0" ? `no` : `${data.rooms}`
            } ${data.rooms === "1" ? "room" : "rooms"}.`;
            annexSummary = `${
                data.floors !== "1"
                    ? `${
                          data.balcony === "0"
                              ? ""
                              : `${
                                    data.balcony === "1"
                                        ? ", a balcony"
                                        : `, ${data.balcony} balconies`
                                }`
                      }`
                    : ""
            }${
                data.terrace === "0"
                    ? ""
                    : `${
                          data.terrace === "1"
                              ? `, a terrace`
                              : `, ${data.terrace} terraces`
                      }`
            }${data.cellar ? ", a cellar" : ""}${
                data.fitted_kitchen ? ", a fitted kitchen" : ""
            }${
                data.separate_toilets === "0"
                    ? ""
                    : `${
                          data.separate_toilets === "1"
                              ? `, a separated toilet`
                              : `, ${data.separate_toilets} separated toilets`
                      }`
            }${
                data.pool === "0"
                    ? ""
                    : `${
                          data.pool === "0" ? `, a pool` : `, ${data.pool}`
                      } pools`
            }.
            `;
            break;
        case "5":
            surfaceSummary = `${data.surface}m² of usable surface and ${data.terrain_surface}m² of terrain surface.`;

            roomSummary = `The properties has ${
                data.rooms === "0" ? `no` : `${data.rooms}`
            } ${data.rooms === "1" ? "room" : "rooms"}, ${
                data.bathrooms === "0" ? `no` : `${data.bathrooms}`
            } ${data.bathrooms === "1" ? "bathroom" : "bathrooms"}`;

            annexSummary = `${
                data.floors !== "1"
                    ? `${
                          data.balcony === "0"
                              ? ""
                              : `${
                                    data.balcony === "1"
                                        ? ", a balcony"
                                        : `, ${data.balcony} balconies`
                                }`
                      }`
                    : ""
            }${
                data.terrace === "0"
                    ? ""
                    : `${
                          data.terrace === "1"
                              ? `, a terrace`
                              : `, ${data.terrace} terraces`
                      }`
            }${data.cellar ? ", a cellar" : ""}${
                data.fitted_kitchen ? ", a fitted kitchen" : ""
            }${
                data.separate_toilets === "0"
                    ? ""
                    : `${
                          data.separate_toilets === "1"
                              ? `, a separated toilet`
                              : `, ${data.separate_toilets} separated toilets`
                      }`
            }${
                data.pool === "0"
                    ? ""
                    : `${
                          data.pool === "0" ? `, a pool` : `, ${data.pool}`
                      } pools`
            }.
            `;
            break;
        case "6":
            surfaceSummary = `${data.surface}m² of usable surface and ${data.terrain_surface}m² of terrain surface.`;
            break;
        case "7":
            surfaceSummary = `${data.surface}m² of usable surface and ${data.terrain_surface}m² of terrain surface.`;

            roomSummary = `The properties has ${
                data.rooms === "0" ? `no` : `${data.rooms}`
            } ${data.rooms === "1" ? "room" : "rooms"}, ${
                data.bathrooms === "0" ? `no` : `${data.bathrooms}`
            } ${data.bathrooms === "1" ? "bathroom" : "bathrooms"}`;

            annexSummary = `${
                data.floors !== "1"
                    ? `${
                          data.balcony === "0"
                              ? ""
                              : `${
                                    data.balcony === "1"
                                        ? ", a balcony"
                                        : `, ${data.balcony} balconies`
                                }`
                      }`
                    : ""
            }${
                data.terrace === "0"
                    ? ""
                    : `${
                          data.terrace === "1"
                              ? `, a terrace`
                              : `, ${data.terrace} terraces`
                      }`
            }${data.cellar ? ", a cellar" : ""}${
                data.fitted_kitchen ? ", a fitted kitchen" : ""
            }${
                data.separate_toilets === "0"
                    ? ""
                    : `${
                          data.separate_toilets === "1"
                              ? `, a separated toilet`
                              : `, ${data.separate_toilets} separated toilets`
                      }`
            }${
                data.pool === "0"
                    ? ""
                    : `${
                          data.pool === "0" ? `, a pool` : `, ${data.pool}`
                      } pools`
            }.
            `;
            break;
        case "8":
            surfaceSummary = `${data.surface}m² of usable surface and ${data.terrain_surface}m² of terrain surface.`;

            roomSummary = `The properties has ${
                data.rooms === "0" ? `no` : `${data.rooms}`
            } ${data.rooms === "1" ? "room" : "rooms"}, ${
                data.bathrooms === "0" ? `no` : `${data.bathrooms}`
            } ${data.bathrooms === "1" ? "bathroom" : "bathrooms"}`;

            annexSummary = `${
                data.floors !== "1"
                    ? `${
                          data.balcony === "0"
                              ? ""
                              : `${
                                    data.balcony === "1"
                                        ? ", a balcony"
                                        : `, ${data.balcony} balconies`
                                }`
                      }`
                    : ""
            }${
                data.terrace === "0"
                    ? ""
                    : `${
                          data.terrace === "1"
                              ? `, a terrace`
                              : `, ${data.terrace} terraces`
                      }`
            }${data.cellar ? ", a cellar" : ""}${
                data.fitted_kitchen ? ", a fitted kitchen" : ""
            }${
                data.separate_toilets === "0"
                    ? ""
                    : `${
                          data.separate_toilets === "1"
                              ? `, a separated toilet`
                              : `, ${data.separate_toilets} separated toilets`
                      }`
            }${
                data.pool === "0"
                    ? ""
                    : `${
                          data.pool === "0" ? `, a pool` : `, ${data.pool}`
                      } pools`
            }.
            `;
            break;
    }

    return (
        <div className="create-category">
            <div className="create-category-title">Summary</div>
            <div className="create-category-input">
                <span>
                    You are <b>{rentorsell}</b> a{" "}
                    <b>{propertyTypeList[data.property_type_id - 1]}</b>. Your
                    advertisement will be named "<em>{data.title}</em>". It is
                    localised at the <b>{data.number}</b>{" "}
                    <em>
                        {data.street},{" "}
                        {data.street2 !== " " ? "" : `${data.street2}, `}
                    </em>
                    L{data.post_code} in <b>{data.city}</b>, {data.country}.
                </span>
            </div>
            <div className="create-category-input">
                <span>
                    The price is set to €{" "}
                    {data.ads_type_id === "1"
                        ? `${data.monthly_charges.toLocaleString()} per month`
                        : data.price.toLocaleString()}
                    , there is{" "}
                    {data.agency_fees !== 0
                        ? `an agency fee of € ${data.agency_fees.toLocaleString()}`
                        : `no agency fee`}
                    . It is available <b>{data.availability}</b>. The fee payer
                    is {feePayer}.
                </span>
            </div>
            <div className="create-category-input">
                <span>
                    The property was build in <b>{data.construction_year}</b>
                    {data.renovation_year !== "0"
                        ? ` and was renovated in ${data.renovation_year}. `
                        : ". "}{" "}
                    It has {surfaceSummary}
                </span>
            </div>
            {data.property_type_id !== "6" ? (
                <div className="create-category-input">
                    <span>
                        The building has{" "}
                        {data.floors === "1"
                            ? "1 floor"
                            : `${data.floors} floors${
                                  data.property_type_id !== "2"
                                      ? `, the property is at the floor number ${
                                            data.floor
                                        } and it ${
                                            data.elevator
                                                ? "has"
                                                : "doesn't have"
                                        } an elevator`
                                      : ""
                              }`}
                        .
                        {data.garage === "0"
                            ? ""
                            : ` It includes ${
                                  data.garage === "1"
                                      ? `a garage.`
                                      : `${data.garage} garages.`
                              }`}
                        {data.parking_spots === ""
                            ? ""
                            : ` It also includes ${
                                  data.parking_spots === "1"
                                      ? `a parking spot.`
                                      : `${data.parking_spots} parking spots.`
                              }`}
                    </span>
                    <span>
                        {roomSummary}
                        {annexSummary}
                    </span>
                </div>
            ) : (
                ""
            )}{" "}
            <div className="create-category-input">
                <span>
                    The energy class is <b>{energyClass}</b>, the insulation
                    class is <b>{insulationClass}</b> and the heating type is{" "}
                    <b>{heatingType}</b>.
                </span>
            </div>
        </div>
    );
};

export default CreateAdsSummary;
