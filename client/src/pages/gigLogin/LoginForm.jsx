import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // For API requests

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '' // To store the selected role (Seeker or Provider)
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.role) {
      setError('Please select a role.');
      return;
    }

    try {
      // Determine the endpoint based on the selected role
      const endpoint = formData.role === 'seeker' ? '/api/seekerLogin' : '/api/providerLogin';

      // Make the POST request to the login API with the selected endpoint
      const response = await axios.post(endpoint, {
        email: formData.email,
        password: formData.password
      });

      // If login is successful
      if (response.status === 200) {
        const { token, userId } = response.data;
        // console.log(response.data); // Log the response


        // Save token and userId to localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);

        // Redirect to a protected route (e.g., dashboard)
        formData.role === 'seeker' ? navigate('/gigPool') : navigate('/gigPost')
        //navigate('/dashboard');
      }
    } catch (err) {
      // Handle errors and display appropriate message
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    }
  };

  return (
    <form className="flex flex-col mt-4 w-full text-sm leading-relaxed" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center w-full text-white">

        {/* Role Selection */}
        <div className="flex gap-1 items-center w-full bg-gray-800 rounded border border-solid border-slate-600 h-[56px]">
          <label htmlFor="role" className="sr-only">Role</label>
          <select
            id="role"
            className="flex-1 shrink self-stretch px-4 bg-transparent h-[56px] text-white"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select your role</option>
            <option value="seeker">Seeker</option>
            <option value="provider">Provider</option>
          </select>
        </div>

        {/* Email Input */}
        <div className="flex gap-1 items-center mt-2 w-full bg-gray-800 rounded border border-solid border-slate-600 h-[56px]">
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            className="flex-1 shrink self-stretch w-full px-4 bg-transparent h-[56px]"
            placeholder="your em@il"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex gap-1 items-center mt-2 w-full bg-gray-800 rounded border border-solid border-slate-600 h-[56px]">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            type="password"
            className="flex-1 shrink gap-2 px-4 self-stretch px-1 my-auto w-full min-w-[240px] bg-transparent h-[56px]"
            placeholder="P@ssword"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      {/* Display error message */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {/* Sign In link */}
      <Link to={'/signin'} className="self-center mt-2 text-zinc-100 hover:opacity-80">Need Sign In?</Link>

      <button type="submit" className="self-center mt-4 p-3.5 bg-green-600 rounded-lg text-base font-bold leading-relaxed text-center text-white whitespace-nowrap w-[130px] hover:opacity-80">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
