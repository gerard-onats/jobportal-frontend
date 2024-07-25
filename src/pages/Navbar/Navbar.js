import { useNavigate } from "react-router";
import { memo } from 'react';
import { Link } from "react-router-dom";

import {NAVBAR} from './constants/index.js';

import styles from './styles/Navbar.module.css';
import Notification from "../../svg/Notification";
import Message from "../../svg/Message";
import PROFILE_PICTURE from './../../images/user-logo.png'
import REACT_LOGO from './../../images/react-logo.png'
import Settings from "../../svg/Settings";
import Logout from "../../svg/Logout";

const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    console.log("Navbar rendered");
    return (
        <nav className={styles.navContainer}>
            <ul className={styles.list}>
                <li><img src={REACT_LOGO} className={styles.logo}/></li>
                <li className={styles.selected}><Link to='/'>{NAVBAR.BROWSE_JOBS}</Link></li>
                <li><Link to='/editor'>{NAVBAR.COMPANY_PROFILES}</Link></li>
                <li><Link to='/playground'>{NAVBAR.PLAYGROUND}</Link></li>
            </ul>
            <ul className={styles.list}>
                <li><Message /></li>
                <li><Notification /></li>
                <li className={styles.profile}>
                    <img src={PROFILE_PICTURE} className={styles.avatar}/>
                    <ul className={styles.profileMenu}>
                        <li><Settings/><span>{NAVBAR.PROFILE_SETTINGS}</span></li>
                        <li onClick={logout}><Logout /><span>{NAVBAR.LOGOUT}</span></li>
                    </ul>
                </li>
                
            </ul>
        </nav>
    );
}

export default memo(Navbar);