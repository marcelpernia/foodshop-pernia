import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './style'
import CartWidget from '../CartWidget'

function NavBar() {
    return (
        <Header>
            <div className="menu">
                <a href="">Grocery</a>
                <a href="">Alcohol</a>
                <a href="">Snacks</a>
            </div>

            <Link to='/'>
                <img src="/img/logotipo.png" alt="Logo" className="logo"/>
            </Link>

            <CartWidget />
        </Header>
    )
}

export default NavBar;
