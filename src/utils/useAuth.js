const useAuth = () => {
    /*TODO use a more sophisticated approach (httpOnly) and JSON expiration validator*/
    const user = localStorage.getItem('token');
    if(user) return true;
    return false;
}

export default useAuth;