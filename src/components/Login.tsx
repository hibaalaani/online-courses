import axios from "axios";
import React, {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import { useUser } from "../context/UserContext";
const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useUser(); // Access the setUser method from UserContext

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      // do't forget the trailing slash after login
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL_USER_BASE_URL}/login/`,
        {username, password}
      );
      console.log(response.data)
      const {username:name ,child_name, email , joined , access}  = response.data
      localStorage.setItem("token", access);
   
      setUser({username:name , email:email , joined, child_name:child_name})


      setError(null);

      // setSuccessMessage("Registration successful! Redirecting to login...");
      setUsername("");
      setPassword("");
      setTimeout(() => {
        navigate("/dashboard", { state: { successMessage: "Login successful" } });
      }, 2000);
    } catch (error) {
      setError("Invalid credentials , please try again");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto mt-10 p-10 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="relative mb-4">
            <input
              // type="password"
              placeholder="Password"
              className="w-full p-3 border rounded"
              value={password}
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-xl"
            >
              {showPassword ? (
                <FaEyeSlash size={20} className="text-gray-500" />
              ) : (
                <FaEye size={20} className="text-gray-500" />
              )}
            </span>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-indigo-500 text-white py-2 rounded ahover:bg-indigo-600 transition"
          >
            Login
          </button>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </div>
      </main>
    </div>
  );
};

export default Login;
