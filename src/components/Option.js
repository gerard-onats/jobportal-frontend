import styles from './styles/Option.module.css';

const Option = ({options}) => {
    const optionsList = options.map(
        (element) => <option>{element}</option>
    )
    return (
        <>
            <select className={styles.default}>
                {optionsList}
            </select>
        </>
    )
}

export default Option;