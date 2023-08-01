import React, { useState } from "react";
import Login from './Login';
import Register from './Register';
import { Link } from "react-router-dom";


function Home() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="actual-home">

      <div className="actual-home">
                <h1 className="actual-home-heading">Welcome to Podcast</h1>
                <p>An Online Podcast Application</p>
                <br></br>
                <button className="login-button"><Link to='/login'>LOGIN</Link></button>
                <br></br>
                <button className="register-button"><Link to='/register'>REGISTER</Link></button>
                <br></br>
                <button className="explore-button"><Link to='/podcast'>EXPLORE</Link></button>
      </div>

    
    </div>
    
  );
}

export default Home;