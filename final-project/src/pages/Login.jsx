import React,{ useState } from 'react';
import { supabase } from '../client';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {

    let navigate = useNavigate();  // so I'll be able to use the useNavigate function 

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    console.log(formData)

    function handleChange(event){
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]:event.target.value  // replacing the values with names 
            }

        })

    }

    async function handleSubmit(e){
        e.preventDefault()
        try {

            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            })

          if (error) throw error 
          console.log(data)
          setToken(data)   // set token = data coming from supabase 
          navigate('/userloginhome') 

        } catch (error) {
           alert(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>


                <input 
                    placeholder='Email'
                    name='email'
                    onChange={handleChange}
                />

                <input 
                    placeholder='Password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                />

                <button type='submit'>
                    Submit
                </button>
            </form>
            Don't have an account? <Link to='/register'>Register</Link>
        </div>
    )
}

export default Login;