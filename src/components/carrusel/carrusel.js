import React, { useEffect, useState } from 'react';
import Carousel from 'infinite-react-carousel';
import "./carrusel.css"
import img1 from '../../assets/piero.png'
import img2 from '../../assets/jony.png'
import img3 from '../../assets/jordi.png'

const Carrusel = () => {

  const [slidesToShow, setSlidesToShow] = useState(3);

  const handleResponsive = () => {
    // Obtén el ancho de la ventana
    const windowWidth = window.innerWidth;

    // Ajusta slidesToShow según el ancho de la ventana
    if (windowWidth > 1000) {
      setSlidesToShow(3);
    } else if (windowWidth <= 1000 && windowWidth > 800) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    // Escucha el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResponsive);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResponsive);
    };
  }, []);


  const data = [
    {
      "imagen": img3,
      "nombre": "JORDI ESTEBAN",
      "funcion": "Founder & CEO",
      "descripcion": "La implementación de soluciones de Business Intelligence ha sido reveladora. Ahora, con datos precisos y análisis en tiempo real, hemos mejorado la toma de decisiones y la planificación estratégica. ¡Flous es un socio confiable en nuestro viaje hacia la excelencia!   "
    },
    {
      "imagen": img2,
      "nombre": "JONY BULLÓN",
      "funcion": "",
      "descripcion": "La eficacia del software no solo aceleró nuestras operaciones, sino que también revitalizó nuestro equipo. Ver a mis empleados más felices y menos estresados es invaluable. Esto va más allá de la tecnología; es sobre mejorar la calidad de vida de todos nosotros. Gracias a Flous"
    },
    {
      "imagen": img1,
      "nombre": "PIERO RAMOS",
      "funcion": "Director Comercial",
      "descripcion": "El desarrollo de software no solo mejoró la eficiencia interna, sino que también fortaleció nuestra relación con los clientes. Ahora, cada interacción en nuestro sitio web es fluida y atractiva. Estamos agradecidos con FLOUS por cómo han elevado nuestra marca digital   "
    }

  ]

  return (
    <div className='carrusel'>
      <Carousel
        autoplay={true}
        slidesToShow={slidesToShow}
        className="carru"
        autoplaySpeed={1500}
      >
        {/* aqui el codifo  */}

        {data.map((item, index) => (
          <div key={index} className='card'>

            <div
              className='card-content'
              style={{
                borderRadius: '15px',
                padding: '10px',
                margin: '10px',
                marginTop: '50px'
              }}
            >
             {/*  <img
                src={item.imagen}
                alt={item.nombre}
                style={{
                  width: '50%',
                  objectFit: 'cover',
                  borderRadius: '5px',
                  height: '150px',
                  marginTop: '-50px'
                }}
              /> */}
              <br />
              <br />
              <div className='descrip-carrusel'>
                <h3 style={{ color: 'white' }}>{item.nombre}</h3>
              </div>
              <p style={{ color: 'white', textAlign: 'justify', padding: '0 20px' }}>{item.descripcion}</p>
            </div>
          </div>
        ))}

      </Carousel>
    </div>
  );
};

export default Carrusel;
