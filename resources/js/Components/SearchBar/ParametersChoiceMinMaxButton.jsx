const ParametersChoiceMinMaxButton = ({
    name,
    handleDropDown,
    handleChange,
    title,
    dropdown,
}) => {
    return (
        <div
            className="flex flex-col search-search-choice rounded-b-lg "
            data-name={name}
            onClick={(e) => handleDropDown(e, name)}
        >
            <p className="px-5 py-2" data-name={name}>
                {title}
            </p>
            <div
                className={`dropdown-container self-start justify-self-start ${
                    dropdown === name ? "flex" : "hidden"
                }`}
            >
                <div className="dropdown-content rounded-lg ">
                    <input
                        name={`min_${name}`}
                        type="numeric"
                        placeholder={`Min ${title.toLowerCase()}`}
                        onChange={handleChange}
                        className="rounded-lg"
                    />
                    <input
                        name={`max_${name}`}
                        type="numeric"
                        placeholder={`Max ${title.toLowerCase()}`}
                        onChange={handleChange}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ParametersChoiceMinMaxButton;
