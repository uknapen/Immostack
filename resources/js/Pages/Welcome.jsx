import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Search from "@/Components/SearchBar/Search";
import ResultSearchTitle from "@/Components/ResultSearchTitle";
import ResultSearch from "@/Components/ResultSearch";
import Footer from "@/Components/Footer";
import { useForm } from "@inertiajs/inertia-react";

const Welcome = ({ user, ads, totalCount, cities, favoriteIds }) => {

    const { data, setData, post, processing, errors, reset } = useForm({
        contractType: "2",
        property_type: "1",
        min_budget: null,
        max_budget: null,
        min_surface: null,
        max_surface: null,
        min_terrain_surface: null,
        max_terrain_surface: null,
        min_bedrooms: null,
        max_bedrooms: null,
        min_bathrooms: null,
        max_bathrooms: null,
        garage: false,
        balcony: false,
        terrace: false,
        cellar: false,
        fitted_kitchen: false,
        separate_toilets: false,
        pool: false,
        elevator: false,
        blacklist: null,
        cities: [],
    });

    const handleSubmit = (e, blacklist = null) => {
        e.preventDefault();
        data['blacklist'] =  blacklist;
        post(route('ads.search'), {preserveScroll: true, preserveState: true});
    };

    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <Header user={user} />
                <Hero />
                <Search cities={cities} data={data} setData={setData} handleSubmit={handleSubmit}/>
                <div id="welcome-ads-container">
                    <ResultSearchTitle count={totalCount} />
                    <ResultSearch ads={ads} favoriteIds={favoriteIds} handleSubmit={handleSubmit} user={user} />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Welcome;
