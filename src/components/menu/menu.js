
import { useState } from 'react';
import logo from '../../assets/logo.png'
import './menu.css'
import { useEffect } from 'react';

function Menu() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  

    return (
        <div id='topnav-outside' expand="md" className={scrolled ? "scrolled" : ""}>

            <div id='topnav-intside'>
                <div class='bofollowbutton-nav'>

                </div>

                <div id='bonav' role='navigation'>

                    <a href='#bonav' title='Show navigation'>
                        &#9776; Show Menu
                    </a>
                    <a href='#' title='Hide navigation'>
                        &#9776; Hide Menu
                    </a>
                    <ul>

                        <li class='home-icon'>
                        </li>

                        <li>
                            <a href='/#'>
                                <div className='logo'>
                                    <img src={logo} alt="logo" className="logo-img" />
                                </div>
                            </a>
                        </li>

                        <li class='has-child'><a aria-haspopup='true' href='#'>Servicios</a>
                            <ul>
                                <li><a href='/#/business-intelligence'> Business intelligence</a></li>
                                <li><a href='/#/power-platform'>Power apps</a></li>
                                <li><a href='/#/ux-ui'> UX / UI</a></li>
                                <li><a href='/#/desarrollo-software'>Desarrollo software</a></li>
                            </ul>
                        </li>

                        <li><a href='/#/nosotros'>Nosotros</a></li>
                        <li><a href='https://api.whatsapp.com/send?phone=51991316320&text=Flous' target="_blank">Contáctenos</a></li>
                        <li><a href='https://outlook.office365.com/owa/calendar/FlowUpSolutions1@flowupsolutions.com/bookings/' target="_blank">Agendar reunión</a></li>
                    </ul>
                </div>
            </div>
        </div>

        /*  <div id='topnav-outside'>
             <div id='topnav-intside'>
                
                 <div id='bonav' role='navigation'>
                     <a href='#bonav' title='Show navigation'>
                         &#9776; Show Menu
                     </a>
                     <a href='#' title='Hide navigation'>
                         &#9776; Hide Menu
                     </a>
                     <ul>
                         <li class='home-icon'>
                         </li>
                         <li class='has-child'><a aria-haspopup='true' href='#'>Menu Item 1</a>
                             <ul>
                                 <li><a href='/nosotros'>Sub Menu Item 1</a></li>
                                 <li><a href='/power-platform'>Sub Menu Item 1.1</a></li>
                             </ul>
                         </li>
                         <li class='has-child'><a aria-haspopup='true' href='#'>Menu Item 2</a>
                             <ul>
                                 <li><a href='#'>Sub Menu Item 2</a></li>
                                 <li><a href='#'>Sub Menu Item 2.2</a></li>
                                 <li><a href='#'>Sub Menu Item 2.3</a></li>
                             </ul>
                         </li>
                         <li class='has-child'><a aria-haspopup='true' href='#'>Menu Item 3</a>
                             <ul>
                                 <li><a href='#'>Sub Menu Item 3</a></li>
                             </ul>
                         </li>
                         <li><a href='#'>Menu Item 4</a></li>
                     </ul>
                 </div>
             </div>
         </div> */
    )
}


export default Menu;