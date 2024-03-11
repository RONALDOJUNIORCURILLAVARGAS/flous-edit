import React, { useEffect, useState } from "react";
import "./inicio.css";
import Carrusel from "./carrusel/carrusel";
import Carousel from "infinite-react-carousel";
import { Link } from "react-router-dom";
import iconWhat from "../assets/icon-what.png";
import fondoMetodologia from "../assets/metodologia.png";
function Home() {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const handleResponsive = () => {
    // Obtén el ancho de la ventana
    const windowWidth = window.innerWidth;

    // Ajusta slidesToShow según el ancho de la ventana
    if (windowWidth > 1000) {
      setSlidesToShow(4);
    } else if (windowWidth <= 1000 && windowWidth > 800) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(2);
    }
  };
  useEffect(() => {
    // Escucha el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResponsive);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResponsive);
    };
  }, []);

  return (
    <div className="App">
      <div className="home mt-[30px] md:mt-0">
        {/* banner */}
        <div className="banner1">
          <div className="descripcion">
            <p>
              Datos complejos, soluciones simples: nuestros compromiso contigo.
            </p>
            <span className="slogan">
              {" "}
              Proporcionar soluciones innovadores diseñadas para impulsar el
              crecimiento sostenible y el éxito durante de tu empresa
            </span>
            <br /> <br /> <br />{" "}
            <a
              className="buttom"
              href="https://api.whatsapp.com/send?phone=51991316320&text=Flous"
              target="_blank"
            >
              Contáctenos
            </a>
          </div>
          <div className="fondo"></div>
          <a
            className="iconWhat"
            href="https://api.whatsapp.com/send?phone=51991316320&text=Flous"
            target="_blank"
          >
            <img src={iconWhat} alt="Descripción de la imagen" width={90} />
          </a>
        </div>
      </div>
      <div id="servicios1" className="servicios1">
        <p className="title">Servicios</p>

        <div className="servicios servi-inicio mt-[20px] md:mt-[30px] px-[20px] md:px-0 grid  grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="dis p-[20px] text-center justify-center flex flex-col justify-between gap-[10px]">
            <div>
              <p>Desarrollo software</p>
              <span>
                {" "}
                Análisis de datos mediante Power BI y automatizar procesos para
                la productividad de tu negocio
              </span>
            </div>

            <Link className="agendar-reu" to="/desarrollo-software">
              Contáctenos
            </Link>
          </div>
          <div className="dis p-[20px] text-center justify-center flex flex-col justify-between gap-[10px]">
            <div>
              <p>Business intelligence</p>
              <span>
                Automatización de creación de reportes y permite tomar
                decisiones empresariales{" "}
              </span>
            </div>

            <Link className="agendar-reu" to="/business-intelligence">
              Contáctenos
            </Link>
          </div>
          <div className="dis p-[20px] text-center justify-center flex flex-col justify-between gap-[10px]">
            <div>
              <p>Power apps</p>
              <span>
                Autmatiza tus procesos operativos con software robotizado
              </span>
            </div>

            <Link className="agendar-reu" to="/power-platform">
              Contáctenos
            </Link>
          </div>
          <div className="dis p-[20px] text-center justify-center flex flex-col justify-between gap-[10px]">
            <div>
              <p>UX / UI</p>
              <span>
                Optimización de aplicaciones y pagina web para lograr una
                interaccion amigable
              </span>
            </div>

            <Link className="agendar-reu" to="/ux-ui">
              Contáctenos
            </Link>
          </div>
        </div>
      </div>
      <div id="" className="testimonios mt-[40px]">
        <div className="max-w-6xl mx-auto px-[20px] md:px-0">
          <p className="title">Clientes que confiaron en nosotros</p>

          <div className="text-center mt-[15px] md:mt-[20px] mb-[15px] md:mb-[30px]">
            <span> Sé parte del cambio y lleva a tu empresa al éxito</span>
          </div>

          <Carrusel className="" />
        </div>
      </div>

      <div id="" className="metodologias mt-[40px] px-[20px] md:px-0 ">
        <div className="max-w-6xl mx-auto px-[0px] md:px-0">
          <p className="title">Nuestra metodología</p>
          <div className="mt-[20px]">
            <img className="w-full" src={fondoMetodologia}></img>
          </div>
        </div>
      </div>

      <div id="" className="socios">
        <p>Nuestros socios tecnológicos</p>
        <br />
        <br />
        <Carousel
          autoplay={true}
          slidesToShow={slidesToShow}
          className="carru carousel-socios"
          autoplaySpeed={1950}
          centerMode={true}
          centerPadding={0}
          swipe={false}
        >
          <div className="px-[5px]">
            <div className="p-[5px] bg-gray-flous flex items-center justify-center rounded-[10px]">
              <img
                className="h-[80px]"
                src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png"
                alt="Java Logo"
              />
            </div>
          </div>

          <div className="px-[5px]">
            <div className="p-[5px] bg-gray-flous flex items-center justify-center rounded-[10px]">
              <img
                className="h-[80px]"
                src="https://miro.medium.com/v2/resize:fit:399/1*-5k3wiB9V0Yczp9JoBODSA.png"
                alt="Logo"
              />
            </div>
          </div>

          <div className="px-[5px]">
            <div className="p-[5px] bg-gray-flous flex items-center justify-center rounded-[10px]">
              <img
                className="h-[80px]"
                src="https://media.licdn.com/dms/image/D4D12AQHxJEfCMmvqVw/article-cover_image-shrink_720_1280/0/1681895099008?e=2147483647&v=beta&t=Gjwwy8sqx8hUgHEc_AkNWlnfGlPxhBLjt4CBxMwwVPA"
                alt="Logo"
              />
            </div>
          </div>

          <div className="px-[5px]">
            <div className="p-[5px] bg-gray-flous flex items-center justify-center rounded-[10px]">
              <img
                className="h-[80px]"
                src="https://dwglogo.com/wp-content/uploads/2017/09/1300px-Scala_logo.png"
                alt="Scala Logo"
              />
            </div>
          </div>

          <div className="px-[5px]">
            <div className="p-[5px] bg-gray-flous flex items-center justify-center rounded-[10px]">
              <img
                className="h-[80px]"
                src="https://s3-alpha.figma.com/hub/file/2811018019/cae7d25d-8aff-4c49-8189-fad585dfb7cb-cover.png"
                alt="Logo"
              />
            </div>
          </div>

          <div className="px-[5px]">
            <div className="p-[5px] bg-gray-flous flex items-center justify-center rounded-[10px]">
              <img
                className="h-[80px]"
                src="https://1000marcas.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo.png"
                alt="Microsoft Power BI Logo"
              />
            </div>
          </div>

          <div className="px-[5px] ">
            <div className="p-[5px] bg-gray-flous flex items-center justify-center rounded-[10px]">
              <img
                className="h-[80px]"
                src="https://media.licdn.com/dms/image/D4D12AQHxJEfCMmvqVw/article-cover_image-shrink_720_1280/0/1681895099008?e=2147483647&v=beta&t=Gjwwy8sqx8hUgHEc_AkNWlnfGlPxhBLjt4CBxMwwVPA"
                alt="Logo"
              />
            </div>
          </div>

          <div className="px-[5px] ">
            <div className="p-[5px] bg-gray-flous flex items-center justify-center rounded-[10px]">
              <img
                className="h-[80px]"
                src="https://dwglogo.com/wp-content/uploads/2017/09/1300px-Scala_logo.png"
                alt="Scala Logo"
              />
            </div>
          </div>
        </Carousel>
      </div>

      <div id="" className="form">
        <p className="title">Agenda tu reunión</p>
        <br />
        <div>
          <iframe
            src="https://outlook.office365.com/owa/calendar/FlowUpSolutions1@flowupsolutions.com/bookings/"
            width="100%"
            height="800"
            scrolling="yes"
            style={{ border: "0" }} // Aquí se define el estilo como un objeto
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
