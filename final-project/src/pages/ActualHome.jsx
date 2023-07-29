import React, { useState } from "react";
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Link } from "react-router-dom";


function ActualHome() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="actual-home">

      <div>
                <h1>Welcome to Podcast</h1>
                <h2>Explore Podcasts of Various Genres</h2>
                <br></br>
                <button><Link to='/login'>Login</Link></button>
                <br></br>
                <button><Link to='/register'>Register</Link></button>
      </div>

    
    </div>
    
  );
}

export default ActualHome;