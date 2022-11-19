import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider';
import useToken from '../../hooks/UseToken';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUperror] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();
    if (token) {
        navigate('/')
    }


    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                setSignUperror('')
                console.log(user);
                toast('User created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error)
                setSignUperror(error.message)
            })
        const saveUser = (name, email) => {
            const user = { name, email };
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    setCreatedUserEmail(email)
                })
        }
    }


    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h1 className='text-xl text-center'>Register</h1>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full">
                            <label htmlFor='' className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type='name'{...register('name', {
                                required: "Name is required"
                            })} className="input input-bordered w-full " placeholder="enter name" />
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor='' className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type='email' {...register('email', {
                                required: true
                            })} className="input input-bordered w-full " placeholder="enter email" />
                        </div>
                        <div className="form-control w-full ">
                            <label htmlFor='' className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type='password' {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password should be 6 charecter' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong' }
                            })} className="input input-bordered w-full " placeholder="enter password" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            <label htmlFor='' className="label">
                                <span className="label-text">Forget Password ?</span>
                            </label>
                        </div>
                        <input className='btn btn-accent w-full' value='signUp' type="submit" />
                        <div>
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </div>
                    </form>
                    <p>Already have an account ?<Link className='text-accent' to='/login'>please sign in </Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;