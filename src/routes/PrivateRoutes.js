import { Outlet, Navigate } from 'react-router-dom'
import useAuth from './../utils/useAuth'
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer/Footer';
import RouteConstants from './RouteConstants';

const PrivateRoutes = () => {
    const token = useAuth();
    return token ? 
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </> : 
        <Navigate to={ RouteConstants.public.Login.path } />
}

export default PrivateRoutes;