import React from "react";

const SingleContrat = ({ ad }) => {
    return (
        <div className="single-spec">
            {/* title */}
            <div className="flex justify-between border-b border-outline_color ">
                <span className="p-2">Administrative</span>

                <div className="border-l border-outline_color py-2 px-6">
                    <img src="../svg/contract.svg" className="w-6 h-6 "></img>
                </div>
            </div>
            {/* entries */}
            <div className="flex flex-col gap-2">
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Contract type: </span>
                    <span>{ad.type}</span>
                </div>
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Property type: </span>
                    <span>{ad.property.property_type}</span>
                </div>
                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Price: </span>
                    <span>€ {ad.price.toLocaleString()}</span>
                </div>
                {/* 1 Entry */}
                {ad.agency_fees !== 0 ? (
                    <>
                        <div className="flex justify-between">
                            <span>Agency fees: </span>
                            <span>€ {ad.agency_fees.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Fee payer: </span>
                            <span>{ad.fee_payer}</span>
                        </div>
                    </>
                ) : (
                    ""
                )}
                {/* 1 Entry */}
                {ad.monthly_charges !== 0 ? (
                    <>
                        <div className="flex justify-between">
                            <span>Monthly charges: </span>
                            <span>€ {ad.monthly_charges.toLocaleString()}</span>
                        </div>
                    </>
                ) : (
                    ""
                )}

                {/* 1 Entry */}
                <div className="flex justify-between">
                    <span>Availability: </span>
                    <span>{ad.availability}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleContrat;
