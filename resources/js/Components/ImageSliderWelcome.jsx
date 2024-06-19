import React from "react";
import { useState, useEffect } from "react";

const ImageSliderWelcome = ({ data }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    let slides = Object.values(data);
    slides = slides.map((element) => {
        return "../photos" + element;
    });
    console.log(slides);

    const plusDivs = (n) => {
        const newIndex = slideIndex + n;
        if (newIndex < 0) {
            setSlideIndex(slides.length - 1);
        } else if (newIndex >= slides.length) {
            setSlideIndex(0);
        } else {
            setSlideIndex(newIndex);
        }
    };

    return (
        <div>
            <div className="relative w-[350px] h-[350px] overflow-hidden flex items-center justify-center z-[0]">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        className="mySlides rounded-l-[32px]"
                        src={slide}
                        style={{
                            display: index === slideIndex ? "block" : "none",
                        }}
                    />
                ))}
                <div className="slider-button">
                    <div className="flex justify-between w-full">
                        <img
                            src="../svg/previous.svg"
                            className="w-12 h-12 cursor-pointer"
                            onClick={() => plusDivs(-1)}
                        ></img>
                        <img
                            src="../svg/next.svg"
                            className="w-12 h-12 cursor-pointer"
                            onClick={() => plusDivs(1)}
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSliderWelcome;
