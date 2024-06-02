import React from 'react'

const RestaurantSignUp = () => {
  return (
    <>
    <h3>Signup</h3>
    <div>
        <div className='input-wrapper'>
            <input className='input-field' type='text' placeholder='Enter your email id'></input>
        </div>
        <div className='input-wrapper'>
            <input className='input-field' type='password' placeholder='Enter password'></input>
        </div>
        <div className='input-wrapper'>
            <input className='input-field' type='password' placeholder='Conform password'></input>
        </div>
        <div className='input-wrapper'>
            <input className='input-field' type='text' placeholder='Enter restarunt name'></input>
        </div>
        <div className='input-wrapper'>
            <input className='input-field' type='text' placeholder='Enter city'></input>
        </div>
        <div className='input-wrapper'>
            <input className='input-field' type='text' placeholder='Enter full address'></input>
        </div>
        <div className='input-wrapper'>
            <input className='input-field' type='number' placeholder='Enter contact number'></input>
        </div>
        <button className='button'>Sign up</button>
    </div>
    </>
  )
}

export default RestaurantSignUp