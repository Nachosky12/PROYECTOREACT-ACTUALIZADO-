    import React from 'react'
    import soy from  '../imagen/imagenes/soy.jpg'

    export default function Header() {
      return (
    
        <header className="header">
        <div className="logo"> <img className='logo1' src={soy} /> </div>
        <nav className="nav">
          <ul> 
            <li><a href="https://dle.rae.es/inicio">Inicio</a></li>
            <li><a href="https://about.google/?utm_source=google-CL&utm_medium=referral&utm_campaign=hp-footer&fg=1">Acerca de</a></li>
            <li><a href="https://smallbusiness.withgoogle.com/intl/es-419_cl/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=CL#!/">Servicios</a></li>
          </ul>
        </nav>
      </header>
      )
    }
    