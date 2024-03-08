const AUTHENTICATION_SERVICE_API = process.env.REACT_APP_AUTHENTICATION_SERVICE_API;

export const authenticateApi = async (username, password) => {
    const response = await fetch(AUTHENTICATION_SERVICE_API + 'auth/login',
        {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        });
    const result = await response.json();
    return result;
}