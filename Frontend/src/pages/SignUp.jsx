import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from "../components/Input";
import axios from 'axios';
import { USER_API_ENDPOINT } from '../utils/Constants';
import toast from 'react-hot-toast';

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Address fields
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, {
        name,
        email,
        password,
        address: {
          street,
          city,
          state: stateName,
          zip,
          country
        }
      }, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      });

      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#8EC5FF] px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl p-10 shadow-2xl my-10">
        <h2 className="text-center text-2xl font-bold">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-[#6E42E5] hover:underline"
          >
            Sign In
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <Input
            label="Full Name:"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email:"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password:"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Address Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Street:"
              placeholder="123 Main St"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <Input
              label="City:"
              placeholder="City name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              label="State:"
              placeholder="State name"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
            />
            <Input
              label="ZIP Code:"
              placeholder="e.g., 110001"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <Input
              label="Country:"
              placeholder="e.g., India"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
