import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContexts';

const Register = () => {
     const {createUser} = useContext(AuthContext);
     const handleSubmit = event =>{
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(name, email, password);

          createUser(email, password)
          .then(result =>{
               const user = result.user;
               console.log(user);
          })
          .catch(error =>{
               console.error(error);
          })
     }

     return (
          <div>
               <div className="hero bg-base-200">
                    <div className="hero-content flex-col">
                         <div className="">
                              <h1 className="text-5xl font-bold">Please register now!</h1>
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-5">

                              <form onSubmit={handleSubmit} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                        <label className="label">
                                             <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                                        </label>
                                   </div>
                                   <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Register</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;