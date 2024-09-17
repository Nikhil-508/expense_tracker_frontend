import React, { useEffect, useState } from 'react'
import Graph from './Graph'
import Form from './Form'
import { useNavigate } from 'react-router-dom'
import { getGraphData } from '../Utils/userapi'


const Home = () => {

  const [graphData , setGraphData] = useState([])
  const navigate = useNavigate()
  
  const getGraphData = async () => {
    try {
      const data = await getGraphData()
      console.log(data.incomeNumber , data.expenseNumber)
      setGraphData()
    } catch (error) {
      console.log(error)
    }
  }
  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('userJWt');
    navigate('/login')
}
  useEffect(() => {
    if(!localStorage.getItem('userJWt')) {
      navigate("/login")
    }
    getGraphData()
  } , [navigate])

  return (
    <div className='App'>
    <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800 relative'>
        <h1 className='text-4xl py-8 mt-8 mb-10 bg-slate-800 text-white rounded'>Expense Tracker</h1>
        <button onClick={handleLogout} className='absolute top-[9%] right-[5rem] transform -translate-y-1/2 py-2 px-4 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600'>
            Logout
        </button>
        <div className='grid md:grid-cols-2 gap-4'>
            <Graph />
            <Form />
        </div>
    </div>
</div>


  )
}

export default Home
