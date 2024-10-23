
    import React from 'react'
    import soy from  '../imagen/imagenes/soy.jpg'
    import Navbar from '../navbar/NavBar'

    export default function Header() {
      return (
    
        <header className="header">
        <div className="logo">
          <img className='logo1' src={soy} />   
        </div>
        <div><Navbar/></div>  
        
      </header>
      )
    }
    