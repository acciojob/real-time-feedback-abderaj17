import React, { useState } from 'react'
import '../styles/App.css';

const Feedback = () => {
  const [formData, setFormData] = useState({name: "", email: "", password: ""});
  const [errors, setErrors] = useState({name: "", email: "", password: ""});

  const validate = (field, value)=>{
    let errorMessage = "";
    switch(field){
      case 'name':
        if(value.trim().length < 3) errorMessage = 'Name must be at least 3 characters';
        break;
      case 'email':
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errorMessage ='Invalid email address';
        break;
      case 'password':
        if(value.length < 6) errorMessage = 'Password must be at least 6 characters';
        break;
      default:
        break;
    }
    setErrors((prevErrors)=> ({...prevErrors, [field]: errorMessage}));
  }

  const handleChange = (e)=>{
    const {id, value} = e.target;
    setFormData((prevData) => ({...prevData, [id]: value}));
    validate(id, value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert('Form submitted successfully!');
  }

  return (
    <div className='container'>
        <form>
            <label htmlFor='name' className='font-bold underline'>Name: <br />
            <input id='name' type='text' value={formData.name} onChange={handleChange} />
            {errors.name && <p className='error-message'>{errors.name}</p>} <br/>
            </label> <br />


            <label htmlFor='email'>Email: <br />
            <input type='email' id='email' value={formData.email} onChange={handleChange}/>
            {errors.email && <p className='error-message'>{errors.email}</p>} <br/>
            </label> <br />
            <label htmlFor='password'>Password: <br />
            <input type='text' id='password' value={formData.password} onChange={handleChange} />
            {errors.password && <p className='error-message'>{errors.password}</p>} <br/>
            </label> <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Feedback