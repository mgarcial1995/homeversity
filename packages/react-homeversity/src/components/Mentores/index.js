import React from 'react';
import './styles.css';

function Mentores() {
    return <div className='root'>
        <h3>APRENDE DE LA MANO CON LOS MEJORES MENTORES</h3>
        <div className='mentores'>
            <div>
                <img src='./perfil_1.png' width={'150px'} height={'150px'}></img>
                <h5>CARPINTERIA AVANZADA</h5>
            </div>
            <div>
                <img src='./perfil_2.png' width={'150px'} height={'150px'}></img>
                <h5>PINTURA ARTÍSTICA</h5>
            </div>
            <div>
                <img src='./perfil_3.png' width={'150px'} height={'150px'}></img>
                <h5>ING. LECTRÓNICA</h5>
            </div>
            <div>
                <img src='./perfil_4.png' width={'150px'} height={'150px'}></img>
                <h5>ESCULTURA EN BARRO</h5>
            </div>
        </div>
        <div>
            <img src='./step.jpg'></img>
        </div>
    </div>;
}

export default Mentores;
