import React from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CreateAdsForm from "@/Components/CreateAds/CreateAdsForm";

const CreateAds = ({ jetstream, user }) => {
    return (
        <>
            <Header user={user} />
            <div className="flex flex-col mt-8 justify-center m-auto bg-background_color px-20">
                {/* <div className="create-title">Post your advertisement</div> */}
                <CreateAdsForm jetstream={jetstream} />
            </div>
            <Footer />
        </>
    );
};

export default CreateAds;
