import React from 'react'
import '../styles/App.css';

const Feedback = () => {
  
  return (
    <div className='container'>
        <form>
            <label htmlFor='name' className='font-bold underline'>Name: <br />
            <input id='name' type='text' />
            </label> <br />
            <label htmlFor='email'>Email: <br />
            <input type='email' id='email' />
            </label> <br />
            <label htmlFor='password'>Password: <br />
            <input type='text' id='password' />
            </label> <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Feedback