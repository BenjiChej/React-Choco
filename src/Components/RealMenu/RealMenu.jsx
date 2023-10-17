import React from 'react';
import './realMenu.scss';
import NavBar from '../navBar/navBar';
import Footer from '../Abajo/abajo';
import alco from './images/0d0cd7de-0cae-40b4-8330-9997688e21f5.jpg';
import marrocol from './images/marrocol.jpg';
import mendigo from './images/0bbb52e5-d5b6-4e23-b2b2-82180581d88a.jpg';
import boquitasbaklava from './images/7ce3ff58-9316-46ea-b78d-240c52da3e05.jpg';
import barrablanco from './images/ec1f3d31-e4c8-4194-9e33-7e7438f86d81.jpg';
import alfajores from './images/e98d77ea-af37-4324-a793-06d956c387da.jpg';
import bombonesddl from './images/d3bc5423-6b7c-46cc-a6d5-ab169f7932ed.jpg';
import snicker from './images/67319ae6-1391-48d2-9de3-0225ee76b641.jpg';

import barras from './images/98fc52f9-e72b-4ffe-80e7-20507ed8559c.jpg';
import bombones from './images/7fc8b21c-1eaa-4de6-b680-f5c5657a7d8f.jpg';
import igo from './images/igo.jpg';
// Agrega más tarjetas según sea necesario

const RealMenu = () => {
  return (
    <div className='divporq'>
      <NavBar />
      <h1 className='descriptit'>¿Te animas a probar LATE?</h1>
      <div className="menu">
          <div className="menu-item">
            <h2>Mani & Almendras</h2>
            <img src={alco} alt='card' />
            <p>Una opcion mas saludable pero igual de rica</p>
          </div>
          <div className="menu-item">
            <h2>Marrocol</h2>
            <img src={marrocol} alt='card' />
            <p>No es un Marroc, no es Mantecol, es Marrocol</p>
          </div>
          <div className="menu-item">
            <h2>Mendigo</h2>
            <img src={mendigo} alt='card' />
            <p>Chocolate, Castañas de Caju, pasas de uva y almendras</p>
          </div>
          <div className="menu-item">
            <h2>Boquitas de Baklava</h2>
            <img src={boquitasbaklava} alt='card' />
            <p>Un chocolate con una pasta de pistachos</p>
          </div>
          <div className="menu-item">
            <h2>Bombones de dulce de leche</h2>
            <img src={bombones} alt='card' />
            <p>Chocolate con el tradicional dulce de leche argentino</p>
          </div>
          <div className="menu-item">
            <h2>Bombones de Oreo</h2>
            <img src={bombonesddl} alt='card' />
            <p>Chocolate relleno en galletas Oreo aplastadas</p>
          </div>
          <div className="menu-item">
            <h2>Chocolate con igos</h2>
            <img src={igo} alt='card' />
            <p>Chocolates rellenos de igos</p>
          </div>
          <div className="menu-item">
            <h2>Barras de Praline</h2>
            <img src={barras} alt='card' />
            <p>Chocolate con mezcla de almendras caramelizadas</p>
          </div>
          <div className="menu-item">
            <h2>Snicker LATE</h2>
            <img src={snicker} alt='card' />
            <p>Un Snicker casero y version LATE</p>
          </div>
          <div className="menu-item">
            <h2>Barras de chocolate</h2>
            <img src={barrablanco} alt='card' />
            <p>Hechas en chocolate con leche, blanco y negro</p>
          </div>
          <div className="menu-item">
            <h2>Alfajor LATE</h2>
            <img src={alfajores} alt='card' />
            <p>Cubiertos en chocolate con un relleno de dulce de leche</p>
          </div>
      </div>
      <div className='divAbajo'>
        <Footer className='abajo' />
      </div>
    </div>
  );
};

export default RealMenu;
