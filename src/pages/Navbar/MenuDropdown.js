import Settings from "../../svg/Settings";
import Logout from "../../svg/Logout";
import { DROPDOWN } from "./constants";

import styles from './styles/Dropdown.module.css';

import PROFILE_PICTURE from './../../images/user-logo.png'
import { useNavigate } from "react-router";
import useDropdown from "../../hooks/useDropdown";

const Dropdown = () => {
    const navigate = useNavigate();
    const {dropdownRef, setVisible, visible} = useDropdown();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    console.log('Re-rendered!');

    return (
        <div className={styles.profile} ref={dropdownRef}>
            <img src={PROFILE_PICTURE} className={styles.avatar} onClick={() => setVisible(!visible)}/>
            {visible &&
                <ul className={styles.profileMenu}>
                    <li><Settings/><span>{DROPDOWN.PROFILE_SETTINGS}</span></li>
                    <li onClick={() => logout}><Logout /><span>{DROPDOWN.LOGOUT}</span></li>
                </ul>}
        </div>
    );
}

export default Dropdown;