import { useEffect, useState} from "react"
import { register } from "../Utils/userapi.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
      });
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState(null)
      const handleChange = (e) => {
        setUserData(prevState => ({
          ...prevState,        
          [e.target.name]: e.target.value
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("userdata" , userData)
        try {
            const registerResult = await register(userData)
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
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={userData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    value={userData.email}
                    id="email"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
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
                    value={userData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                onClick={handleSubmit}
            >
                Register
            </button>
        </form>
    </div>
</div>
  )
}

export default Register
