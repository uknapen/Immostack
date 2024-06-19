import React, { useState } from "react";
import SingleAdSummaryForm from "./SingleAdSummaryForm";
import SingleAdSummaryContact from "./SingleAdSummaryContact";
import SingleAdSummaryButton from "./SingleAdSummaryButton";

const SingleAdSummaryText = ({ ad, user }) => {
    return (
        <div className="announcement-summ ">
            <div className="summ-leftmenu-border">
                <span className="text-2xl font-bold">
                    € {ad.price.toLocaleString()}
                </span>
            </div>
            <div className="summ-leftmenu-border text-xl">
                {ad.property.city}
            </div>
            <div className="summ-leftmenu-border text-xl">{ad.user_name}</div>
            <div className="summ-leftmenu-border">
                Contract type: <b>{ad.type}</b>
            </div>
            <div className="flex summ-leftmenu-border justify-between">
                <div className="flex flex-row gap-1 w-[30%]">
                    <img src="../svg/surface.svg" className="w-6 h-6"></img>
                    <span className="text-xl">{ad.property.surface} m²</span>
                </div>
                <div className="flex flex-row gap-1 w-[30%]">
                    <img src="../svg/bed.svg" className="w-6 h-6"></img>
                    <span className="text-xl">{ad.property.bedrooms}</span>
                </div>
                <div className="flex flex-row gap-1 w-[30%]">
                    <img src="../svg/bath.svg" className="w-6 h-6"></img>
                    <span className="text-xl">{ad.property.bathrooms}</span>
                </div>
            </div>
            <div className="summ-leftmenu-border flex justify-between">
                <SingleAdSummaryButton ad={ad} user={user} />
            </div>
            <div className="flex flex-col">
                <SingleAdSummaryContact ad={ad} />
                <div>
                    <SingleAdSummaryForm ad={ad} />
                </div>
            </div>
        </div>
    );
};

export default SingleAdSummaryText;
