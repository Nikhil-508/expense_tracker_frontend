import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate()
  return (
      <div className="form max-w-sm mx-auto w-96 py-6">
          <h1 className='font-bold pb-4 text-xl'>Select your Option</h1>
          <div className="submit-btn">
              <button onClick={() => navigate("/add-income")} className='border py-3 my-2 text-white bg-indigo-500 w-full hover:bg-indigo-600'>Add Income</button>
          </div>
          <div className="submit-btn">
              <button onClick={() => navigate("/add-expense")} className='border py-3 my-2 text-white bg-indigo-500 w-full  hover:bg-indigo-600'>Add Expense</button>
          </div>
          <div className="submit-btn">
              <button onClick={() => navigate("/add-category")} className='border py-3 my-2 text-white bg-indigo-500 w-full  hover:bg-indigo-600'>Add Category</button>
          </div>
      </div>     

  )
}

export default Form
