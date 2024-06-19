
const ContractChoiceButton = ({handleClick, type, selectedType, text}) => {

    const activeButton = { backgroundColor: "#3f72af" };
    const inactiveButton = { backgroundColor: "#112d4e" };
    const activeTriangleStyle = { borderBottomColor: "#f9f7f7" };
    const inactiveTriangleStyle = { borderBottomColor: " #112d4e" };

    return (
        <div className="relative">
                <button
                    className="button-search p-3 rounded-t-lg flex justify-center text-base"
                    type="button"
                    onClick={() => handleClick(type)}
                    style={selectedType === type ? activeButton : inactiveButton}
                >
                    {text}
                    <div
                        className="button-search-triangle"
                        style={selectedType === type ? activeTriangleStyle : inactiveTriangleStyle}
                    ></div>
                </button>
            </div>
    );
}

export default ContractChoiceButton;