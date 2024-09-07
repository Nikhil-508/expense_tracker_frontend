import React from 'react'

const AddExpense = () => {
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
                    // value={userData?.name}
                    // onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter the expense amount"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Description">
                    Description
                </label>
                <input
                    type="Description"
                    name="Description"
                    id="Description"
                    // value={userData?.Description}
                    // onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter expense Description"
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
                    // value={userData?.Description}
                    // onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    placeholder="select expense category"
                />
            </div>
           
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                // onClick={handleSubmit}
            >
                Add
            </button>
        </form>
    </div>
</div>
  )
}

export default AddExpense
