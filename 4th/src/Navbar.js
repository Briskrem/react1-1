import { NavLink } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';

export const Navbar = ({shiftSideBar}) => {

        
    return (
        <div className="Navbar">
            <div className="logo-container">
                <div>NCS</div>
            </div>
            <ul className="navlink-container">
                <li>
                    <NavLink className={'navlink'} to={'/'} >Home</NavLink>
                </li>
                <li>
                    <NavLink className={'navlink'} to={'/search'} >Search</NavLink>
                </li>
                <li>
                    <NavLink className={'navlink'} to={'/login'} >login</NavLink>
                </li>
                <li>
                    <NavLink className={'navlink'} to={'/logout'} >logout</NavLink>
                </li>
                <li>
                    <NavLink className={'navlink'} to={'/register'} >register</NavLink>
                </li>
            </ul>
            <div className="hamburger-container" >
                <div className="hamburger"  onClick={shiftSideBar} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}