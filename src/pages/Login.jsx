import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Input from '../components/Input'

function Login() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState(null)

  const login = async (data) => {
    setError("")
    try {
      console.log(data)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div
      className='flex items-center justify-center h-screen '
      style={{ backgroundColor: '#CAECFF' }}>
      <div className={`mx - auto w-full max-w-lg bg-white rounded-2xl p-10 shadow-lg`}>

        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {/* {display error} */}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className='space-y-5'>
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#176ABC] text-white py-2 rounded hover:bg-[#1761bc] transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default Login