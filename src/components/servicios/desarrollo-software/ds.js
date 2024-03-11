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
            href="https://api.whatsapp.com/send?phone=51991316320&text=Flous"
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
          href="https://api.whatsapp.com/send?phone=51991316320&text=Flous"
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

        <div className="sect2">
          <img className="desarrollo w-full md:mx-auto" src={metodologia2} />
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
