import './styles/Button.css'

const Button = ({onClick, svgComponent, textComponent, customStyle}) => {
    return (
        <button
            onClick={ onClick } 
            className="Button-component-style"
            style={customStyle}>
            { svgComponent}
            { textComponent }
        </button>
    );
}

export default Button;