
const SearchButton = ({handleSubmit}) => {

    return (
        <div className="flex justify-end items-center mr-1">
            <button id="search-submit" type="button" onClick={(e) => handleSubmit(e)}>
                Search
            </button>
        </div>
    );
}

export default SearchButton;