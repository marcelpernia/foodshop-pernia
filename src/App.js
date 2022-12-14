import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './style.css';
import NavBar from './components/NavBar/';
import Main from './components/Main';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

function App() {

  return (
    <>
    <CartProvider>
      <NavBar />
      <Main>
        <Routes>
          <Route path='/' element={<ItemList />}></Route>
          <Route path='/category/:id' element={<ItemList />}></Route>
          <Route path='/product/:id' element={<ItemDetail />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </Main>
    </CartProvider>
    </>
  );
}

export default App;
