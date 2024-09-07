import { useEffect, useState } from "react";
import { login } from "../Utils/userapi";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const handleChange = (e) => {
        setUserData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const loginResult = await login(userData)
            if(loginResult?.data?.success) {
                localStorage.setItem('userJWt' , loginResult?.data?.jwtToken)
                navigate('/')
            }
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('userJWt')) {
            navigate('/')
        }
    } , [navigate])

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={userData?.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your E-mail"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={userData?.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    {/* {error && <p className="text-red-900 mb-2">{error}</p>} */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
