import React from 'react';
import { Header } from './NavBar';

function NavBar() {
    return (
        <Header>
            <div className="menu">
                <a href="">Víveres</a>
                <a href="">Carnes</a>
                <a href="">Hortalizas</a>
            </div>

            <img src="/img/logotipo.png" alt="Logo" className="logo"/>
        </Header>
    )
}

export default NavBar;
