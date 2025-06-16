import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
import { clearErrors } from "../../features/errors/errorSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
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
    const newUser = {
      name,
      email,
      password,
      password2
    };
    dispatch(registerUser(newUser))
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch(() => {});
  };

  return (
    <div className="container mx-auto mt-16">
      <div className="w-full max-w-md mx-auto">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800">
          <i className="material-icons mr-2">keyboard_backspace</i>
          Back to home
        </Link>
        <div className="mt-4">
          <h4 className="text-2xl font-bold"><b>Register</b> below</h4>
          <p className="text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
          </p>
        </div>
        <form noValidate onSubmit={onSubmit} className="mt-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              onChange={e => setName(e.target.value)}
              value={name}
              id="name"
              type="text"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
            />
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              id="email"
              type="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
            />
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              id="password"
              type="password"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
            />
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          </div>
          <div className="mb-6">
            <label htmlFor="password2" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input
              onChange={e => setPassword2(e.target.value)}
              value={password2}
              id="password2"
              type="password"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password2 ? 'border-red-500' : ''}`}
            />
            <p className="text-red-500 text-xs italic">{errors.password2}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;