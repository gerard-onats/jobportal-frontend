import './styles/Input.css';

const Input = ({type, onChange, customStyle, placeholder, name, extra}) => {
    return (
        <input 
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            {...extra}
            className="Input-component-style"
            style={customStyle} />
    );
};

export default Input;