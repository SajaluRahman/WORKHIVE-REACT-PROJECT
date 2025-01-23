import React from 'react'

function Login() {
  return (
    <div><div className="bg-gray-100 p-6 rounded shadow max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <form>
      <div className="mb-4">
        <label className="block mb-2">Email:</label>
        <input type="email" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password:</label>
        <input type="password" className="w-full p-2 border rounded" />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </form>
  </div></div>
  )
}

export default Login