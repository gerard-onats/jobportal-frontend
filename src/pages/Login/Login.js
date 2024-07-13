import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {authenticateApi} from '../../services/authenticationService'
import {LOGIN} from './constants/index.js'
import {ROUTES} from './../../routes/RouteConstants.js'

import './styles/Login.css'
import REACT_LOGO from './../../images/react-logo.png'
import {HTTP_STATUS_OK} from '../../constants';
import GmailColored from '../../svg/GmailColored';
import FacebookColored from '../../svg/FacebookColored';
import LinkedinColored from '../../svg/LinkedinColored';

const Login = () => {
    const [warningMessage, setWarningMessage] = useState(null);
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const onSubmit = async (formData) => {
        try {
            const response = await authenticateApi(formData.username, formData.password);
            if(response.httpStatus !== HTTP_STATUS_OK) {
                setWarningMessage(LOGIN.AUTHENTICATE_ERROR_MESSAGE);
            }
            else {
                localStorage.setItem('token', response.jwt);
                navigate(ROUTES.private.Home.path);
            }
        }
        catch(error) {
            setWarningMessage(`Authentication has encountered an error, please try again!`);
        }
    }

    return (
        <div className="component-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                <div className="mb-4">
                    <div className="flex justify-center mb-2" >
                        <img src={REACT_LOGO} alt="logo" className="logo-style w-18" />
                    </div>
                    <p className="form-title">{LOGIN.HEADER}</p>
                </div>
                <label className="label-style" id="username">{LOGIN.USERNAME}</label>
                <input 
                    className="input-style"
                    type="text"
                    name = "username"
                    placeholder="johndoe@mail.com"
                    {...register("username")}
                /> <br/>
                <label className="label-style" id="password">{LOGIN.PASSWORD}</label>
                <input 
                    className="input-style"
                    type="password"
                    name="password"
                    placeholder="password"
                    {...register("password")}
                /> <br/>
                <p className="warning-message">{warningMessage}</p>
                <div className="flex justify-between mb-3">
                    <label className="text-md text-gray-500" id="remember-password">
                        <input type="checkbox" name="remember-password" /> {LOGIN.REMEMBER_ME}
                    </label>
                    <p className="text-md text-[#F2AA02] underline">{LOGIN.FORGOT_PASSWORD}</p>
                </div>
                <div className="flex justify-center mb-3">
                    <button 
                        type="submit" 
                        className="button-style bg-[#10182F]"
                    >{LOGIN.BUTTON_LABEL}</button>
                </div>
                <div className="flex justify-center">
                    <p className="text-md text-gray-500">
                        {LOGIN.IS_MEMBER} <span className="text-[#F2AA02] underline">{LOGIN.SIGN_UP}</span>
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