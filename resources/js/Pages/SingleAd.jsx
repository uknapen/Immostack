import React from "react";
import Map from "@/Components/Map";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import SingleAdSummary from "@/Components/SingleAd/SingleAdSummary";
import SingleAdDetails from "@/Components/SingleAd/SingleAdDetails";

const SingleAd = ({ ad, user }) => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <Header />
                {ad == null && <p>Unknown advertisement</p>}
                {ad != null && (
                    <div className="flex flex-col gap-8">
                        <SingleAdSummary ad={ad} user={user} />
                        <SingleAdDetails ad={ad} />
                    </div>
                )}
                <Footer />
            </div>
        </div>
    );
};

export default SingleAd;
