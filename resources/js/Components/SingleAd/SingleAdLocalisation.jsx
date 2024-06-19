import React from "react";
import Map from "../Map";

const SingleAdLocalisation = ({ ad }) => {
    return (
        <div className="p-4 bg-background_color rounded-[32px]">
            <div className="text-3xl mb-4">Location</div>
            <Map
                latitude={ad.property.latitude}
                longitude={ad.property.longitude}
                markerTitle={ad.title}
            />
        </div>
    );
};

export default SingleAdLocalisation;
