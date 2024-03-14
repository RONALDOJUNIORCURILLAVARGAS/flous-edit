import { useState } from "react";
import logo from "../../assets/logo/logo-white.svg";
import logodesktop from "../../assets/logo.png"
import "./menu.css";
import { useEffect } from "react";

function Menu() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setshowMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed block md:hidden  bg-blue-flous p-[20px] text-white flex  justify-center w-full z-[3]">
        <button onClick={()=>{setshowMenu(!showMenu)}} className="bg-red  absolute translate-y-[-50%] top-[50%] right-[20px]">
          &#9776;
        </button>
        <div className="">
          <img src={logo} alt="logo" className="logo-img w-[150px]" />
        </div>
        
      </div>
      <div className={`w-screen block md:hidden flex flex-col justify-between  text-white px-[20px] py-[50px] bg-blue-flous fixed z-[5] h-screen duration-200
       ${showMenu?'right-0':'right-[100vw]'}
      `}>
        {/* SECCION DE CONTINDO DE MENU MOBILE */}
        <div>
          <div className="flex justify-between">
            <div className="text-[40px]">
              {" "}
              <a href="/#" className="flex items-center " >
                <div className="logo">
                  <img src={logo} alt="logo" className="logo-img w-[150px]" />
                </div>
              </a>
            </div>
            <button class="text-white hover:text-gray-300" onClick={()=>{setshowMenu(!showMenu)}}>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="flex flex-col  gap-[15px] mt-[30px]">
             

              <li class="has-child">
                <a aria-haspopup="true" className="text-3xl" href="#">
                  <b>Servicios</b>
                </a>
                <ul className="flex flex-col  gap-[8px] pl-[10px] mt-[10px]">
                  <li>
                    <a href="/#/business-intelligence" className="w-full block">
                      {" "}
                      Business intelligence
                    </a>
                  </li>
                  <li>
                    <a href="/#/power-platform" className="w-full block">
                      Power apps
                    </a>
                  </li>
                  <li>
                    <a href="/#/ux-ui" className="w-full block">
                      {" "}
                      UX / UI
                    </a>
                  </li>
                  <li>
                    <a href="/#/desarrollo-software" className="w-full block">
                      Desarrollo software
                    </a>
                  </li>
                </ul>
              </li>

              <li className="">
                <a href="/#/nosotros" className="text-3xl">
                  <b>Nosotros</b>
                </a>
              </li>
              <li className="">
                <a
                  href="https://api.whatsapp.com/send?phone=51991316320&text=Hola%F0%9F%91%8B,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20..."
                  target="_blank"
                  className="text-3xl"
                >
                  <b>Contáctenos</b>
                </a>
              </li>
              <li className="">
                <a
                  href="https://outlook.office365.com/owa/calendar/FlowUpSolutions1@flowupsolutions.com/bookings/"
                  target="_blank"
                  className="text-3xl"
                >
                  <b>Agendar reunión</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* BOTOM MENO MOBILE */}
        <div className="">
          <div className="flex justify-center gap-[15px] ">
            <a
              href="https://www.facebook.com/profile.php?id=61554718285482&amp;locale=es_LA"
              target="_blank"
            >
              <img
                src="/static/media/facebook.178f497aa17b70c42df2a1a8c926ed01.svg"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/company/flow-up-solutions/?viewAsMember=true"
              target="_blank"
            >
              <img
                src="/static/media/linkedin.721d5414c26365f117e71d46b6641cb2.svg"
                alt=""
              />
            </a>
          </div>
          <div className="mt-[30px] text-center ">Términos y condiciones</div>
        </div>
      </div>

      {/* BARRA MOBILE ARRIBA */}
      <div
        id="topnav-outside"
        expand="md"
        className={`${scrolled ? "scrolled" : ""} `}
      >
        <div id="topnav-intside">
          <div class="bofollowbutton-nav"></div>

          <div id="bonav" role="navigation">
            <a href="#bonav" title="Show navigation">
              &#9776; Show Menu mobile
            </a>
            <a href="#" title="Hide navigation">
              &#9776; Hide Menu modile
            </a>
            <ul>
              <li class="home-icon"></li>

              <li>
                <a href="/#" className="flex items-center">
                  <div className="logo">
                    <img src={logodesktop} alt="logo" className="logo-img" />
                  </div>
                </a>
              </li>

              <li class="has-child">
                <a aria-haspopup="true" href="#">
                  Servicios
                </a>
                <ul>
                  <li>
                    <a href="/#/business-intelligence" className="w-full block">
                      {" "}
                      Business intelligence
                    </a>
                  </li>
                  <li>
                    <a href="/#/power-platform" className="w-full block">
                      Power apps
                    </a>
                  </li>
                  <li>
                    <a href="/#/ux-ui" className="w-full block">
                      {" "}
                      UX / UI
                    </a>
                  </li>
                  <li>
                    <a href="/#/desarrollo-software" className="w-full block">
                      Desarrollo software
                    </a>
                  </li>
                </ul>
              </li>

              <li className="flex justify-center items-center ease-in duration-75 hover:text-[18px]">
                <a href="/#/nosotros">Nosotros</a>
              </li>
              <li className="flex justify-center items-center ease-in duration-75 hover:text-[18px]">
                <a
                  href="https://api.whatsapp.com/send?phone=51991316320&text=Hola%F0%9F%91%8B,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20..."
                  target="_blank"
                >
                  Contáctenos
                </a>
              </li>
              <li className="flex justify-center items-center ease-in duration-75 hover:text-[18px]">
                <a
                  href="https://outlook.office365.com/owa/calendar/FlowUpSolutions1@flowupsolutions.com/bookings/"
                  target="_blank"
                >
                  Agendar reunión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
