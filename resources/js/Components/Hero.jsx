import React from "react";

const Hero = () => {
    const handleClick = () => {
        const targetElement = document.querySelector("#search-part");
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
        <div>
            <div id="hero">
                <div id="hero-bloc">
                    <div className="text-3xl">
                        Your property at the best price
                    </div>
                    <div className="text-2xl">
                        Find your next home right now
                    </div>
                    <div className="hero-class-scroller">
                        <button onClick={handleClick}>
                            <img
                                src="./svg/angle-down.svg"
                                className="w-20 h-20"
                            ></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
