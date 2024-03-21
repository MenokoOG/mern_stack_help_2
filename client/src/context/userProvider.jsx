import { createContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export const UserContext = createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

function UserProvider(props) {
    const navigate = useNavigate(); 

    const userFromStorage = localStorage.getItem('user');
    const user = (userFromStorage && userFromStorage !== "undefined") ? JSON.parse(userFromStorage) : null;

    const initState = {
        user: user,
        token: localStorage.getItem('token') || "",
        
        errMsg: ''
    };

    const [userState, setUserState] = useState(initState);
    

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user, token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    async function login(credentials) {
        try {
            const res = await axios.post("/auth/login", credentials);
            const { user, token } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            
            setUserState(prevUserState => ({
                ...prevUserState,
                user, token
            }));
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: ""
            
        })
        navigate('/'); // Navigate to '/' after logout
    }

    function handleAuthErr(errMsg) {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function resetAuthErr() {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        }));
    }

    
    

    return (
        <UserContext.Provider
            value={{
                ...userState,

                signup,
                login,
                logout,
                resetAuthErr
                
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider