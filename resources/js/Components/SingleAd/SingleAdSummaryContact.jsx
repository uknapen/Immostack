import React, { useState } from "react";

const SingleAdSummaryContact = ({ ad }) => {
    const [isFirstTextVisible, setIsFirstTextVisible] = useState(true);

    const handleClick = () => {
        setIsFirstTextVisible((prev) => !prev);
    };
    return (
        <div className="contact-details" onClick={handleClick}>
            {isFirstTextVisible ? (
                <span>Show contact details</span>
            ) : (
                <div className="flex justify-between items-center gap-8">
                    <div className="flex gap-2">
                        <img
                            src="../svg/mail-white.svg"
                            className="w-6 h-6"
                        ></img>
                        <span>
                            <b>{ad.user_email}</b>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleAdSummaryContact;
