import { Link, NavLink } from "react-router-dom";

import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="Navbar" >
            <div className="logo-container" >NCS</div>
            <ul className="navlist" >
                <li>
                    <NavLink  className={'navlink'} to={"/"} >HOME</NavLink>
                </li>
                <li>
                    <NavLink className={'navlink'} to={'/search'} >SEARCH</NavLink>
                </li>
                <li>
                    <NavLink className={'navlink'} to={'/'} >LOGIN</NavLink>
                </li>
                <li>
                    <NavLink className={'navlink'} to={'/'} >LOGOUT</NavLink>
                </li>
                <li>
                    <NavLink className={'navlink'} to={'/'} >REGISTER</NavLink>
                </li>
            </ul>
            <div className="hamburger-container" >
                <div className="hamburger" >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}