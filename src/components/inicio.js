import React from 'react';
import './inicio.css';
import Carrusel from './carrusel/carrusel'
import Carousel from 'infinite-react-carousel';
import { Link } from 'react-router-dom';
import iconWhat from '../assets/icon-what.png'
function Home() {
  return (
    <div className="App">
      <div className="home">
        {/* banner */}
        <div className='banner1'>
          <div className="descripcion">
            <p>
              Datos complejos, soluciones simples: nuestros compromiso contigo.
            </p>
            <span className="slogan"> Proporcionar soluciones innovadores diseñadas para impulsar el crecimiento sostenible y el éxito durante de tu empresa</span>
            <br /> <br />  <br /> <a className='buttom' href="https://api.whatsapp.com/send?phone=51991316320&text=Flous" target="_blank">Contáctenos</a>
          </div>
          <div className='fondo'>

          </div>
          <a className='iconWhat' href="https://api.whatsapp.com/send?phone=51991316320&text=Flous" target="_blank">
            <img src={iconWhat} alt="Descripción de la imagen" width={90}/>
          </a>
        </div>

      </div>
      <div id='servicios1' className="servicios1">
        <p className='title'>
          Servicios
        </p>
        <div className="servicios">
          <div className='dis'>
            <p>Desarrollo software</p>
            <span> Análisis de datos mediante Power BI y automatizar procesos para la productividad de tu negocio</span>
            <br /><br />
            <Link className='agendar-reu' to="/desarrollo-software">Contáctenos</Link>
          </div>
          <div className='dis'>
            <p>Business intelligence</p>
            <span>Automatización de creación de reportes y permite tomar decisiones empresariales </span>
            <br /><br />

            <Link className='agendar-reu' to="/business-intelligence">Contáctenos</Link>
          </div>
          <div className='dis'>
            <p>Power apps</p>
            <span>Autmatiza tus procesos operativos con software robotizado
            </span>
            <br /><br />

            <Link className='agendar-reu' to="/power-platform">Contáctenos</Link>
          </div>
          <div className='dis'>
            <p>UX / UI</p>
            <span>Optimización de aplicaciones y pagina web para lograr una interaccion amigable
            </span>
            <br /><br />
            <Link className='agendar-reu' to="/ux-ui">Contáctenos</Link>
          </div>


        </div>
      </div>
      <div id='' className="testimonios">
        <p className='title'>
          Clientes que confiaron en nosotros
        </p>


        <span> Sé parte del cambio y lleva a tu empresa al éxito</span>
        <br />
        <br />
        <br />
        <Carrusel />
      </div>

      <div id='' className='metodologias'>
        <p className='title'>
          Nuestra metodología
        </p>
        <div className='img-meto'></div>
      </div>

      <div id='' className='socios'>
        <p>Nuestros socios tecnológicos</p>
        <br /><br />
        <Carousel
          autoplay={true}
          slidesToShow={5}
          className="carru"
          autoplaySpeed={550}
          centerMode={true}
          centerPadding={0}
          swipe={false}
        >
          <img src='https://mensagia.com/img/frontend/plugins/microsoft-logo.png' alt='Microsoft Logo' />
          <div className='espacio'></div>
          <img src='https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png' alt='Java Logo' />
          <div></div>

          <img src='https://companieslogo.com/img/orig/PATH_BIG-212c4d26.png?t=1649160715' alt='Logo' />
          <div className='espacio'></div>

          <img src='https://media.licdn.com/dms/image/D4D12AQHxJEfCMmvqVw/article-cover_image-shrink_720_1280/0/1681895099008?e=2147483647&v=beta&t=Gjwwy8sqx8hUgHEc_AkNWlnfGlPxhBLjt4CBxMwwVPA' alt='Logo' />
          <div className='espacio'></div>

          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/1280px-Scala-full-color.svg.png' alt='Scala Logo' />
          <div className='espacio'></div>

          <img src='https://assets.stickpng.com/images/62c6bc0beee9410fe137d91e.png' alt='Logo' />
          <div className='espacio'></div>

          <img src='https://1000marcas.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo.png' alt='Microsoft Power BI Logo' />
          <div className='espacio'></div>

          <img src='https://media.licdn.com/dms/image/D4D12AQHxJEfCMmvqVw/article-cover_image-shrink_720_1280/0/1681895099008?e=2147483647&v=beta&t=Gjwwy8sqx8hUgHEc_AkNWlnfGlPxhBLjt4CBxMwwVPA' alt='Logo' />
          <div className='espacio'></div>

          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/1280px-Scala-full-color.svg.png' alt='Scala Logo' />
          <div className='espacio'></div>

        </Carousel>
      </div>


      <div id='' className='form'>
        <p className='title'>
          Agenda tu reunión
        </p>
        <br />
        <div>
          <iframe
            src='https://outlook.office365.com/owa/calendar/FlowUpSolutions1@flowupsolutions.com/bookings/'
            width='100%'
            height='800'
            scrolling='yes'
            style={{ border: '0' }}  // Aquí se define el estilo como un objeto
          ></iframe>
        </div>

      </div>
    </div>
  )
}

export default Home;