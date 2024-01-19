import React from "react";
import './ds.css'
import ds from '../../../assets/desarrollo-software.jpg';
import metodologia from '../../../assets/desarrollo-soft.png';

import metodologia1 from '../../../assets/desarrollo-soft1.png';
import metodologia2 from '../../../assets/desarrollo-soft2.png';
import gift from '../../../assets/gifts/sofwre_diagrama.gif'
function DesarrolloS() {
    return (
        <div>
            <div className="banner">
                <div className="texto">
                    <p>Desarrollo de software  </p>
                    <br />

                    <div>
                        Nos destacamos en el campo del desarrollo de software, focalizándonos principalmente en entornos de programación como Microsoft. NET (somos socios Silver de Microsoft en Desarrollo de Aplicaciones), Java y Delphi.
                    </div>
                    <br /> <br />  <br /> <a className='buttom' href="https://api.whatsapp.com/send?phone=51991316320&text=Flous">Comienza tu proyecto!!</a>
                </div>

                <div className="imagen-fondo-ds">
                    <img src={ds} />
                </div>
            </div>
            <br />
            <br />
            <br />

            <div className='sect2 sect2-ds'>
                <img className="desarrollo" src={metodologia} />
            </div>
            <br />
            <br />
            <br />
            <br />

            <div className='sect2'>
                <img className="desarrollo" src={metodologia1} />

            </div>

            <div className='sect2'>
                <img className="desarrollo gift" src={gift} />

            </div>

            
            <div className='sect2'>
                <img className="desarrollo" src={metodologia2} />

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
                    ¿Una idea innovadora en mente?</p>
                    <br />

                    <div>
                    Desarrollamos soluciones de software a medida que hacen realidad tus visiones. Descubre cómo podemos transformar tus ideas en productos excepcionales.
 ¡Haz que tu visión cobre vida con nuestro servicio de desarrollo de software!
                    </div>
                    <br /> <br />  <br /> <a className='buttom' href="https://api.whatsapp.com/send?phone=51991316320&text=Flous">¡Comienza tu proyecto!</a>
                </div>
            </div>
        </div>
    )
}

export default DesarrolloS;