import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import DashboardSidebar from "@/Components/Dashboard/DashboardSidebar";
import DashboardContent from "@/Components/Dashboard/DashboardContent";

const Dashboard = ({
    user,
    favorites,
    blacklist,
    ownAds,
    accounts,
    ads,
    isAdmin,
}) => {
    const queryParameters = new URLSearchParams(window.location.search);
    let view = queryParameters.get("view");
    if (user.user_type_id === 1) {
        if (view === null) {
            view = "favorites";
        }
    } else if (user.user_type_id === 2) {
        if (view === null) {
            view = "own";
        }}
        else {
        view = "review";
    }
    const [activeComponent, setActiveComponent] = useState(view);
    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <Header user={user} />

                <DashboardSidebar
                    user={user}
                    setActiveComponent={handleComponentChange}
                />
                <DashboardContent
                    user={user}
                    favorites={favorites}
                    blacklist={blacklist}
                    ownAds={ownAds}
                    accounts={accounts}
                    ads={ads}
                    activeComponent={activeComponent}
                />
            </div>
            <Footer />
        </div>
    );
};
export default Dashboard;
