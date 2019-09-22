import React from 'react';

import './Home.css';
import logo from '../assets/logo_bb.png';
function Home() {
    return (
        <div className="banner">
            <div className="banner_home">
                <div className="container">
                        <img src={logo} className="float-right" alt='Breaking Bad'/>
                </div>
            </div>
            <div className="banner_home">
                <div className="container">
                    <div className="text">
                        <h2>Breaking Bad</h2>
                        <p>Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;