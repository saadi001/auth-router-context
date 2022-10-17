import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContexts';

const Header = () => {
     const {user,logOut} = useContext(AuthContext);
     const handleLogOut = () =>{
          logOut()
          .then(()=>{})
          .catch(error => console.error(error))
     }
     return (
          <div>
               <div className="navbar bg-primary text-primary-content flex justify-between">
                    <Link className="btn btn-ghost normal-case text-2xl">Auth vai</Link>
                    <div>
                         <Link className='btn btn-ghost normal-case text-xl ml-2' to='/'>Home</Link>
                         <Link className='btn btn-ghost normal-case text-xl ml-2' to='/orders'>Orders</Link>
                         <Link className='btn btn-ghost normal-case text-xl ml-2' to='/login'>log in</Link>
                         <Link className='btn btn-ghost normal-case text-xl ml-2' to='/register'>register</Link>
                         {user?.email && <span className='text-xs'>Welcome, {user.email}</span>}
                         {user?.email ? 
                              <button onClick={handleLogOut} className='btn btn-sm btn-accent ml-2'>log out</button>
                              : <Link to='/login'><button className='btn btn-sm'>Log in</button></Link>}
                    </div>
               </div>
          </div>
     );
};

export default Header;