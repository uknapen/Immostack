import React from "react";

const Footer = () => {
    return (
        <div id="footer">
            <div
                className="flex gap-4 justify-between items-center
            "
            >
                <div>@ 2024 IMMOSTACK</div>
                <div>
                    <a href="">General Conditions</a>
                </div>
                <div>
                    <a href="">Privacy Policy</a>
                </div>
                <div>
                    <a href="">Use of Cookies</a>
                </div>
            </div>
            <div className="social-login">
                <img src="/svg/linkedin.svg"></img>
                <img src="/svg/linkedin.svg"></img>
            </div>
        </div>
    );
};

export default Footer;
