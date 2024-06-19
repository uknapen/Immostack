import DeleteTagButton from "./DeleteTagButton";

const CityTag = ({name, data, setData}) => {

    return (
        <li>{name}<DeleteTagButton name={name} data={data} setData={setData}/></li>
    );
}

export default CityTag;