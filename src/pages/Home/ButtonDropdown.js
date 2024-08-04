import Button from '../../components/Button';
import ChevronDown from '../../svg/ChevronDown';
import { useState } from 'react';

import styles from './styles/ButtonDropdown.module.css';
import useDropdown from '../../hooks/useDropdown';

const ButtonDropdown = ({svgComponent, value, options}) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const {visible, setVisible, dropdownRef} = useDropdown();

    const hasSelected = selectedIndex >= 0;
    const buttonHeader = hasSelected ? options[selectedIndex] : value;
    const buttonStyle = hasSelected ? styles.buttonSelected : null;

    const handleOptionSelect = (index) => {
        setVisible(!visible);
        setSelectedIndex(index !== selectedIndex ? index : -1);
    }

    const list = options.map((element, index) => 
        <li 
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={selectedIndex === index ? styles.selectedOption : null}>
            {element}
        </li>
    );

    console.log(`Re-rendered to ${visible} and text ${buttonHeader}`);

    return (
        <div className={styles.container} ref={dropdownRef}>
            <Button
                svgComponent={svgComponent}
                textComponent={<>{buttonHeader} <ChevronDown /></> }
                onClick={() => setVisible(!visible)}
                customStyle={buttonStyle} />
            {visible &&
            <div className={styles.dropdown}>
                <ul>{list}</ul>
            </div>}
        </div>
    );
}

export default ButtonDropdown;