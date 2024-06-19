import React from "react";
import { Link } from "@inertiajs/inertia-react";

const GoBack = () => {
    return (
        <div className="w-[1000px] px-8">
            <Link href="/" className="flex">
                <div className="flex items-center justify-center">
                    <img src="./svg/arrow-back.svg" className="w-5 h-5"></img>
                </div>
                <span className="text-secondary_color px-2">Go back</span>
            </Link>
        </div>
    );
};

export default GoBack;
