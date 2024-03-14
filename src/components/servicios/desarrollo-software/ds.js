import React from "react";
import "./ds.css";
import ds from "../../../assets/desarrollo-software.jpg";
import metodologia from "../../../assets/desarrollo-soft.png";

import metodologia1 from "../../../assets/desarrollo-soft1.png";
import metodologia2 from "../../../assets/desarrollo-soft2.png";
import gift from "../../../assets/gifts/sofwre_diagrama.gif";
import iconWhat from "../../../assets/icon-what.png";

function DesarrolloS() {
  return (
    <div>
      <div className="banner">
        <div className="texto">
          <p>Desarrollo de software </p>
          <br />
          <div>
            Nos destacamos en el campo del desarrollo de software,
            focalizándonos principalmente en entornos de programación como
            Microsoft. NET (somos socios Silver de Microsoft en Desarrollo de
            Aplicaciones), Java y Delphi.
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

        <div className="imagen-fondo-ds  hidden md:block">
          <img src={ds} className="ml-[50%] translate-x-[-50%]" />
        </div>
        <a
          className="iconWhat"
          href="https://api.whatsapp.com/send?phone=51991316320&text=Hola%F0%9F%91%8B,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20..."
          target="_blank"
        >
          <img src={iconWhat} alt="Descripción de la imagen" width={90} />
        </a>
      </div>

      <div className="px-[20px] py-[20px] flex flex-col gap-[20px]  max-w-6xl mx-auto md:px-0">
        <div className="sect2 sect2-ds ">
          <img className="desarrollo w-full md:mx-auto" src={metodologia} />
        </div>

        <div className="sect2">
          <img className="desarrollo w-full md:mx-auto" src={metodologia1} />
        </div>

        <div className="sect2 mt-[40px] grid-cols-2 md:grid md:grid-cols-2 gap-[24px]">
          <img className="desarrollo w-full md:mx-auto" src={metodologia2} />
          <div className="flex flex-col gap-[20px] mt-[30px] md:mt-0">
            <div>
              <h3 className="text-blue-flous text-[32px] font-bold tracking-[-.025em] ">
                Desarrollo de Aplicaciones
              </h3>
              <p className="text-justify text-blue-flous">
                Nuestro equipo de programadores crean apliaciones excepcionales
                para una amplia gama de dispositivoos. Y ello gracias a nuestra
                experiencia en la industria, brindamos al usuario la mejor
                experiencia de aplicación a través de diversos canales.
              </p>
            </div>
            <div>
              <h3 className="text-blue-flous text-[32px] font-bold tracking-[-.025em]">
                Desarrollo Bajo Demanda
              </h3>
              <p className="text-justify text-blue-flous">
                Elija nuestro equipo para el desarrollo de software bajo demanda
                y obtenga flexibilidad, experiencia y calidad inigualables.
                Nuestra colaboración transparente, respaldada por tecnología
                avanzada, asegura soluciones adaptadas a sus necesidades. Con
                nosotros, tendrá un socio confiable para el éxito a largo plazo
                de su proyecto.
              </p>
            </div>
            <div>
              <h3 className="text-blue-flous text-[32px] font-bold tracking-[-.025em]">
                Soporte de Producto
              </h3>
              <p className="text-justify text-blue-flous">
                Estamos asociados con otros líderes de la industria para
                implementar soluciones de desarrollo de software personalizado
                de calidad para nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="" className="sect3">
        <div className=" texto text-footer max-w-6xl mx-auto text-center px-[20px] md:px-0">
          <br />
          <br />
          <br />
          <br />
          <p>¿Una idea innovadora en mente?</p>
          <br />
          <div>
            Desarrollamos soluciones de software a medida que hacen realidad tus
            visiones. Descubre cómo podemos transformar tus ideas en productos
            excepcionales. ¡Haz que tu visión cobre vida con nuestro servicio de
            desarrollo de software!
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

export default DesarrolloS;
