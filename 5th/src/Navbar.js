import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = ({toggleSideBar}) => {
    return (
        <div className="Navbar" >
            <div className="logo-container" >
                <h2>NCS</h2>
            </div>
            <ul className="nav-list" >
                <li>
                    <NavLink to={'/'} >HOME</NavLink>
                </li>
                <li>
                    
                    <NavLink to={'/search'}>SEARCH</NavLink>
                </li>
                <li>LOGIN</li>
                <li>LOGOUT</li>
                <li>REGISTER</li>
            </ul>
            <div className="hamburger-container" >
                <div className="hamburger" onClick={toggleSideBar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}