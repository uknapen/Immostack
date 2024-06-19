import { useEffect, useRef, useState } from "react";
import CityTag from "./CityTag";

const CitiesInputField = ({cities, data, setData}) => {

    const [filteredCities, setFilteredCities] = useState([]);
    const [displayList, setDisplayList] = useState(false);
    const inputRef = useRef(null);

    const handleSearchInput = (ref) => {
        const text = ref.current.value;
        const filter = cities.filter((city) =>{
            return city.toLowerCase().startsWith(text.toLowerCase());
        })
        setFilteredCities(filter);
    }

    const handleClick = (e) => {
        displayCitiesList(true);
    }

    const displayCitiesList = (state) => {
        setDisplayList(state);
        if(state) {
            handleSearchInput(inputRef);
        }
    }

    const addCity = (name) => {
        if(!data['cities'].includes(name)){
            const cities = data['cities'];
            cities.push(name);
            setData('cities', cities);
        }
        inputRef.current.value = '';
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(e.target != inputRef.current){
                displayCitiesList(false);
            }
        };
        document.addEventListener(`click`, handleClickOutside);
        return () => {
            document.removeEventListener(`click`, handleClickOutside);
          };
    }, []);

    return (
        <div id="search-input">
            <ul>
                {data['cities'].map((city) => (
                    <CityTag key={city} name={city} data={data} setData={setData}/>
                ))}
                <input
                    type="text"
                    placeholder="Add location"
                    ref={inputRef}
                    onClick={(e) => handleClick(e)}
                    onChange={() => handleSearchInput(inputRef)}
                />
            </ul>
            <div className={`w-full dropdown-container self-start justify-self-start ${displayList ? 'flex' : 'hidden'}`} >
                <div className="w-full dropdown-content rounded-lg">
                    {filteredCities.map((city) => (
                        <p key={city} onClick={(e) => addCity(city)}>{city}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CitiesInputField;