import logoBlanco from "../../assets/logo-blaco.png";
import logo from "../../assets/logo/logo-white.svg";
import "./footer.css";
import navIcon1 from "../../assets/svg/facebook.svg";
import navIcon2 from "../../assets/svg/linkedin.svg";

function Footer() {
  return (
    <div className="footer px-[20px] md:px-0 pb-[20px]">
      <div className="footer-detalle max-w-6xl mx-auto py-[50px] md:grid md:grid-cols-3 gap-4">
        <div className="detalle-foo text-start">
          <img src={logo} alt="logo" className="logo-img w-[150px]" />
          <p className="mt-[20px]">
            Our mission is to redefine business possibilities by leveraging
            technology as a catalyst for innovation and growth.
          </p>
        </div>

        <div className="detalle-foo text-start mt-[20px] md:mt-0">
          <h2 className="font-bold text-[20px]">Servicios</h2>
          <div className="flex flex-col gap-[10px]">
            <a href="https://www.ejemplo.com">Inicio</a>
            <a href="#servicios1">Servicios</a>
            <a href="https://bit.ly/4arqpzp">Nosotros</a>
            <a href="https://bit.ly/4arqpzp">Contáctenos</a>
          </div>
        </div>

        <div className="detalle-foo text-start mt-[20px] md:mt-0 flex flex-col gap-[6px]">
          <h2 className="font-bold text-[20px]">Contáctanos</h2>
          <div>
            <span> admin@flowupsolutions.com</span>
          </div>

          <div>
            <span>+51 991316320 </span>
          </div>

          <div className="flex gap-[20px] md:gap-[14px] mt-[12px]">
            <a
              href="https://www.facebook.com/profile.php?id=61554718285482&locale=es_LA"
              target="_blank"
            >
              <img src={navIcon1} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/company/flow-up-solutions/?viewAsMember=true"
              target="_blank"
            >
              <img src={navIcon2} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div> @2023 Flous - Todos los derechos reservados</div>
    </div>
  );
}

export default Footer;
