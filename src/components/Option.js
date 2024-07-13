import './styles/Option.css';

const Option = ({options}) => {
    const optionsList = options.map(
        (element) => <option>{element}</option>
    )
    return (
        <>
            <select className="Option-component-style">
                {optionsList}
            </select>
        </>
    )
}

export default Option;