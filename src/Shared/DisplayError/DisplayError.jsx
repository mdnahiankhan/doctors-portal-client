import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <p className='text-red-500'>Something went Wrong !!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h3 className='text-3xl'>Please <button onClick={handleSignOut}>Sign Out </button>and log back in</h3>
        </div>
    );
};

export default DisplayError;