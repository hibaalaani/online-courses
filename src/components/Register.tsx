import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(
    null
  );

  const navigate = useNavigate();
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to check username availability
  const checkUsernameAvailability = async (username: string) => {
    if (username.trim() === "") return; // Avoid sending a request for empty input
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL_USER_BASE_URL}/check-username/`,
        {params: {username}}
      );

      setUsernameAvailable(response.data.available);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle user registration
  const handleRegister = async () => {
    // Frontend Validation
    if (!username || username.trim() === "") {
      setError("Username is required");
      return;
    }
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email format. Please provide a valid email.");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      setError("Password must contain at least one letter and one number.");
      return;
    }

    try {
     await axios.post(
        `${import.meta.env.VITE_API_URL_USER_BASE_URL}/register/`,
        {
          username,
          email,
          password,
        }
      );
      setError(null);
      setSuccessMessage("Registration successful! Redirecting to login...");

      setUsername("");
      setEmail("");
      setPassword("");
      setUsernameAvailable(null);

      // Redirect to the login page after a delay

      setTimeout(() => navigate("/login"), 2000);
    }  catch (err) {
      if (axios.isAxiosError(err)) {
        const backendErrors = err.response?.data;
        // Combine all error messages into one string
        const firstError = backendErrors?.email?.[0] || backendErrors?.username?.[0] || backendErrors?.password?.[0] || "Registration failed.";
        setError(firstError);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  }
  // Handle username input changes with validation
  const handleusernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    if (value) {
      checkUsernameAvailability(value);
    } else {
      setUsernameAvailable(null);
    }
  };
  // Optional: Debounce implementation for `checkUsernameAvailability`
  /*
  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedCheckUsernameAvailability = debounce(checkUsernameAvailability, 500);
  */
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 border rounded"
            value={username}
            onBlur={handleusernameChange} // Validate on blur
            onChange={(e) => setUsername(e.target.value)} // Real-time update
          />
          {loading ? (
            <p>Checking availability...</p>
          ) : (
            usernameAvailable === false && <p>Username is already taken.</p>
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleRegister}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition"
          >
            Register
          </button>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          {successMessage && (
            <p className="mt-4 text-green-500 text-center">{successMessage}</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Register;
