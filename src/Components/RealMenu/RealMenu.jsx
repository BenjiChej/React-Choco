import React from 'react';
import './realMenu.scss';
import NavBar from '../navBar/navBar';
import Footer from '../Abajo/abajo';
import Card from '../Cards/card';

const menuItems = [
    {
      name: 'Marrocol',
      image: 'marrocol.jpg',
      description: '¿Que mejor que un Marroc?¿Un Mantecol? No, un Marrocol'
    },

    {
        name: 'Marrocol',
        image: 'marrocol.jpg',
        description: '¿Que mejor que un Marroc?¿Un Mantecol? No, un Marrocol'
      },
      {
        name: 'Marrocol',
        image: 'marrocol.jpg',
        description: '¿Que mejor que un Marroc?¿Un Mantecol? No, un Marrocol'
      },
      {
        name: 'Marrocol',
        image: 'marrocol.jpg',
        description: '¿Que mejor que un Marroc?¿Un Mantecol? No, un Marrocol'
      },
    
   
    // Agrega más platos según sea necesario
  ];

const MenuItem = ({ name, image, description }) => {
    return (
        <div className="menu-item">
        <h2>{name}</h2>
        <img src={require(`./images/${image}`).default} alt={name} />
        <p>{description}</p>
        </div>
    );
    };

const RealMenu = () => {
  return (
      <div className='divporq'>
        <NavBar/>
        <h1 className='descriptit'>¿Te animas a probar LATEs?</h1>

        <h2 className='descrip'>Disfruta de nuestro menu.</h2>  

        <div className="menu">
            {menuItems.map((item, index) => (
                <MenuItem key={index} {...item} />
            ))}
        </div>
        <div className='divAbajo'>
          <Footer className='abajo'/>
        </div>
      </div>
      
  );
};

export default RealMenu;
