import './styles/Input.css';

const Input = ({type, onChange, customStyle, placeholder}) => {
    return (
        <input 
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className="Input-component-style"
            style={customStyle} />
    );
};

export default Input;