
const PropertyChoice = ({setData}) => {

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setData(name, val);
    };

    return (
        <div className="p-3 flex flex-row justify-between">
            <select id="search-select-type" name="property_type" onChange={handleChange}>
                <option value="1">Apartment</option>
                <option value="2">House</option>
                <option value="3">Garage/Parking</option>
                <option value="4">Building</option>
                <option value="5">Storage</option>
                <option value="6">Land</option>
                <option value="7">Office</option>
                <option value="8">Commercial</option>
            </select>
        </div>
    );
}

export default PropertyChoice;