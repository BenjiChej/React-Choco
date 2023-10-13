import React from 'react';
import './menu.scss';
import NavBar from '../navBar/navBar';
import Footer from '../Abajo/abajo';
import fotopa from './DreamShaper_v7_create_the_image_of_a_doctor_with_a_chocolate_i_2.jpg';

const Menu = () => {
  return (
      <div className='divporq'>
        <NavBar/>
        <h1 className='descriptit'>¿Porque elegir LATE Chocolates?</h1>
        <h2 className='descrip'>Desde LATE Chocolates hacemos todo con mucho amor y dedicacion al chocolate. Lo que una vez empezo como un hobby hoy se a convertido en algo mucho mas que ello. La dedicacion de una familia a logrado posicionar a LATE como un referente en la experimentacion con sabores nunca antes imaginados, combinaciones nunca antes vistas, chocolates nuevos.Sumate a este aventura y forma parte de esta hermosa familia, no te arrepentiras.</h2>
        <h1 className='descriptit2'>Nuestro Equipo</h1>
        <div className='team'>
          <div class="circle">
            <img id="profile-pic" src={fotopa} alt="Profile Picture"/> 
          </div>
          <h1 className='name'>Doctor Anonimo</h1>
          <h4 className='ia'>(Imagen generada por Inteligencia Artificial)</h4>
        </div>
        <div className='divAbajo'>
          <Footer className='abajo'/>
        </div>
      </div>
      
  );
};

export default Menu;
