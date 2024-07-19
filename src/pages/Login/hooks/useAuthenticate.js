import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {authenticateApi} from '../../../services/authenticationService.js'

import {LOGIN} from '../constants/index.js';
import ROUTES from '../../../routes/RouteConstants.js';
import {HTTP_STATUS_OK} from '../../../constants/index.js'

export default function useAuthenticate() {
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

    return {warningMessage, register, handleSubmit, onSubmit};
}