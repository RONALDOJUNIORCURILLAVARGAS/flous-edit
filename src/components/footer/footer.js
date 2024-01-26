
import logoBlanco from '../../assets/logo-blaco.png'
import './footer.css'
import navIcon1 from '../../assets/svg/facebook.svg'
import navIcon2 from '../../assets/svg/linkedin.svg'

function Footer() {
    return (
        <div className="footer">
            <div className='footer-detalle'>

                <div className='detalle-foo'>
                    <br />
                    <br />
                    <img src={logoBlanco} alt="logo" className="logo-img" />
                    <p>Our mission is to redefine business possibilities by leveraging technology as a catalyst for innovation and growth.</p>
                </div>

                <div className='detalle-foo'>
                    <h2>Servicios</h2>
                    <a href="https://www.ejemplo.com">Inicio</a> <br />
                    <a href="#servicios1">Servicios</a> <br />
                    <a href="https://bit.ly/4arqpzp">Nosotros</a>  <br />
                    <a href="https://bit.ly/4arqpzp">Contáctenos</a>
                </div>

                <div className='detalle-foo'>
                    <h2>Contáctanos</h2>
                    <span> admin@flowupsolutions.com</span> <br />
                    <span>+51 991316320 </span><br />
                    <a href="https://www.facebook.com/profile.php?id=61554718285482&locale=es_LA" target="_blank"><img src={navIcon1} alt="" style={{padding: '10px 20px'}}/></a>
                    <a href="https://www.linkedin.com/company/flow-up-solutions/?viewAsMember=true" target="_blank"><img src={navIcon2} alt="" style={{padding: '10px 20px'}}/></a>
                </div>

            </div>
            <div> @2023 Flous - Todos los derechos reservados
            </div>
        </div>
    )
}


export default Footer;