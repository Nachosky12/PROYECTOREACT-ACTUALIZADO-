import "./App.css"
import Header from "./components/header/Header"
import Boody from "./components/body/Boody"
import Footer from "./components/footer/Footer"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./components/home/Home";
import About from "./components/about/about";
import ContactPage from "./components/contact/Contact";
import Products from "./components/products/Products";
import ItemDetail from "./components/itemdetail/ItemDetail";


function App(){
    return(
        <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:productId' element={<ItemDetail />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
            <Footer/>
        </BrowserRouter>  
        </>
    )
};

export default App;