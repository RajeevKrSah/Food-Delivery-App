import React from 'react'

const RestaurantLogin = () => {
  return (
    <>
    <h3>Login</h3>
    <div>
        <div className='input-wrapper'>
            <input type='text' placeholder='Enter your email id' className='input-field' />
        </div>
        <div className='input-wrapper'>
            <input type='password' placeholder='Enter your password' className='input-field'/>
        </div>
        <div className='input-wrapper'>
        <button className='button'>Login</button>
        </div>
    </div>
    </>
  )
}

export default RestaurantLogin