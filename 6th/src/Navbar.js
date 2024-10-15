import {NavLink} from "react-router-dom";
import './Navbar.css';

export const Navbar = ({toggleActive}) => {
    return (
        <div className="Navbar" >
            <div className="logo-container" >
                <h2>NCS</h2>
            </div>
            <ul className="navlist" >
                <li>
                    <NavLink to={'/'} >HOME</NavLink>
                </li>
                <li>
                    <NavLink to={'/search'}>SEARCH</NavLink>
                </li>
                <li>
                    <NavLink >LOGIN</NavLink>
                </li>
                <li>
                    <NavLink >LOGOUT</NavLink>
                </li>
                <li>
                    <NavLink to={'/register'} >REGISTER</NavLink>
                </li> 
            </ul>
            <div className="hamburger-container" >
                <div className="hamburger" onClick={toggleActive}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}