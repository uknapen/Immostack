import { useForm } from "@inertiajs/inertia-react";
import ContractChoice from "./ContractChoice";
import ParametersChoice from "./ParametersChoice";
import PropertyAndCitiesSearch from "./PropertyAndCitiesSearch";

const Search = ({cities, data, setData, handleSubmit, user}) => {
    
    

    return (
        <div id="search-part" className="flex flex-col mx-auto mt-10 p-10 w-[75%]">
            <form encType="multipart/form-data" onSubmit={handleSubmit} className="w-full">
                <ContractChoice setData={setData}/>
                <PropertyAndCitiesSearch data={data} setData={setData} handleSubmit={handleSubmit} cities={cities}/>
                <ParametersChoice setData={setData} data={data} />
            </form>
        </div>
    );
};

export default Search;
