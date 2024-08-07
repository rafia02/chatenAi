import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { context } from '../../Context/AuthContex'
import toast from 'react-hot-toast'

const Login = () => {
    const {login } = useContext(context)
    const [err, setErr] = useState("")
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleLogin = (data)=>{
      login(data.email, data.password)
      .then(res => {
        console.log(res.user)
        setErr("")
        toast.success('Sucessfuly log in')
        navigate("/workspace")
      })
      .catch(e =>{
        setErr(e.code.split('auth/'))
        console.error(e.message)})
    }

  return (
    <div className=" mx-5 md:mx-0 my-10 md:my-14 flex justify-center ">
            <div className=" bg-white  p-8 border rounded-xl shadow-md max-w-lg w-full">
                <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>
                <form className='px-5' onSubmit={handleSubmit(handleLogin)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="text"
                         {...register("email",
                          { required: "Email Address is required" })}
                          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" />
                    {errors.email && <p className='text-pink-600' role="alert">{errors.email?.message}</p>}
                    </div>


                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                         <input type="password" 
                         {...register("password")} 
                         className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" />
                    {err && <p className='text-pink-600' role="alert">{err}</p>}
                    </div>


                    <input type="submit" value="Log in" className='mt-4 text-white font-bold px-4 py-2 text-center w-full hover:cursor-pointer mb-3 bg-[#cf457c] rounded-full  hover:bg-[#f76557] duration-500'/>

                </form>
                <div className='text-center mx-5 px-5 mt-5 mb-3 w-auto rounded-full hover:text-black border-2 border-[#ff7265] border-opacity-50 hover:cursor-pointer  hover:bg-[#ff726524] duration-500 '>
                    <button type="submit" className="text-sm md:text-md font-bold px-4 py-2 ">Continue with google</button>
                </div>
                <p className='mx-5'>Don't have an account? Please <Link to="/signup" className='text-[#fe5b4c] font-bold'>Sing up</Link></p>
            </div>
        </div>
  )
}

export default Login