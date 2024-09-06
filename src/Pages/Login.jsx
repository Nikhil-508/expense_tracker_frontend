import React from 'react'

const Login = () => {

  return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              <form>
                  <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                          Name
                      </label>
                      <input
                          type="text"
                          name="name"
                          id="name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your name"
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
                          // value={}
                          // onChange={}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your password"
                      />
                  </div>
                  <button
                      type="submit"
                      className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                      Login
                  </button>
              </form>
          </div>
      </div>
  )
}

export default Login
