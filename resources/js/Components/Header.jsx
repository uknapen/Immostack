import React, { useEffect } from "react";
import { useState, useRef } from "react";
import MenuHeader from "./MenuHeader";
import { Link } from "@inertiajs/inertia-react";

const Header = ({ user }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOUtside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuVisible(false);
            }
        };
        document.addEventListener(`click`, handleClickOUtside);
    }, []);

    const toggleMenu = (e) => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div id="header">
            <div className="w-[30%]">
                <div className="scale-75 absolute ">
                    <div className="trianglelogin !w-"></div>
                    <div className="blocklogin"></div>
                </div>
            </div>
            <div id="title" className="w-[30%]">
                <Link href={"/"}>ImmoStack</Link>
            </div>
            <div className="w-[30%] flex justify-end">
                <div
                    id="header-menu-selector"
                    ref={menuRef}
                    onClick={toggleMenu}
                >
                    {user ? (
                        <span>Welcome {user.name}</span>
                    ) : (
                        <span>Log In</span>
                    )}
                    <span>
                        <img
                            src="/svg/angle-down.svg"
                            className="w-6 h-6"
                        ></img>
                    </span>

                    <div
                        id="header-menu"
                        style={{ display: menuVisible ? "block" : "none" }}
                    >
                        <MenuHeader user={user} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
