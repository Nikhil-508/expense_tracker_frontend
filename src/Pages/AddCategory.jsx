import { useState } from "react";
import { addCategory } from "../Utils/userapi";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {

    const [catData, setCatData] = useState({
        name: '',
        isIncome: '',
        budgetLimit: '',
        description: ''
      });
      const navigate = useNavigate()
      const [error , setError] = useState(null)
      const handleChange = (e) => {
        e.preventDefault()
        setCatData({
          ...catData,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("category data",catData)
        try {
          const resultCatData = await addCategory(catData)
          if(resultCatData){
            alert('Category added successfully!');
            navigate('/');
          }
          
        } catch (error) {
          console.log(error)
          setError(error)
        }
      };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Add Your Categories</h2>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    type="name"
                    name="name"
                    id="name"
                    value={catData?.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your E-mail"
                />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="isIncome">
              Is Income ?
            </label>
            <select
              name="isIncome"
              id="isIncome"
              value={catData.isIncome}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select option</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="budgetLimit">
                Budget Limit
                </label>
                <input
                    type="budgetLimit"
                    name="budgetLimit"
                    id="budgetLimit"
                    value={catData?.budgetLimit}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your Budget limit here"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                Description
                </label>
                <input
                    type="description"
                    name="description"
                    id="description"
                    value={catData?.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Description"
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

export default AddCategory
