import { HOME_URL, LOGIN_URL, UPCOMING_URL } from '../../constants/urls';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
// import { logout } from "../../firebase/auth";
import { useUser } from "../../contexts/userContext";
import { logout } from "../../firebase/auth";

function Navbar() {
    const user = useUser();
    console.log(user);

    const handleLogout = async() => {
        await logout();
    }

    // useEffect(() => {

    return (
        <nav className={`navbar navbar-expand-lg ${styles.navbarLook}`}>
            <div className="container-fluid d-flex">
                <div className='me-5'>
                    <a className="navbar-brand d-flex align-items-center" href={HOME_URL}>
                    <img src="https://files.cults3d.com/uploaders/20952150/illustration-file/421c5c91-423c-49af-bbd6-7f3839622ab0/pngwing.com-2022-02-20T081900.534.png" width="40" height="40" className="d-inline-block align-text-top me-2" />
                    Cartelera Caracas
                    </a>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href={HOME_URL}>Inicio</a>
                        <a className="nav-link" href={UPCOMING_URL}>Proximos estrenos</a>
                        <a className="nav-link me-5" href="#">Pricing</a>
                        
                        {!!user ? (
                            <button type="button" onClick={handleLogout} className={`btn ${styles.btnLook} text-white`}>Salir de la cuenta</button>
                        ) : (

                        <Link to={LOGIN_URL}>
                            <button type="button" className={`btn ${styles.btnLook} text-white`}>Iniciar sesion</button>
                        </Link>
                        )}

                        
                        
                    </div>
                </div>                
            </div>
        </nav>
    );
}

export default Navbar