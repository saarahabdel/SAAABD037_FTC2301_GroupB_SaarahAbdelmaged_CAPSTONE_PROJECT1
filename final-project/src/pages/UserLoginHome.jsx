import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserLoginHome = ({token}) => {
    let navigate = useNavigate()

    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/actualhome')
    }


    return(
        <div>
            <h3>Welcome back, {token.user.user_metadata.full_name}</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )    
}

export default UserLoginHome 