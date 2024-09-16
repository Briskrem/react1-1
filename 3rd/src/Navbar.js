import { NavLink } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="Navbar" >
            <div className="logo-container" >NCS</div>
            <ul className="navlist" >
                <li>
                    <NavLink className={'navlink'}  to={'/'}>HOME</NavLink>
                </li>
                <li>
                    <NavLink className={'navlink'}  to={'/search'} >SEARCH</NavLink>
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