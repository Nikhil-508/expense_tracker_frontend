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
  useEffect(() => {
    if(!localStorage.getItem('userJWt')) {
      navigate("/login")
    }
    getGraphData()
  } , [navigate])
  return (
    <div className='App'>
        <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800'>
            <h1 className='text-4xl py-8 mt-8 mb-10 bg-slate-800 text-white rounded'>Expense Tracker</h1>
            {/* grid columns */}
            <div className='grid md:grid-cols-2 gap-4'>
                {/* chart */}
                <Graph/>
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default Home
