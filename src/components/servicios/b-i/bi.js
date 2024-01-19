
import React from "react";
import bi from '../../../assets/busness-In.png'
import './bi.css';
import metodologia from '../../../assets/metodologia1.png';
import gif from '../../../assets/gifts/etl.gif';
import dasborad from '../../../assets/dasboard.png';
function BusinessIntelligence() {
    return (
        <div>
            <div className="banner">
                <div className="texto">
                    <p>
                        Business Intelligence  </p>
                    <br />

                    <div>
                        Somos expertos en convertir los datos de su
                        organización en información y logramos obtener
                        conocimiento mediante el análisis en tiempo real,
                        respaldando así el proceso de toma de decisiones.
                    </div>
                    <br /> <br />  <br /> <a className='buttom' href="https://api.whatsapp.com/send?phone=51991316320&text=Flous">Comienza tu proyecto!!</a>
                </div>

                <div className="imagen-fondo fondo-img">
                    <img src={bi} />
                </div>
            </div>


            <div className='sect2 sect-2-2-2'>
                <p className='title'>
                    Beneficios de implementar la ingeniería de

                    datos en tu negocio
                </p>
                <br />
                <br />
                <div className="servicios-bi1">
                    <div className=' altura'>
                        <p>Integración y orquestación de
                            datos en ambiente cloud y on

                            premise</p>
                        <span>Toma de decisiones
                            basada en datos.</span>
                    </div>
                    <div className=' altura'>
                        <p>Administración de BBDD en la

                            nube</p>

                        <span>Eficiencia operativa</span>
                    </div>
                    <div className=' altura'>
                        <p>Migración de datos a
                            Azure y a cualquier otra
                            nube de datos</p>
                        <span>Personalización y
                            experiencia del
                            cliente
                        </span>
                    </div>

                    <div className=' altura'>
                        <p>Migración de datos a
                            Azure y a cualquier otra
                            nube de datos</p>
                        <span>Innovación y
                            competitividad
                        </span>
                    </div>


                </div>
            </div>

            <div className='nuestraMetodologia'>
            <p className='title'>
                    Flujograma del proceso en power BI
                </p>
                <br />
            <br />
            <br />
                <img className="img-gif" src={gif} />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='nuestraMetodologia'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
                <img src={metodologia} />
            </div>


            <div className='sect2 sect-bi'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
                <p className='title'>
                    Interactúa con este Dashboard
                </p>

                <p>
                    Te invitamos a que interactues con nuestra demo de un caso de éxito
                </p>
                <img className="dasborad" src={dasborad} />

            </div>

            <div id='' className="sect3">
                <div className=" texto text-footer">
                    <br />
                    <br />

                    <br />
                    <br />

                    <p>
                        ¿Visualizas oportunidades brillantes en tus datos?</p>
                    <br />

                    <div>
                        Estamos comprometidos a ofrecerte la solución más efectiva para impulsar la inteligencia empresarial de tu compañia. Descubre el potencial del Business Intelligence y transforma tus datos en decisiones estratégicas. ¡Optimiza tu visión con nosotros!.
                    </div>
                    <br /> <br />  <br /> <a className='buttom' href="https://api.whatsapp.com/send?phone=51991316320&text=Flous">¡Comienza tu proyecto!</a>
                </div>
            </div>
        </div>
    )

}

export default BusinessIntelligence;