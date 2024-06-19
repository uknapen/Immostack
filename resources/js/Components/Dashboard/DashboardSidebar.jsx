import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import AdsList from "@/Components/Dashboard/AdsList";

const DashboardSidebar = ({ user, setActiveComponent }) => {
    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };
    console.log(user.user_type_id);
    return (
        <div className="w-full  flex justify-between border-t-2 border-b-2  border-secondary_color">
            {/* Menu button */}
            <div className="flex justify-between border-collapse">
                {user.user_type_id !== 3 ? (
                    <>
                        <div
                            className="dash-menu-button"
                            onClick={() => handleComponentChange("own")}
                        >
                            <button>My post</button>
                        </div>
                        <div
                            className="dash-menu-button"
                            onClick={() => handleComponentChange("favorites")}
                        >
                            <button>Favorites post</button>
                        </div>
                        <div
                            className="dash-menu-button"
                            onClick={() => handleComponentChange("blacklist")}
                        >
                            <button>Blacklisted post</button>
                        </div>
                        <div
                            className="dash-menu-button"
                            onClick={() => handleComponentChange("submitted")}
                        >
                            <button>Submitted post </button>
                        </div>
                        <div
                            className="dash-menu-button"
                            onClick={() => handleComponentChange("rejected")}
                        >
                            <button>Rejected post</button>
                        </div>
                    </>
                ) : (
                    <div
                        className="dash-menu-button h-[48px]"
                        onClick={() => handleComponentChange("review")}
                    >
                        <button>post to review</button>
                    </div>
                )}
            </div>

            {/* Create */}
            {user.user_type_id !== 3 ? (
                <div className="dash-menu-create">
                    <Link href={route("ads.create")} method="get">
                        <button
                            className="dash-create-full bg-secondary_color  "
                            type="button"
                        >
                            <span>Create a new post</span>
                        </button>
                    </Link>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default DashboardSidebar;
