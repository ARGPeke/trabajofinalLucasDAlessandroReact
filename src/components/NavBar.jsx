import { Link, NavLink, } from "react-router-dom";
import logo from "../assets/images/logo-boca.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-primary p-3">
                <div className="col"></div>
                <div className="col m-2 text-center">        
                    <Link to={'/'}>
                        <img src={logo} alt="BOCA" width={200}/>
                        </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row bg-dark">
                <div className="col">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink to={'/categoria/futbol'} className="nav-link text-light" activeclassname="active"  style={{fontSize:"20px", fontWeight:"bold"}}>Futbol</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  to={'/categoria/basquet'} className="nav-link text-light"  activeclassname="active" style={{fontSize:"20px", fontWeight:"bold"}}>Basquet</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/categoria/entrenamiento'} className="nav-link text-light"   activeclassname="active" style={{fontSize:"20px", fontWeight:"bold"}}>Entrenamiento</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/categoria/libre'} className="nav-link text-light"   activeclassname="active"style={{fontSize:"20px", fontWeight:"bold"}}>Tiempo Libre</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </div>

    )
}

export default NavBar;