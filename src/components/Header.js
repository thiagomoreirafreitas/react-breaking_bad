import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../assets/logo_bb.png';
import { MdSearch } from 'react-icons/md';
function Header() {
    const [searchName, setSearchName] = useState('');

    return (
        <header id="main-header">
            <div className="header-content">
                <div>
                    <Link to='/'>
                        <img className="img-logo" src={logo} alt="Logo Breaking Bad" />
                    </Link>
                </div>
                <div>
                    <input type="text" className="input" placeholder="Pesquise os personagens" onChange={e => { setSearchName(e.target.value) }} />
                    <Link to={`/search-characters/${searchName}`} className="btn-header">
                        <MdSearch />
                    </Link>
                </div>
            </div>
        </header>
    );
}
export default Header;