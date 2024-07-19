import {LOGIN} from './constants/index.js'

import styles from './styles/Login.module.css'

import REACT_LOGO from './../../images/react-logo.png'
import GmailColored from '../../svg/GmailColored';
import FacebookColored from '../../svg/FacebookColored';
import LinkedinColored from '../../svg/LinkedinColored';
import Input from '../../components/Input.js';
import useAuthenticate from './hooks/useAuthenticate.js';

const Login = () => {
    const {warningMessage, register, handleSubmit, onSubmit} = useAuthenticate();

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