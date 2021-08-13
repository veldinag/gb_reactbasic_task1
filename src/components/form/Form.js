const Form = ({name, handleClick}) => {
     
    return (
        <div>
            <input type='text' value={name} onChange={handleChange} />{" "}
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default Form;