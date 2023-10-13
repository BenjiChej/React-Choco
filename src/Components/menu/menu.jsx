import React from 'react';
import './menu.scss';
import NavBar from '../navBar/navBar';
import Footer from '../Abajo/abajo';
import fotopa from './DreamShaper_v7_create_the_image_of_a_doctor_with_a_chocolate_i_2.jpg';
import Card from '../Cards/card';

const Menu = () => {
  return (
      <div className='divporq'>
        <NavBar/>
        <h1 className='descriptit'>¿Porque elegir LATE Chocolates?</h1>

        <h2 className='descrip'>Desde LATE Chocolates hacemos todo con mucho amor y dedicacion al chocolate. Lo que una vez empezo como un hobby hoy se ha convertido en algo mucho mas que ello. La dedicacion una familia a logrado posicionar a LATE como un referente en la experimentacion con sabores nunca antes imaginados, combinaciones nunca antes vistas, chocolates nuevos. Sumate a este aventura y forma parte de esta hermosa familia, no te arrepentiras.</h2>
        <h1 className='descriptit2'>Nuestro Equipo</h1>

        <Card/>
        <div className='divAbajo'>
          <Footer className='abajo'/>
        </div>
      </div>
      
  );
};

export default Menu;
