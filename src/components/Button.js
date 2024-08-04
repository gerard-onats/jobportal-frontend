import styles from './styles/Button.module.css';

const Button = ({onClick, svgComponent, textComponent, customStyle}) => {
    return (
        <button
            onClick={onClick} 
            className={styles.default + ' ' + customStyle}>
            {svgComponent}
            {textComponent}
        </button>
    );
}

export default Button;