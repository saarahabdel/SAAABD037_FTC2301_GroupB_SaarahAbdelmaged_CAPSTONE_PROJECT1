import React,{ useState } from 'react';
import { supabase } from '../../client.js'
import { Link } from 'react-router-dom';

const Register = () => {

    const [formData, setFormData] = useState({
        fullName: '',
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

            const { data, error } = await supabase.auth.signUp(
                {
                    email: formData.email,
                    password: formData.password,
                    options: {
                        data: {
                            full_name: formData.fullName,
                        }
                    }
                }
            )
            alert('Check your email for a verification link')

        } catch (error) {
           alert(error)
        }
    }

    return (
        <div className='login-form'>
            <p className='login-header'>REGISTER</p>
            <form onSubmit={handleSubmit} className='form'>

                <input 
                    placeholder='Fullname'
                    name='fullName'
                    onChange={handleChange}
                />

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

                <button type='submit' className='submit-login'>
                    Submit
                </button>
            </form>
            <div className='register-link'>Already have an account? <Link to='/login'>Login</Link></div>
        </div>
    )
}

export default Register; 