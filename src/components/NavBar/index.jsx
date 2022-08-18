import React from 'react';
import { Header } from './style';
import CartWidget from '../CartWidget';

function NavBar() {
    return (
        <Header>
            <div className="menu">
                <a href="">Víveres</a>
                <a href="">Carnes</a>
                <a href="">Hortalizas</a>
            </div>

            <img src="/img/logotipo.png" alt="Logo" className="logo"/>

            <CartWidget />
        </Header>
    )
}

export default NavBar;
