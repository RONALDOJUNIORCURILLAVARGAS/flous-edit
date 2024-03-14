import React from "react";
import "./ux-ui.css";
import uxui from "../../../assets/ux-ui1.png";
import responsive from "../../../assets/responsive.png";
import iconWhat from "../../../assets/icon-what.png";

function UxUi() {
  return (
    <div>
      <div className="banner">
        <div className="texto">
          <p>Fortalece la presencia digital de tu marca </p>
          <br />
          <div className="px-[20px] md:p-0">
            Diseñamos experiencias digitales personalizadas y eficaciones para
            potenciar la posición de las empresas en el mercado. Tu página web
            debe estar lista para ser el epicentro de tu marca en el entorno
            digital.{" "}
          </div>
          <br /> <br /> <br />{" "}
          <a
            className="buttom"
            href="https://api.whatsapp.com/send?phone=51991316320&text=Hola%F0%9F%91%8B,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20..."
            target="_blank"
          >
            Comienza tu proyecto!!
          </a>
        </div>

        <div className="imagen-fondo-ux md:w-[1095px]">
          <img className="mx-auto" src={uxui} />
        </div>

        <a
          className="iconWhat"
          href="https://api.whatsapp.com/send?phone=51991316320&text=Hola%F0%9F%91%8B,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20..."
          target="_blank"
        >
          <img src={iconWhat} alt="Descripción de la imagen" width={90} />
        </a>
      </div>
      <br />
      <br />
      <br />

      <div className="sect2 sect2-ui nuevo-ui px-[20px] md:px-0 max-w-6xl mx-auto ">
        <p className="title">Servicios de diseño UI/UX</p>
        <br />
        <span>
          Más de millones de usuarios automatizan sus empresas mejorando los
          procesos de negocio.
        </span>
        <div className="descipcion-ux-ui flex flex-col md:flex-row md:justify-between md:gap-[124px]">
          <div className="ui w-full">
            <p>Servicios de diseño UI</p>
            <div className="text-justify bg-gray-flous p-[15px]">
              <span>
                Desde el inicio de un proyecto hasta su finalización, estamos
                preparados para aportar nuevas soluciones. Gestionamos todo el
                diseño visual, la maquetación de interfaz, las animaciones, la
                paleta y otros aspectos gráficos. Proporcionamos a su aplicación
                no solo el aspecto, sino también el estilo, será un placer usar
                la aplicación
              </span>
            </div>
          </div>

          <div className="ux w-full">
            <p>Servicios de diseño UX</p>
            <div className="text-justify bg-gray-flous p-[15px]">
              <span>
                Nuestros expertos optimizan la estructura de nuestro software
                haciendo que el producto final sea lo más fácil posible de usar.
                A partir de un boceto, construimos páginas y pantallas con una
                estructura intuitiva basada en el propósito del producto y el
                comportamiento de usuarios.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sect2 sect2-ui-ux px-[20px] md:px-0 max-w-6xl mx-auto">
        <p className="title">Diseño de páginas web que transforman marcas</p>
        <br />

        <span>
          Más de millones de usuarios automatizan sus empresas mejorando los
          procesos de negocio.
        </span>
        <div className="descipcion-ux-ui grid grid-cols-1 md:grid-cols-2">
          <div className="ui">
            <p>1. Análisis de marca</p>
            <span>
              Evaluación y diagnóstico de la marca, identidad visual, web actual
              y benchmarketing digital.
            </span>
            <br />
            <br />
            <img
              className="w-full md:w-[90%] md:m-auto"
              src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>

          <div className="ux">
            <p>2. Estrategia de marca</p>
            <span>
              Nuestro plan para proyectos web implica planificar la arquitectura
              de contenido y las maquetas de la interfaz de usuario.
            </span>
            <br />
            <br />
            <img
              className="w-full  md:w-[90%] md:m-auto"
              src="https://images.unsplash.com/photo-1524749292158-7540c2494485?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>

        <div className="descipcion-ux-ui grid grid-cols-1 md:grid-cols-2">
          <div className="ui">
            <p>3. Identidad de marca</p>
            <span>
              Diseñamos la interfaz basados en el branding de la marca, tenemos
              en cuenta las diferentes resoluciones de pantalla en la que se
              mostrará el sitio web.
            </span>
            <br /> <br />
            <img
              className="w-full object-cover md:max-h-[361px] md:w-[90%] md:m-auto"
              src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>

          <div className="ux">
            <p>4. Activación de marca</p>
            <span>
              Determinamos la plataforma adecuada y optimizamos al máximo sus
              herramientas para obtener los mejores resultados en funcionalidad
              y posicionamiento SEO, cuidamos cada detalle para una mejor
              experiencia.
            </span>
            <br />
            <br />
            <img
              className="w-full  md:w-[90%] md:m-auto"
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>

      <div className="sect2 px-[20px] md:px-0 max-w-6xl mx-auto flex flex-col items-center text-center mb-[30px]">
        <p className="title">Responsive web aplicación</p>

        <img className="img-ux" src={responsive} />
        <br />
        <a
          className="buttom-ux"
          href="https://api.whatsapp.com/send?phone=51991316320&text=Hola%F0%9F%91%8B,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20..."
          target="_blank"
        >
          Más información
        </a>
      </div>

      <div id="" className="sect3">
        <div className=" texto text-footer max-w-6xl mx-auto text-center px-[20px] md:px-0">
          <br />
          <br />
          <br />
          <br />
          <p>¿Tienes una gran idea?</p>
          <br />
          <div>
            Queremos ofrecerte la solución más óptima para el desarrollo de tu
            aplicativo
          </div>
          <br /> <br /> <br />{" "}
          <a
            className="buttom"
            href="https://outlook.office365.com/owa/calendar/FlowUpSolutions1@flowupsolutions.com/bookings/"
            target="_blank"
          >
            ¡Comienza tu proyecto!
          </a>
        </div>
      </div>
    </div>
  );
}

export default UxUi;
