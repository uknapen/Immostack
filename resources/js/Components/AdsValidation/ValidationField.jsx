const ValidationField = ({ name, onChange, data }) => {
    return (
        <div>
            <label htmlFor={name}>Reject:</label>
            <input
                type="checkbox"
                name={name}
                onChange={onChange}
                value={data[name]}
                className="validate-reject"
            ></input>
        </div>
    );
};

export default ValidationField;
