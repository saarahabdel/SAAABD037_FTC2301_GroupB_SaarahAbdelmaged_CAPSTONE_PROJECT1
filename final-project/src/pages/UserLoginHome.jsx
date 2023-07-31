import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserLoginHome = ({token}) => {
    let navigate = useNavigate()

    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
    }


    return(
        <div>
        <div className='user-home'>
            <h3 className='welcome-back'>Welcome back, {token.user.user_metadata.full_name}</h3>
            <button onClick={handleLogout} className='logout-button'>Logout</button>
        </div>
        </div>
    )    
}

export default UserLoginHome 