import React from 'react';
import { Link } from 'react-router-dom';
import useToken from '../useToken';
import LogoutButton from '../LogoutButton';

const Navbar = () => {

    const {token} = useToken();

    const Logout = () => {
        return (
            <li className="nav-item">
                <Link></Link>
            </li>
        );
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/buglist">Buglist</Link>
            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Left Side Of Navbar */}
                    <ul className="navbar-nav mr-auto">
                    
                    </ul>

                    {/* Right Side Of Navbar */}
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/buglist">Buglist</Link>
                        </li> */}
                        {token ? <LogoutButton/> : null}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;