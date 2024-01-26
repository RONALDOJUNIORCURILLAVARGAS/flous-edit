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
        <br/>
        <br/>
        <div className="servicios servi-inicio">
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

        <br />
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
          autoplaySpeed={1950}
          centerMode={true}
          centerPadding={0}
          swipe={false}
        >
          <img className='img-socios'  src='https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png' alt='Java Logo' />
          <div></div>

          <img  className='img-socios' src='https://miro.medium.com/v2/resize:fit:399/1*-5k3wiB9V0Yczp9JoBODSA.png' alt='Logo' />
          <div className='espacio'></div>

          <img  className='img-socios' src='https://media.licdn.com/dms/image/D4D12AQHxJEfCMmvqVw/article-cover_image-shrink_720_1280/0/1681895099008?e=2147483647&v=beta&t=Gjwwy8sqx8hUgHEc_AkNWlnfGlPxhBLjt4CBxMwwVPA' alt='Logo' />
          <div className='espacio'></div>

          <img  className='img-socios' src='https://dwglogo.com/wp-content/uploads/2017/09/1300px-Scala_logo.png' alt='Scala Logo' />
          <div className='espacio'></div>

          <img  className='img-socios' src='https://s3-alpha.figma.com/hub/file/2811018019/cae7d25d-8aff-4c49-8189-fad585dfb7cb-cover.png' alt='Logo' />
          <div className='espacio'></div>

          <img className='img-socios'  src='https://1000marcas.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo.png' alt='Microsoft Power BI Logo' />
          <div className='espacio'></div>

          <img className='img-socios'  src='https://media.licdn.com/dms/image/D4D12AQHxJEfCMmvqVw/article-cover_image-shrink_720_1280/0/1681895099008?e=2147483647&v=beta&t=Gjwwy8sqx8hUgHEc_AkNWlnfGlPxhBLjt4CBxMwwVPA' alt='Logo' />
          <div className='espacio'></div>

          <img  className='img-socios' src='https://dwglogo.com/wp-content/uploads/2017/09/1300px-Scala_logo.png' alt='Scala Logo' />
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