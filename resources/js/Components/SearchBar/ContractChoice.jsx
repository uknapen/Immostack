import { useState } from "react";
import ContractChoiceButton from "./ContractChoiceButton";

const ContractChoice = ({setData}) => {

    const [contractType, setContractType] = useState("2");

    const handleClickOnButton = (type) => {
        setContractType(type);
        setData('contractType', type);
    };

    return (
        <div className="flex flex-row gap-1">
            <ContractChoiceButton handleClick={handleClickOnButton} type={"2"} selectedType={contractType} text={"Renting"}/>
            <ContractChoiceButton handleClick={handleClickOnButton} type={"1"} selectedType={contractType} text={"Buying"}/>
        </div>
    );
}

export default ContractChoice;