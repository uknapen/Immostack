
const ParametersChoiceCheckboxesButton = ({name, handleDropDown, handleChange, title, dropdown, data, choices}) => {

    return (
        <div
            className="flex flex-col search-search-choice rounded-b-lg"
            data-name={name}
            onClick={(e) => handleDropDown(e, name)}
        >
            <p className="px-5 py-2" data-name={name}>{title}</p>
            <div className={`dropdown-container self-start justify-self-start ${dropdown === name ? 'flex' : 'hidden'}`} >
                <div className="dropdown-content rounded-lg">
                    {choices.map((choice) => (
                        <p key={choice.name} className="flex items-center gap-2 text-nowrap"><input name={choice.name} type="checkbox" value={data[choice.name]} onChange={handleChange} /> {choice.title}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ParametersChoiceCheckboxesButton;