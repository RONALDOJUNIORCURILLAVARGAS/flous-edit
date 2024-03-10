
import React from "react";
import bi from '../../../assets/busness-In.png'
import './bi.css';
import metodologia from '../../../assets/metodologia1.png';
import gif from '../../../assets/gifts/etl.gif';
import dasborad from '../../../assets/dasboard.png';
import iconWhat from '../../../assets/icon-what.png'
import img1 from '../../../assets/4230532-approve-check-cog-gear-pass-secure-tick_115010.png'
import img2 from '../../../assets/analytics_data_visualization_market_trends_statistical_analysis_performance_metrics_icon_260966.png'
import img3 from '../../../assets/automization_optimization_automation_process_task_delegation_workflow_automation_icon_261161.png'
import img4 from '../../../assets/innovation_creativity_breakthrough_inventiveness_icon_261215.png'

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
                    <br /> <br />  <br /> <a className='buttom' href="https://api.whatsapp.com/send?phone=51991316320&text=Flous" target="_blank">Comienza tu proyecto!!</a>
                </div>

                <div className="imagen-fondo fondo-img">
                    <img src={bi} />
                </div>

                <a className='iconWhat' href="https://api.whatsapp.com/send?phone=51991316320&text=Flous" target="_blank">
                    <img src={iconWhat} alt="Descripción de la imagen" width={90} />
                </a>
            </div>


            <div className='sect2 sect-2-2-2 px-[20px]  pt-[30px]'>
                <p className='title'>
                    Beneficios de implementar la ingeniería de

                    datos en tu negocio
                </p>
                <br />
                <br />
                <div className="servicios-bi1 grid md:grid-cols-4 grid-cols-2 gap-4 max-w-6xl mx-auto">
                    <div className=' altura px-[15px] py-[20px] duration-150 hover:scale-[1.055] pointer'>
                        <br />
                        <img className="mx-auto" src={img1} />
                        <br />
                        <span>Toma de decisiones basados en datos</span>
                    </div>
                    <div className=' altura px-[15px] py-[20px] duration-150 hover:scale-[1.055] pointer'>
                        <br />
                        <img className="mx-auto" src={img2} />
                        <br />
                        <span>Eficiencia operativa</span>
                    </div>
                    <div className=' altura px-[15px] py-[20px] duration-150 hover:scale-[1.055] pointer'>
                    <br/>
                        <img className="mx-auto" src={img3} />
                        <br />
                        <span>Personalización y experiencia del cliente
                        </span>
                    </div>

                    <div className=' altura px-[15px] py-[20px] duration-150 hover:scale-[1.055] pointer'>
                    <br/>
                        <img className="mx-auto" src={img4} />
                        <br />
                        <span>Innovación y competitividad
                        </span>
                    </div>


                </div>
            </div>

            <div className='nuestraMetodologia mt-[50px] max-w-6xl mx-auto px-[20px] md:px-[0px]'>
               
                <p className='title'>
                    Flujograma del proceso de datos
                </p>
                
                <img className="w-full mt-[20px]" src={gif} />
            </div>
          
            <div className='nuestraMetodologia mt-[50px] max-w-6xl mx-auto px-[20px] md:px-[0px]'>
                
                <img src={metodologia} />
            </div>


            <div className=' sect-bi  mt-[50px] max-w-6xl mx-auto px-[20px] md:px-[0px]'>
                
                <p className='title text-center'>
                    Interactúa con este Dashboard
                </p>

                <p className="text-center">
                    Te invitamos a que interactues con nuestra demo de un caso de éxito
                </p>
                <img className="mx-auto mt-[30px] w-full md:w-auto md:h-[400px]" src={dasborad} />

            </div>

            <div id='' className="sect3 mt-[50px]">
                <div className=" texto text-footer max-w-6xl mx-auto ">
                    

                    <p>
                        ¿Visualizas oportunidades brillantes en tus datos?</p>
                    <br />

                    <div>
                        Estamos comprometidos a ofrecerte la solución más efectiva para impulsar la inteligencia empresarial de tu compañia. Descubre el potencial del Business Intelligence y transforma tus datos en decisiones estratégicas. ¡Optimiza tu visión con nosotros!.
                    </div>
                    <br /> <br />  <br /> <a className='buttom' href="https://outlook.office365.com/owa/calendar/FlowUpSolutions1@flowupsolutions.com/bookings/" target="_blank">¡Comienza tu proyecto!</a>
                </div>
            </div>
        </div>
    )

}

export default BusinessIntelligence;