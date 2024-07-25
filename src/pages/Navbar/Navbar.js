import { useNavigate } from "react-router";
import { memo } from 'react';
import { Link } from "react-router-dom";

import {NAVBAR} from './constants/index.js';

import styles from './styles/Navbar.module.css';
import Notification from "../../svg/Notification";
import Message from "../../svg/Message";
import REACT_LOGO from './../../images/react-logo.png'
import MenuDropdown from "./MenuDropdown.js";

const Navbar = () => {
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
                <li><MenuDropdown /></li>
            </ul>
        </nav>
    );
}

export default memo(Navbar);