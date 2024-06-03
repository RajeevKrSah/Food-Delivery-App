import React from 'react'
import logo from "../../../public/logo.png"
import Link from 'next/link'

const RestaurantHeader = () => {
  return (
    <div className='header-wrapper'>
      <div >
        <img  src={`..${logo.src}`} width={200} height={72}/>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Login/Signup</Link>
        </li>
        <li>
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default RestaurantHeader