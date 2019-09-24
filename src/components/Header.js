import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../assets/logo_bb.png';
import { MdSearch } from 'react-icons/md';
function Header() {
    const [searchName, setSearchName] = useState('');
    return (
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header" >
                    <Link to='/' className="navbar-brand page-scroll">
                        <img className="img-logo" src={logo} alt="Logo Breaking Bad" />
                    </Link>
                </div>
                <div>
                    <input type="text" placeholder="Pesquise os personagens" onChange={e => { setSearchName(e.target.value) }} />
                    <Link to={`/search-characters/${searchName}`} className="btn-header">
                        <MdSearch />
                    </Link>
                </div>
   
            </div >
            <div className="dev">
                <h6>Thiago Moreira de Freitas</h6>
            </div>
        </nav >
        /*   <header id="main-header">
              <div classNameName="header-content">
                  <div>
                      <Link to='/'>
                          <img classNameName="img-logo" src={logo} alt="Logo Breaking Bad" />
                      </Link>
                  </div>
                  <div>
                      <input type="text" classNameName="input" placeholder="Pesquise os personagens" onChange={e => { setSearchName(e.target.value) }} />
                      <Link to={`/search-characters/${searchName}`} classNameName="btn-header">
                          <MdSearch />
                      </Link>
                  </div>
              </div>
          </header> */
    );
}
export default Header;