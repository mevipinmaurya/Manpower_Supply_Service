import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from "../components/Input"

export default function Signup() {
  // const navigate = useNavigate()
  const [error, setError] = useState("")
  const { register, handleSubmit } = useForm()

  const create = async (data) => { // input data available here in "data"
    setError("")
    try {
      console.log(data)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#8EC5FF]">
      <div className={`mx - auto w-full max-w-lg bg-white rounded-2xl p-10 shadow-4xl`}>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-5'>
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
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
              className="w-full cursor-pointer bg-orange-500 text-white py-2 rounded hover:bg-orange-500 transition"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div >
  )
}