import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Header } from './style'
import CartWidget from '../CartWidget'

function NavBar() {
    return (
        <Header>
            <div className="menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/category/1">Grocery</NavLink>
                <NavLink to="/category/2">Alcohol</NavLink>
            </div>

            <Link to='/'>
                <img src="/img/logotipo.png" alt="Logo" className="logo"/>
            </Link>

            <CartWidget />
        </Header>
    )
}

export default NavBar;
