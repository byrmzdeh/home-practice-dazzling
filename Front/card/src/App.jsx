import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './sass/style.scss'
import Wishlist from './pages/Wishlist';
import Basket from './pages/Basket';
import Navbar from './Layouts/Navbar';
import Detail from './pages/Detail';
import Add from './pages/Add';
import MainLayout from './MainLayout';
import Footer from './Layouts/Footer';


const App = () => {
  return (
  <MainLayout>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Detail />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  </MainLayout>
  )
}

export default App
