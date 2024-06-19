
const DeleteTagButton = ({name, data, setData}) => {

    const handleDelete = () => {
        setData('cities', data['cities'].filter((city) => {
            return city != name;
        }))
    }

    return (
        <img className="w-5" src="./svg/close.svg" onClick={handleDelete}></img>
    );
}

export default DeleteTagButton;