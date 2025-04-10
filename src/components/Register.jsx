import React from 'react'


const Register = ({openLogin}) => {
  return (
    <div className="">
    <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">Sign Up</h2>
    
    <form className="space-y-5">
      <div>
        <label className="block mb-1 text-md font-medium text-gray-700 dark:text-gray-300 text-start pl-1">Name:</label>
        <input 
          type="text"
          className="w-full px-4 py-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your Name"
        />
      </div>
      <div>
        <label className="block mb-1 text-md font-medium text-gray-700 dark:text-gray-300 text-start pl-1">Email:</label>
        <input 
          type="email"
          className="w-full px-4 py-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
      
      <div>
        <label className="block mb-1 text-md font-medium text-gray-700 dark:text-gray-300 text-start pl-1">Password:</label>
        <input 
          type="password"
          className="w-full px-4 py-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition cursor-pointer"
      >
        Sign Up
      </button>
    </form>

    <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
      <span>Already have an account? </span>
      <button onClick={openLogin} className="text-blue-600 hover:underline dark:text-blue-400 cursor-pointer">Log In</button>
    </div>
  </div>
  )
}

export default Register