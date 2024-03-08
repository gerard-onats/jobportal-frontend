import { Outlet, Navigate } from 'react-router-dom'
import useAuth from './../utils/useAuth'
import Footer from '../pages/Footer/Footer'

const PublicRoutes = () => {
    const token = useAuth()
    return token ? <Navigate to='/' /> : 
    <>
        <Outlet />
        <Footer />
    </>
}

export default PublicRoutes;