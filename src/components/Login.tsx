import axios from 'axios'
import React, {useState} from 'react'

const Login:React.FC = () => {

    const [username ,setUsername] = useState('')
    const [password , setPassword ] = useState('')
    const [error , setError] = useState<string|null>(null)



    const handleLogin =async ()=>{

try {
    
    const response =  await axios.post(`${import.meta.env.VITE_API_URL_USER_BASE_URL}/login/`,{username , password})


    localStorage.setItem('token',response.data.token)
    setError(null)

    alert('Login successful! ')

} catch (error) {
    setError('Invalid credentials , please try again')
}


    }


return (

    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
    <input
      type="text"
      placeholder="Username"
      className="w-full p-3 mb-4 border rounded"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      className="w-full p-3 mb-4 border rounded"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button
      onClick={handleLogin}
      className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
    >
      Login
    </button>
    {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
  </div>
)


}

export default Login