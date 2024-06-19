import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ValidateAdsForm from "@/Components/AdsValidation/ValidateAdsForm";

const AdsValidation = ({ ad, user }) => {
    return (
        <>
            <Header user={user} />
            <div className="flex flex-col mt-8 justify-center m-auto bg-background_color px-20">
                {/* <div className="create-title">Post your advertisement</div> */}
                <ValidateAdsForm ad={ad} />
            </div>
            <Footer />
        </>
    );
};

export default AdsValidation;
