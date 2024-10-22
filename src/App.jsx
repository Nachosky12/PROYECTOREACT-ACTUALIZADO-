import "./App.css"
import Header from "./components/header/Header"
import Boody from "./components/body/Boody"
import Footer from "./components/footer/Footer"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home';
import AboutPage from './components/About/About';
import ContactPage from './components/Contact/Contact';
import ProductsPage from './components/Products/Products';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {

    return (
       <div>  
            <Header/>
            <Boody/>
            <Footer/>
       </div>

    )
}

export default App  

// </>