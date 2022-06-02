import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const { isAuthorized, login, logout } = useContext(AuthContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h2>
                        <a className="navbar-brand" href="#">Navbar</a>
                    </h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Products</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">

                            <button className="btn btn-sm btn-outline-primary" type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (isAuthorized) logout();
                                    else login("Virat Kohli", "rcb123");
                                }}>
                                {isAuthorized ? "Log Out" : "Log In"}
                            </button>
                            
                            <button className="btn btn-sm btn-outline-primary" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;