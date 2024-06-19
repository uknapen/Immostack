import React from "react";
import { Link } from "@inertiajs/inertia-react";

const SingleAdSummaryButton = ({ ad, user }) => {
    const handleClick = () => {
        const targetElement = document.querySelector("#single-detail");
        console.log("clicked");
        if (targetElement) {
            const targetElementRect = targetElement.getBoundingClientRect();
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            const targetOffsetTop = targetElementRect.top + scrollTop;

            window.scrollTo({
                top: targetOffsetTop,
                behavior: "smooth",
            });
        }
    };
    return (
        <>
            <div className="single-summary-button" onClick={handleClick}>
                <span>More details</span>
            </div>
            <div className="single-summary-button gap-2">
                <Link
                    href={route("ads.favorite.toggle", [ad.id])}
                    method="get"
                    preserveScroll
                    preserveState
                    only={["favoriteIds"]}
                >
                    <div className="flex justify-around items-center gap-2">
                        <img
                            src={
                                // isFav ? "./svg/heart_filled.svg" :
                                "/svg/heart-white.svg"
                            }
                            className="w-6 h-6"
                        ></img>
                        <span>Favourite</span>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default SingleAdSummaryButton;
