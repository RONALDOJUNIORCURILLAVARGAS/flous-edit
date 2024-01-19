import React, { useEffect, useState } from 'react';
import Carousel from 'infinite-react-carousel';
import "./carrusel.css"
import data from "../../data/comentarios.json"
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
              <img
                src={item.imagen}
                alt={item.nombre}
                style={{
                  width: '50%',
                  objectFit: 'cover',
                  borderRadius: '5px',
                  height: '150px',
                  marginTop: '-50px'
                }}
              />
              <br/>
              <br/>
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
