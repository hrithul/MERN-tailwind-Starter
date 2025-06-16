import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import { clearErrors } from "../../features/errors/errorSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector(state => state.errors);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/dashboard");
    }
    return () => {
      dispatch(clearErrors());
    }
  }, [auth.isAuthenticated, navigate, dispatch]);

  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      email,
      password
    };
    dispatch(loginUser(userData));
  };

  return (
    <div className="container mx-auto mt-16">
      <div className="w-full max-w-md mx-auto">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800">
          <i className="material-icons mr-2">keyboard_backspace</i>
          Back to home
        </Link>
        <div className="mt-4">
          <h4 className="text-2xl font-bold"><b>Login</b> below</h4>
          <p className="text-gray-600">
            Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
          </p>
        </div>
        <form noValidate onSubmit={onSubmit} className="mt-8">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              id="email"
              type="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email || errors.emailnotfound ? 'border-red-500' : ''}`}
            />
            <p className="text-red-500 text-xs italic">{errors.email}{errors.emailnotfound}</p>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              id="password"
              type="password"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password || errors.passwordincorrect ? 'border-red-500' : ''}`}
            />
            <p className="text-red-500 text-xs italic">{errors.password}{errors.passwordincorrect}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;