import React from "react";
import MenuLink from "./MenuLink";

const MenuHeader = ({ user }) => {
    return (
        <ul>
            {user && (
                <>
                    <MenuLink
                        href={route("dashboard")}
                        text={"Dashboard"}
                        method={"get"}
                    />
                    <MenuLink
                        href={"/dashboard?view=favorites"}
                        text={"Favorite ads"}
                        method={"get"}
                    />
                    <MenuLink
                        href={"/dashboard?view=blacklist"}
                        text={"Blacklisted ads"}
                        method={"get"}
                    />
                    <MenuLink
                        href={"/logout"}
                        text={"Log Out"}
                        method={"post"}
                    />
                </>
            )}
            {!user && (
                <>
                    <MenuLink
                        href={route("login")}
                        text={"Log In"}
                        method={"get"}
                    />
                    <MenuLink
                        href={route("register")}
                        text={"Register"}
                        method={"get"}
                    />
                </>
            )}
        </ul>
    );
};

export default MenuHeader;
