
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.png';

export const NavBar = () => {
  return (
    <div className='navbar'>
      <h4>Maktab<span>Sharif</span></h4>
      <nav className='nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contactUs'>ContactUs</NavLink>
          <NavLink to='/bootcamps'>Bootcamps</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
      </nav>
      <img className='logo' src={ logo } alt='logo' />
    </div>
  )
}


