import PropertyChoice from "./PropertyChoice";
import CitiesInputField from "./CitiesInputField";
import SearchButton from "./SearchButton";

const PropertyAndCitiesSearch = ({data, setData, handleSubmit, cities}) => {

    return (
        <div id="search-bar">
            <div className="flex flex-row w-full">
                <PropertyChoice setData={setData} />
                <CitiesInputField cities={cities} data={data} setData={setData} />
            </div>
            <SearchButton handleSubmit={handleSubmit} />
        </div>
    );
}

export default PropertyAndCitiesSearch;