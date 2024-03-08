import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { authenticateApi } from '../../services/authenticationService'


import './index.css'
import REACT_LOGO from './../../images/react-logo.png'
import { HTTP_STATUS_OK } from '../../constants';
import GmailColored from '../../svg/GmailColored';
import FacebookColored from '../../svg/FacebookColored';
import LinkedinColored from '../../svg/LinkedinColored';

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [wrongPasswordMessage, setWrongPasswordMessage] = useState(null);
    const navigate = useNavigate();

    const authenticatePassword = async () => {
        const response = await authenticateApi(username, password);
        if(response.httpStatus !== HTTP_STATUS_OK) {
            setWrongPasswordMessage("Wrong password, idiot!")
        }
        else {
            localStorage.setItem('token', response.jwt);
            navigate('/');
        }
    }

    return (
        <div className="component-container">
            <form className="form-container">
                <div className="mb-4">
                    <div className="flex justify-center mb-2" >
                        <img src={REACT_LOGO} alt="logo" className="logo-style w-18" />
                    </div>
                    <p className="form-title">FIND OPPORTUNITIES TO FURTHER YOUR CAREER</p>
                </div>
                <label className="label-style" id="username">Username/Email:</label>
                <input 
                    className="input-style"
                    type="text"
                    name = "username"
                    placeholder="johndoe@gmail.com"
                    onChange={e=>setUsername(e.target.value)}
                /> <br/>
                <label className="label-style" id="password">Password:</label>
                <input 
                    className="input-style"
                    type="password"
                    name="passowrd"
                    placeholder="password"
                    onChange={e=>setPassword(e.target.value)}
                /> <br/>
                <p>{ wrongPasswordMessage }</p>
                <div className="flex justify-between mb-3">
                    <label className="text-md text-gray-500" id="remember-password">
                        <input type="checkbox" name="remember-password" /> Remember me?
                    </label>
                    <p className="text-md text-[#F2AA02] underline">Forgot password?</p>
                </div>
                <div className="flex justify-center mb-3">
                    <button 
                        type="button" 
                        className="button-style bg-[#10182F]"
                        onClick={authenticatePassword}
                    >Login</button>
                </div>
                <div className="flex justify-center">
                    <p className="text-md text-gray-500">
                        Not a member yet? <span className="text-[#F2AA02] underline">Sign-up</span>
                    </p>
                </div>
                <div className="flex justify-center mt-4">
                    <GmailColored />
                    <FacebookColored />
                    <LinkedinColored />
                </div>
            </form>
        </div>
    );
}

export default Login;