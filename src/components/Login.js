import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContexts';

const Login = () => {

     const {signIn} = useContext(AuthContext);
     const navigate = useNavigate();

     const handleSubmit = event =>{
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          // console.log(email, password);

          signIn(email, password)
          .then(result =>{
               const user = result.user;
               console.log(user);
               form.reset();
               navigate('/');
          })
          .catch(error => console.error(error))
     }

     return (
          <div>
               <div className="hero bg-base-200">
                    <div className="hero-content flex-col">
                         <div className="">
                              <h1 className="text-5xl font-bold">Please login now!</h1>
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-5">
                              <form onSubmit={handleSubmit} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                        <div className='flex justify-between'>
                                        <label className="label">
                                             <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                        </label>
                                        <label className="label">
                                             <Link to='/register' className="label-text-alt link link-hover">New here? register</Link>
                                        </label>
                                        </div>
                                   </div>
                                   <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Login</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;