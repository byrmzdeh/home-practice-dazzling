import React from 'react'
import '../sass/navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Dazzling Demo</h1>
        <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/add'}>Add Page</NavLink></li>
            <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
            <li><NavLink to={'/basket'}>Basket</NavLink></li>
        </ul>
      
    </div>
  )
}

export default Navbar
