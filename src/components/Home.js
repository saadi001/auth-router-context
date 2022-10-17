import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContexts';

const Home = () => {
     const {user} = useContext(AuthContext);
     return (
          <div>
               <h4 className='text-2xl'>This is Home components and i am "{user.email}"</h4>
          </div>
     );
};

export default Home;