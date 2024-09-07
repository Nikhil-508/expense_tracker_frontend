import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {userAuth} from '../Utils/userapi'


const ProtectedRoutes = ({ route }) => {
    
    const [auth, setAuth] = useState(null)
    const navigate = useNavigate()
    // useEffect(() => {
    //     const checkAuth = async () => {
    //         try {
    //             const response = await userAuth();
    //             if (response.data.isUser) {
    //                 setAuth(true);
    //             } else {
    //                 setAuth(false);
    //                 navigate(route); 
    //             }
    //         } catch (err) {
    //             setAuth(false);
    //             navigate(route);
    //         }
    //     };

    //     checkAuth();
    // }, [navigate, route]);
    useEffect(() => {
            userAuth()
                .then((response) => {
                    if (response.data.isUser) {
                        setAuth(response.data.isUser)
                    }
                })
                .catch((err) => {
                    setAuth(null)
                    localStorage.removeItem("userJwt")
                    navigate('/login')
                })
    }, [])

    if (auth === null) return
    return auth ? <Outlet /> : <Navigate to={route} />
}

export default ProtectedRoutes