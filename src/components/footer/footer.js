
import logoBlanco from '../../assets/logo-blaco.png'
import './footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className='footer-detalle'>

                <div className='detalle-foo'>
                    <br/>
                    <br/>
                    <img src={logoBlanco} alt="logo" className="logo-img" />
                    <p>cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años</p>
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
                    <span> admin@flowupsolutions.com</span> <br/>
                    <span>+51 991316320 </span><br/>
                    <span> Facebook</span>
                    <span> Linkdin </span>
                </div>

            </div>
            <div> @2023 Flous - Todos los derechos reservados
            </div>
        </div>
    )
}


export default Footer;