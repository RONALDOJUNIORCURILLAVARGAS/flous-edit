import React from "react";
import './nosotros.css'
import iconWhat from '../../assets/icon-what.png'
import mision from '../../assets/svg/4312965eternaleyeopticorganvision-115887_115833.svg'
import vision from '../../assets/svg/creativity_innovation_brainstorming_inspiration_vision_icon_260962.svg'
function Nosostros() {

    return (
        <div className="card-nosotros">
            <div className="header-nosotros">
                

                <a className='iconWhat' href="https://api.whatsapp.com/send?phone=51991316320&text=Hola%F0%9F%91%8B,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20..." target="_blank">
                    <img src={iconWhat} alt="Descripción de la imagen" width={90} />
                </a>
            </div>
            <br />
            <div className="max-w-6xl mx-auto text-center px-[20px] md:px-0">
                <div className="p-[50px] bg-gray-mision-vision rounded-[20px]">
                    <p className="text-blue-mision-vision text-[50px] font-impact-mision-vision">
                        Acerca de nosotros
                    </p>
                    <br />
                    <span>
                        Somos un equipo apasionado de profesionales expertos en transformación digital e ingeniería de datos, comprometidos con la innovación y el éxito empresarial. Con sede en Perú, nuestra empresa se destaca por ofrecer soluciones vanguardistas y personalizadas que impulsan la evolución tecnológica de nuestros clientes.

                        Nuestro enfoque se basa en comprender a fondo las necesidades y desafíos de cada cliente para ofrecer estrategias y soluciones a medida. Nos respalda una amplia experiencia en la implementación de proyectos de transformación digital en diversos sectores, lo que nos permite ofrecer un valor diferenciado y resultados tangibles.

                        En Flous, valoramos la colaboración, la creatividad y la excelencia en cada proyecto que emprendemos. Estamos comprometidos con la constante innovación y el aprendizaje para ofrecer siempre servicios de la más alta calidad, convirtiéndonos en socios de confianza para impulsar el éxito y el crecimiento sostenible de nuestros clientes en la era digital
                    </span>
                </div>
                    
                </div>
            <div className="mision-vision mt-[40px] max-w-6xl mx-auto text-center px-[20px] md:px-0 flex flex-col  md:grid  md:grid-cols-2 gap-[20px] md:gap-[50px]">
                <div className="mision p-[50px]">
                    <p>
                        <img src={mision} width={60}  style={{marginRight: '10px'}}/>
                        Misión
                    </p>
                    <br />
                    <span>
                        En Flous, nuestra misión es acompañar a las empresas en su viaje hacia la excelencia digital, ofreciendo soluciones integrales de transformación y optimización basadas en la innovación y la ingeniería de datos. Nos comprometemos a entender las necesidades únicas de cada cliente y a proporcionar servicios de calidad que impulsen su crecimiento, eficiencia y competitividad en el entorno digital actual. Buscamos ser socios estratégicos, brindando asesoramiento experto y soluciones a medida que permitan a nuestros clientes alcanzar su máximo potencial en un mundo digital en constante evolución

                    </span>
                </div>
                <div className="mision p-[50px]">
                    <p>
                    <img src={vision} width={80} style={{marginRight: '10px'}}/>
                        Visión
                    </p>
                    <br />
                    <span>
                        nuestra visión es liderar la revolución digital en Perú, transformando la forma en que las empresas operan y utilizan la tecnología. Nos esforzamos por ser pioneros en la entrega de soluciones innovadoras en transformación digital e ingeniería de datos, impulsando el crecimiento y la eficiencia de nuestros clientes. Buscamos ser reconocidos como un referente en la región, destacando por nuestra excelencia, creatividad y compromiso con la evolución tecnológica sostenible y orientada al éxito empresarial.
                    </span>
                </div>
            </div>
            <br />

            <div id='' className="sect3">
                <div className=" texto text-footer max-w-6xl mx-auto text-center px-[20px] md:px-0">
                    <br />
                    <br />

                    <br />
                    <br />

                    <p>
                        ¿Necesitas ayuda?
                        Empecemos una conversación</p>
                    <br />

                    <div>
                        Somos expertos migrar a una transformación digital y optimizar tu negocio
                    </div>
                    <br /> <br />  <br /> <a className='buttom' href="https://api.whatsapp.com/send?phone=51991316320&text=Hola%F0%9F%91%8B,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20..." target="_blank">¡Comienza tu proyecto!</a>
                </div>
            </div>
        </div>
    )
}

export default Nosostros;