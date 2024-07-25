import { useEffect, useRef, useState } from "react";

import Settings from "../../svg/Settings";
import Logout from "../../svg/Logout";
import { DROPDOWN } from "./constants";

import styles from './styles/Dropdown.module.css';

import PROFILE_PICTURE from './../../images/user-logo.png'
import { useNavigate } from "react-router";

const Dropdown = () => {
    const dropdownRef = useRef();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    useEffect(() => {
        const handler = (event) => {
            const isInside = dropdownRef.current.contains(event.target);
            if(!isInside && visible) {
                setVisible(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    console.log('Re-rendered!');

    return (
        <div className={styles.profile} ref={dropdownRef}>
            <img src={PROFILE_PICTURE} className={styles.avatar} onClick={() => setVisible(!visible)}/>
            {visible &&
                <ul className={styles.profileMenu}>
                    <li><Settings/><span>{DROPDOWN.PROFILE_SETTINGS}</span></li>
                    <li onClick={logout}><Logout /><span>{DROPDOWN.LOGOUT}</span></li>
                </ul>}
        </div>
    );
}

export default Dropdown;