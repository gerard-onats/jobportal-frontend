import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {authenticateApi} from '../../services/authenticationService'
import {LOGIN} from './constants/index.js'
import {ROUTES} from './../../routes/RouteConstants.js'

import styles from './styles/Login.module.css'

import REACT_LOGO from './../../images/react-logo.png'
import {HTTP_STATUS_OK} from '../../constants';
import GmailColored from '../../svg/GmailColored';
import FacebookColored from '../../svg/FacebookColored';
import LinkedinColored from '../../svg/LinkedinColored';
import Input from '../../components/Input.js';

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
        <div className={styles.componentContainer}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
                <div className={styles.containerFlexCenter} >
                    <img src={REACT_LOGO} alt="logo" className={styles.logoStyle + ' w-18'} />
                </div>
                <p id={styles.formTitle}>{LOGIN.HEADER}</p>
                <label className={styles.labelStyle} id="username">{LOGIN.USERNAME}</label>
                <Input 
                    type="text"
                    name="username"
                    placeholder="johndoe@mail.com"
                    registerProps={register("username")}
                /> <br/>
                <label className={styles.labelStyle} id="password">{LOGIN.PASSWORD}</label>
                <Input 
                    type="password"
                    name="password"
                    placeholder="password"
                    registerProps={register("password")}
                /> <br/>
                <p id={styles.warningMessage}>{warningMessage}</p>
                <div className={styles.containerFlexBetween}>
                    <label className="text-md text-gray-500" id="remember-password">
                        <input type="checkbox" name="remember-password" /> {LOGIN.REMEMBER_ME}
                    </label>
                    <p className="text-md text-[#F2AA02] underline">{LOGIN.FORGOT_PASSWORD}</p>
                </div>
                <div className={styles.containerFlexCenter}>
                    <button 
                        type="submit" 
                        className={styles.buttonStyle}
                    >{LOGIN.BUTTON_LABEL}</button>
                </div>
                <div className={styles.containerFlexCenter}>
                    <p className="text-md text-gray-500">
                        {LOGIN.IS_MEMBER} <span id={styles.signUp}>{LOGIN.SIGN_UP}</span>
                    </p>
                </div>
                <div className={styles.containerFlexCenter}>
                    <GmailColored />
                    <FacebookColored />
                    <LinkedinColored />
                </div>
            </form>
        </div>
    );
}

export default Login;