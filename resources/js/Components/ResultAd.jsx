import React from "react";
import { useState } from "react";
import ImageSliderWelcome from "./ImageSliderWelcome";
import { Link } from "@inertiajs/inertia-react";

const ResultAd = ({ ad, isFav, handleSubmit, user }) => {
    let description =
        ad["description"].lenght < 400
            ? ad["description"]
            : ad["description"].substring(0, 400) + "...";

    const numberRoom = ad.property.bedrooms === 1 ? `` : `s`;
    const numberBathroom = ad.property.bathrooms === 1 ? `` : `s`;

    // const image = `../photos` + ad.images[1];

    return (
        <div className="announcement">
            <div className="flex flex-row">
                {/* Image */}
                <ImageSliderWelcome data={ad.images} />

                <div className="txt flex flex-col p-3 justify-between h-[350px]">
                    {/* Ads information */}{" "}
                    <Link href={route(`ads.show`, [ad.id])} method="get">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between">
                                <div className="text-2xl">
                                    € {ad.price.toLocaleString()}
                                </div>
                                <div className="text-2xl">{ad.user_name}</div>
                            </div>
                            <div className="text-lg">{ad.title}</div>
                            <div className="text-lg">
                                {ad.property.post_code} {ad.property.city}
                            </div>
                            <div className="flex flex-row mt-2 gap-5">
                                <div className="flex flex-row gap-1">
                                    <img
                                        src="/svg/surface.svg"
                                        className="w-6 h-6"
                                    ></img>
                                    <span>{ad.property.surface} M²</span>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <img
                                        src="/svg/bed.svg"
                                        className="w-6 h-6"
                                    ></img>
                                    <span>
                                        {ad.property.bedrooms} room{numberRoom}
                                    </span>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <img
                                        src="/svg/bath.svg"
                                        className="w-6 h-6"
                                    ></img>
                                    <span>
                                        {ad.property.bathrooms} bathroom
                                        {numberBathroom}
                                    </span>
                                </div>
                            </div>
                            <div className="result-description ">
                                {description}
                            </div>
                        </div>
                    </Link>
                    {/* Ads button */}
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2">
                            <div>
                                <button className="button-1x2">
                                    <Link
                                        href={route(`ads.show`, [ad.id])}
                                        method="get"
                                    >
                                        More Information
                                    </Link>
                                </button>
                            </div>
                            <div>
                                <button className="button-1x2">
                                    <a href="/">Contact</a>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div>
                                <button className="icon-1x2">
                                    <Link
                                        href={route(
                                            user
                                                ? "ads.favorite.toggle"
                                                : "ads.favorite.add",
                                            [ad.id]
                                        )}
                                        method="get"
                                        preserveScroll
                                        preserveState
                                        only={["favoriteIds"]}
                                    >
                                        <img
                                            src={
                                                isFav
                                                    ? "/svg/heart_filled.svg"
                                                    : "/svg/heart.svg"
                                            }
                                            className="w-6 h-6"
                                        ></img>
                                    </Link>
                                </button>
                            </div>
                            {user && (
                                <div>
                                    <button
                                        className="icon-1x2"
                                        onClick={(e) => handleSubmit(e, ad.id)}
                                    >
                                        <img
                                            src="/svg/trash.svg"
                                            className="w-6 h-6"
                                        ></img>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultAd;
