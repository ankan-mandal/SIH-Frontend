import React, { useContext } from 'react'
import "./Navbar.css"
import { bell, cart, home, scan, user, homeActive, cartActive, bellActive, userActive } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Navbar = () => {

  return (
    <div className='navbar'>
        {/* <div className="nav_btn"> */}
            <NavLink to="/">
                {({isActive}) =>  isActive ? <img src={homeActive} alt="" /> : <img src={home} alt="" />}
            </NavLink>
            <NavLink to="/cart/list">
                {({isActive}) => isActive ? <img src={cartActive} alt="" /> : <img src={cart} alt="" />}
            </NavLink>
            <NavLink to="/scan">
                <img src={scan} alt="" />
            </NavLink>
            <NavLink to="/notification">
                {({isActive}) => isActive ? <img src={bellActive} alt="" /> : <img src={bell} alt="" />}
            </NavLink>
            <NavLink to="/profile">
                {({isActive}) => isActive ? <img src={userActive} alt="" /> : <img src={user} alt="" />}
            </NavLink>
        {/* </div> */}
    </div>
  )
}

export default Navbar