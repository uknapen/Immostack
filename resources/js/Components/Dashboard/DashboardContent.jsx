import React from "react";
import DashboardSelfAds from "./DashboardSelfAds";
import DashboardFavorites from "./DashboardFavorites";
import DashboardBlacklist from "./DashboardBlacklist";
import DashboardSubmitted from "./DashboardSubmitted";
import DashboardRejected from "./DashboardRejected";
import DashboardReview from "./DashboardReview";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import AdsList from "@/Components/Dashboard/AdsList";

const DashboardContent = ({
    user,
    favorites,
    blacklist,
    ownAds,
    accounts,
    ads,
    activeComponent,
}) => {
    let postedAds = "";
    let submittedAds = "";
    let rejectedAds = "";
    let reviewAds = "";

    if (user.user_type_id !== 3) {
        postedAds = ownAds.filter((ad) => {
            return ad.status === 4;
        });
        submittedAds = ownAds.filter((ad) => {
            return ad.status === 1;
        });
        rejectedAds = ownAds.filter((ad) => {
            return ad.status === 3;
        });
    } else {
        reviewAds = ads;
    }

    return (
        <div className="h-full w-full">
            {user.user_type_id !== 3 ? (
                <>
                    {activeComponent === "own" && (
                        <DashboardSelfAds ads={postedAds} />
                    )}
                    {activeComponent === "favorites" && (
                        <DashboardFavorites ads={favorites} />
                    )}
                    {activeComponent === "blacklist" && (
                        <DashboardBlacklist ads={blacklist} />
                    )}
                    {activeComponent === "submitted" && (
                        <DashboardSubmitted ads={submittedAds} />
                    )}
                    {activeComponent === "rejected" && (
                        <DashboardRejected ads={rejectedAds} />
                    )}{" "}
                </>
            ) : (
                <>
                    {activeComponent === "review" && (
                        <DashboardReview ads={ads} />
                    )}
                </>
            )}
        </div>
    );
};

export default DashboardContent;
