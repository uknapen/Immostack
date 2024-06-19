import React, { useEffect } from "react";

const Map = ({ latitude, longitude, markerTitle }) => {
    let map;

    async function initMap() {
        const position = { lat: latitude, lng: longitude };
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerView } = await google.maps.importLibrary(
            "marker"
        );

        map = new Map(document.getElementById("map"), {
            zoom: 15,
            center: position,
            mapId: "details_id",
        });

        const marker = new AdvancedMarkerView({
            map: map,
            position: position,
            title: markerTitle,
        });
    }

    useEffect(() => {
        initMap();
    }, []);

    return (
        <div className="features-map">
            <div id="map" className="w-full h-full"></div>
        </div>
    );
};

export default Map;
