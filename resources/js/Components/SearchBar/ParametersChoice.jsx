import { useEffect, useState } from "react";
import ParametersChoiceMinMaxButton from "./ParametersChoiceMinMaxButton";
import ParametersChoiceCheckboxesButton from "./ParametersChoiceCheckboxesButton";

const ParametersChoice = ({setData, data}) => {

    const dropdowns = ['budget', 'surface', 'terrain_surface', 'bedrooms', 'bathrooms', 'features', 'cities'];
    const [dropdown, setdropdown] = useState("");
    const featuresChoices = [
        {name: "garage", title: "Garage"},
        {name: "balcony", title: "Balcony"},
        {name: "terrace", title: "Terrace"},
        {name: "cellar", title: "Cellar"},
        {name: "fitted_kitchen", title: "Fitted kitchen"},
        {name: "separate_toilets", title: "Separate toilets"},
        {name: "pool", title: "Swimming pool"},
        {name: "elevator", title: "Elevator"},
    ]

    const handleDropDown = (e, type) => {
        if(dropdowns.includes(type))
        {
            // e.stopPropagation();
            const reset = type === dropdown && e.target.dataset.name === type;
            setdropdown(reset ? '' : type);
            e.target.dataset.resetDropDown = reset;
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setData(name, val);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target.dataset.hasOwnProperty('resetDropDown'))
            {
                delete e.target.dataset.resetDropDown;
            }
            else
            {
                setdropdown('');
            }
        };
        document.addEventListener(`click`, handleClickOutside);
        return () => {
            document.removeEventListener(`click`, handleClickOutside);
          };
    }, []);

    return (
        <div className="flex gap-1">
            <ParametersChoiceMinMaxButton name={"budget"} handleDropDown={handleDropDown} handleChange={handleChange} title={"Budget"} dropdown={dropdown}/>
            <ParametersChoiceMinMaxButton name={"surface"} handleDropDown={handleDropDown} handleChange={handleChange} title={"Surface"} dropdown={dropdown}/>
            <ParametersChoiceMinMaxButton name={"terrain_surface"} handleDropDown={handleDropDown} handleChange={handleChange} title={"Terrain surface"} dropdown={dropdown}/>
            <ParametersChoiceMinMaxButton name={"bedrooms"} handleDropDown={handleDropDown} handleChange={handleChange} title={"Bedrooms"} dropdown={dropdown}/>
            <ParametersChoiceMinMaxButton name={"bathrooms"} handleDropDown={handleDropDown} handleChange={handleChange} title={"Bathrooms"} dropdown={dropdown}/>
            <ParametersChoiceCheckboxesButton name={"features"} handleDropDown={handleDropDown} handleChange={handleChange} title={"Features"} dropdown={dropdown} data={data} choices={featuresChoices}/>
        </div>
    );
}

export default ParametersChoice;