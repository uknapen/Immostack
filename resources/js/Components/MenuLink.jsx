import { Link } from "@inertiajs/inertia-react";

const MenuLink = ({href, text, method}) => {

    return (
        <li>
            <Link
                href={href}
                method={method}
                className="w-full"
            >
                {text}
                <img
                    src="../svg/angle-right.svg"
                    className="w-6 h-6"
                ></img>
            </Link>
        </li>
    );
}

export default MenuLink;