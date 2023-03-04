import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider';
import useToken from '../../hooks/UseToken';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    if (token) {
        navigate(from, { replace: true })
    }
    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                setLoginUserEmail(data.email)
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message)
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label htmlFor='' className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text' className="input input-bordered w-full "  {...register("email", {
                            required: "Email Address is required",
                        })} placeholder="enter email" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label htmlFor='' className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' className="input input-bordered w-full "  {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: 'Password should be 6 charecter' }
                        })} placeholder="enter password" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label htmlFor='' className="label">
                            <span className="label-text">Forget Password ?</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full'
                        value='LogIn' type="submit" />
                </form>
                <div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </div>
                <p>New to doctors Portal ?<Link className='text-accent' to='/signUp'>create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;