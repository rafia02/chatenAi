import React, { useContext } from 'react'
import { context } from '../../Context/AuthContex';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {

    const { signup, profileupdate } = useContext(context)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const handleSignup = (data) => {

        console.log('Form submitted:', data);
        console.log(data.name)

        signup(data.email, data.password)
            .then(res => {
                console.log(res.user)
                toast.success("Successly sign up")
                navigate("/")

            })
            .catch(e => console.error(e))

    };




  return (
     <div className=" mx-5 md:mx-0 my-10 md:my-14 flex justify-center ">
            <div className="bg-white p-8 border rounded-xl shadow-md max-w-lg w-full">
                <h2 className="text-2xl text-center font-bold mb-6">Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            {...register("name", { required: true })}
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            {...register("email", {
                                required: 'email must be requred'
                            })}
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                        />
                        {/* {errors.email && <p className='text-red-600'>{errors.name?.message}</p>} */}
                    </div>


                    <div className="mb-6">
                        <label htmlFor="password" className="block font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                                minLength: { value: 6, message: 'you have must 6 characte' },
                                pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]/, message: 'password must be stong' }
                            })}
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                        />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                    </div>

                    <input type="submit" value="Sign Up" className='hover:cursor-pointer text-white font-bold px-4 py-2 text-center w-full mb-3 bg-[#ff7265] rounded-full  hover:bg-[#f76557] duration-500' />

                    {/* <div className='text-center w-full mb-3 bg-rose-600 rounded-lg  hover:bg-rose-700 duration-500'>
                        <button type="submit" className=" text-white font-bold px-4 py-2 ">Sign Up</button>
                    </div> */}

                </form>


                <p>Don't have an account? Please <Link to="/login" className='text-[#fe5b4c] font-bold '>Login</Link></p>
            </div>
        </div>
  )
}

export default Signup