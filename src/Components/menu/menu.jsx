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
        <div className='descriplate'>
          <h2 className='descrip2'>Desde <b>LATE Chocolates</b> hacemos todo con mucho amor al chocolate. Lo que una vez empezo como un hobby, hoy se ha convertido en algo mucho más que ello. La dedicación ha logrado posicionar a LATE como un <b>referente en la experimentación </b>con sabores nunca antes imaginados y combinaciones nunca antes vistas. Sumate a este aventura y forma parte de esta hermosa familia.</h2>
        </div>
        <h1 className='descriptit2'>Nuestro Equipo</h1>

        <Card/>
        <div className='divAbajo'>
          <Footer className='abajo'/>
        </div>
      </div>
      
  );
};

export default Menu;
