import styles from './styles/Input.module.css';

const Input = ({name, type, onChange, className, placeholder, customStyle, registerProps}) => {
    return (
        <input 
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            {...registerProps} /* used for react-hook-forms */
            className={styles.default + ' ' + className}
            style={customStyle} />
    );
};

export default Input;