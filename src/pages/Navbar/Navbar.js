import { useNavigate } from "react-router";
import { memo } from 'react';
import { Link } from "react-router-dom";

import './styles/Navbar.css';
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
        <nav className="nav-container-style">
            <ul className="list-style">
                <li><img src={ REACT_LOGO } className="logo-style"/></li>
                <li className="navbar-text selected-tab">
                    <Link to='/'>Browse Jobs</Link>
                </li>
                <li className="navbar-text">
                    <Link to='/editor'>
                        Company Profiles
                    </Link>
                </li>
            </ul>
            <ul className="list-style">
                <li><Message /></li>
                <li><Notification /></li>
                <li className="profile">
                    <img src={ PROFILE_PICTURE } className="profile-picture-style"/>
                    <ul className="profile-menu">
                        <li><Settings/><span>Profile Settings</span></li>
                        <li onClick={logout}><Logout /><span>Logout</span></li>
                    </ul>
                </li>
                
            </ul>
        </nav>
    );
}

export default memo(Navbar);