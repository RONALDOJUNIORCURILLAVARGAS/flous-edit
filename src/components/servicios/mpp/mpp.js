

import './mpp.css'
import mpp from '../../../assets/mpp.png';
import img from '../../../assets/svg/apps.svg'
import videoFile from "../../../assets/video/Geconsac.mp4"
import { useState } from 'react';
function Mpp() {
    const [mostrarDiv, setMostrarDiv] = useState('data');

    const mostrarContenido = (nombreDiv) => {
        setMostrarDiv(nombreDiv);
    };

    return (
        <div>
            <div className="banner">
                <div className="texto">
                    <p>
                        Microsoft Power
                        Plataform  </p>
                    <br />

                    <div>
                        Adéntrate en las soluciones ofrecidas por Microsoft Power Platform,
                        especialmente diseñadas para empresas, y descubre las diversas
                        oportunidades que brindan. Desde analizar datos con Power BI hasta
                        desarrollar aplicaciones con PowerApps, automatizar flujos de trabajo
                        con Power Automate y conectar con clientes mediante Power Virtual
                        Agents.
                    </div>
                    <br /> <br />  <br /> <a className='buttom' href="https://api.whatsapp.com/send?phone=51991316320&text=Flous" target="_blank">Comienza tu proyecto!!</a>
                </div>

                <div className="imagen-fondo">
                    <img src={mpp} />
                </div>
            </div>


            <div className='sect2 sect2-app'>
                <p className='title'>
                    ¿Qué solución digital necesitas?
                </p>
                <br /> <br />
                <img className='svg' src={img} />
                <div className="content">
                   


                </div>
            </div>


            <div className='sect2 sect-2-2'>
                <p className='title'>
                    Busca la solución que más te acomoda
                </p>

                <p className='p p2'>
                    En Flous tenemos diferentes soluciones basadas en múltiples herramientas e industrias. Nuestras soluciones se basan en las herramientas de Microsoft 365 como Power BI, Power Apps, SharePoint, Power Automate y otras, además contamos con soluciones a medida basadas en Azure u otros cloud que son definidas por las necesidades de nuestros clientes:
                </p>

                <span className='p p2'>Actualmente clasificamos las soluciones en las siguientes categorías:</span>
                <div className="content2">
                    <button className='p-b' onClick={() => mostrarContenido('portales')}>Portales</button>
                    <button className='p-b' onClick={() => mostrarContenido('transformacion-digital')}>Transformación digital</button>
                    <button className='p-b' onClick={() => mostrarContenido('desarrollo')}>Desarrollo a medida</button>
                    <button className='p-b' onClick={() => mostrarContenido('migracion')}>Migración en la nube</button>

                </div>
                <div className="content2">
                    <button className='p-b' onClick={() => mostrarContenido('data')}>Data</button>
                    <button className='p-b' onClick={() => mostrarContenido('analitica-data')}>Analitica de datos</button>
                    <button className='p-b' onClick={() => mostrarContenido('app-process')}>Apps y procesos</button>
                    <button className='p-b' onClick={() => mostrarContenido('seguridad')}>Seguridad</button>
                </div>

                <br /><br />

                <div className={mostrarDiv === 'data' ? 'data' : 'oculto'}>
                    <div className="servicios servicio-mpp">
                        <div className=' dis-1'>
                            <p>Integración y orquestación de datos en ambiente cloud y on premise</p>
                            <span>Transforma y organiza la información en la nube o de los dispositivos de tu empresa para trabajar con más comodidad con tus equipos.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/desarrollo-software">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Administración de BBDD en la nube</p>
                            <span>Organiza tu empresa y la información privada y relevante para administrarla de tu mejor forma. Siempre en la nube.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/business-intelligence">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Migración de datos a Azure y a cualquier otra nube de datos</p>
                            <span>Deja toda la información de tu empresa en la nube de Microsoft, Azure o en la que sea de tu gusto, Traslada todo y organiza los datos desde un solo lugar y bajo tu administración.
                            </span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/power-platform">Más
                                información</a>
                        </div>



                    </div>
                </div>

                <div className={mostrarDiv === 'analitica-data' ? 'analitica-data' : 'oculto'}>
                    <div className="servicios servicio-mpp">
                        <div className=' dis-1'>
                            <p>Gobierno de Power BI</p>
                            <span>Mantén el control y protección de datos y el flujo de la misma. Mantén una potente toma de decisiones empresariales de un correcto análisis. </span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/desarrollo-software">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Informes y paneles de Power BI</p>
                            <span>Aprende a crear paneles dinámicos y con información en tiempo real sobre aquellos datos de la empresa.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/business-intelligence">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Análitica avanzada en Power BI</p>
                            <span>Vamos por más en el análisis de los datos comerciales y administrativos para una correcta toma de decisiones estratégicos.
                            </span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/power-platform">Más
                                información</a>
                        </div>



                    </div>
                </div>
                <div className={mostrarDiv === 'app-process' ? 'app-process' : 'oculto'}>
                    <div className="servicios servicio-mpp">
                        <div className=' dis-1'>
                            <p>Desarrollo aplicaciones Power Apps Canvas</p>
                            <span>Con un lienzo en blanco, diseña y crea las herramientas, aplicaciones o flujos que necesitas. Solo ajusta lo necesario y transforma el rendimiento de tu trabajo.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/desarrollo-software">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Desarrollo aplicaciones Power Apps Model Driven</p>
                            <span>Aplicaciones útiles con los componentes, formularios o flujos que necesitas. Lo último en tecnología intuitivo.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/business-intelligence">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Desarrollo de procesos con integraciones y desarrollo de aplicaciones móviles basadas en Xamarin.</p>
                            <span>Creamos el sistema, plataforma o aplicaciones que se necesite en integración a las herramientas o soportes favoritos. Así también, levantamos las apps móviles que requieres con el respaldo y soporte.
                            </span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/power-platform">Más
                                información</a>
                        </div>



                    </div>
                </div>
                <div className={mostrarDiv === 'seguridad' ? 'seguridad' : 'oculto'}>
                    <div className="servicios servicio-mpp">
                        <div className=' dis-1'>
                            <p>Implementación modelo Zero Trust</p>
                            <span>Aplicamos rigurosos controlos de identidad a los usuarios del sistema, con herramientas probadas y confiables.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/desarrollo-software">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Protección de identidad de usuarios</p>
                            <span>Cuida las aplicaciones de la nube, ejerciendo un control de datos y análisis sofisticado para identidad y atacar ciberamenazas.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/business-intelligence">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Protección de aplicaciones</p>
                            <span>Se aplica la gestión centralizada de dispositivos y aplicaciones móviles, para controlar cómo se utilizan los dispositivos de la organización
                            </span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/power-platform">Más
                                información</a>
                        </div>



                    </div>
                </div>

                <div className={mostrarDiv === 'portales' ? 'portales' : 'oculto'}>
                    <div className="servicios servicio-mpp">
                        <div className=' dis-1'>
                            <p>Sitio web</p>
                            <span>En la era de organización, un sitio web funcional  y atractivo es la puerta de entrada a clientes y más usuarios.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/desarrollo-software">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Intranet / Extranet</p>
                            <span>Como toda empresa se debe de estar actualizados y tener portales modernos para sus trabajadores y colaboradores. Haz que tus colaboradores externos tengan una plataforma digital para interactuar.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/business-intelligence">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Portales</p>
                            <span> Organiza y presenta toda la información y proyectos, en un espacio definido y categorizado para ser fácil y accesibilidad controlada.
                            </span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/power-platform">Más
                                información</a>
                        </div>



                    </div>
                </div>

                <div className={mostrarDiv === 'transformacion-digital' ? 'transformacion-digital' : 'oculto'}>
                    <div className="servicios servicio-mpp">
                        <div className=' dis-1'>
                            <p>Doctor 365</p>
                            <span>Haz que todo el equipo migre a soluciones brindadas por Microsoft y todas sus herramientas. Somos especialistas en eso y te ayudaremos en el proceso.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/desarrollo-software">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Bots de preguntas y respuestas (QnA)</p>
                            <span> Haz que todo el equipo migre a soluciones brindadas por Microsoft y todas sus herramientas. Somos especialistas en eso y te ayudaremos en el proceso.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/business-intelligence">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Soluciones de E-learning</p>
                            <span>Haz que todo el equipo migre a soluciones brindadas por Microsoft y todas sus herramientas. Somos especialistas en eso y te ayudaremos en el proceso.
                            </span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/power-platform">Más
                                información</a>
                        </div>



                    </div>
                </div>

                <div className={mostrarDiv === 'desarrollo' ? 'desarrollo' : 'oculto'}>
                    <div className="servicios servicio-mpp">
                        <div className=' dis-1'>
                            <p>SharePoint mediante SPFX, MSGraph y Power Platform</p>
                            <span>Gracias al respaldo de Microsoft y sus herramientas es posible construir y conectar múltiples servicios y plataformas.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/desarrollo-software">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p> Desarrollo sobre Azure</p>
                            <span>Con el respaldo y soporte de Azure y todas sus funcionalidad, construye, crea y mantén la seguridad de tu información dentro de la nube empresarial de Microsoft.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/business-intelligence">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Desarrollos de sistemas a medida (Metodología ágil o tradicional)</p>
                            <span>La transformación digital que tu empresa necesita para mejorar los procesos y la productividad.
                            </span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/power-platform">Más
                                información</a>
                        </div>



                    </div>
                </div>

                <div className={mostrarDiv === 'migracion' ? 'migracion' : 'oculto'}>
                    <div className="servicios servicio-mpp">
                        <div className=' dis-1'>
                            <p>Migración de gestores documentales a SharePoint</p>
                            <span>Migra la información relevante al sistema de almacenamient para gestionar con el respaldo de Sharepoint.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/desarrollo-software">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p> Migración a Microsoft 365</p>
                            <span>Lleva tu organización al sistema de trabajo de Microsoft 365 y ejecuta desde cualquier dispositivo las herramientas, documentos e información del equipo de trabajo.</span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/business-intelligence">Más
                                información</a>
                        </div>
                        <div className=' dis-1'>
                            <p>Migración a Azure</p>
                            <span>Migra tu información empresarial a la nube de Microsoft con el servicio de Azure. Proporciona seguridad, respaldo y garantía en la nube digital.
                            </span>
                            <br /><br />
                            <br />
                            <a className='agendar-reu' to="/power-platform">Más
                                información</a>
                        </div>



                    </div>
                </div>
                <br />
            </div>


            <div className='sect2'>
                <p className='title'>
                    Demo utilizando Microsoft Power Plataform
                </p>
                <span>Te invitamos a que interactues con nuestra demo de un caso de éxito</span>
                <br /> <br />

                <video className='video' controls width="800" height="600">
                    <source src={videoFile} type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                </video>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div id='' className="sect3">
                <div className=" texto text-footer">
                    <br />
                    <br />

                    <br />
                    <br />

                    <p>
                        ¿Una idea brillante en mente?  </p>
                    <br />

                    <div>
                        Queremos ofrecerte la solución más efectiva para potenciar tu empresa a

                        través de Microsoft Power Platform. ¡Descubre el poder de estas
                        herramientas para el desarrollo de aplicaciones y transforma tu visión en

                        realidad!
                    </div>
                    <br /> <br />  <br /> <a className='buttom' href="https://api.whatsapp.com/send?phone=51991316320&text=Flous" target="_blank">¡Comienza tu proyecto!</a>
                </div>
            </div>
        </div>
    )
}

export default Mpp; 