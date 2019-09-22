import React from 'react';

import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo_bb.png';

function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <div>
                    <Link to='/'>
                        <img className="img-logo" src={logo} alt="Logo Breaking Bad" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
export default Header;