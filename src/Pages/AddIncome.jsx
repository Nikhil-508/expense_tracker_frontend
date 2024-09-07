import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddIncome = () => {

    const [incomeData,setIncomeData] = useState({
        amount: '',
        description: '',
        category: '',
    })
    const navigate = useNavigate()
    const [error , setError] = useState(null)
    const handleChange = (e) => {
      e.preventDefault()
      setIncomeData({
        ...incomeData,
        [e.target.name]: e.target.value
      });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("income data",incomeData)
        try {
           
        } catch (error) {
            
        }

    }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Add Your Expense</h2>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
                    Amount
                </label>
                <input
                    type="amount"
                    name="amount"
                    id="amount"
                    value={incomeData?.amount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter the income amount"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Description">
                    Description
                </label>
                <input
                    type="description"
                    name="description"
                    id="description"
                    value={incomeData?.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter income Description"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Category">
                Category
                </label>
                <input
                    type="Category"
                    name="Category"
                    id="Category"
                    value={incomeData?.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="select income category"
                />
            </div>
           
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                onClick={handleSubmit}
            >
                Add
            </button>
        </form>
    </div>
</div>
  )
}

export default AddIncome
