import NavBar from '../navBar/navBar';
import JumboImg from './c73b7b6e-acee-4474-8b24-72182c470417-removebg-preview.png';
import SecondImg from './f149f839-81c5-4368-9e89-d4002654a25d-removebg-preview.png';
import Footer from '../Abajo/abajo';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';
  import './inicio.scss';


function Inicio() {
    return(
        <div className='divHomePage'>
            <head>
            <link rel="stylesheet" href="assets/css/blobz.min.css"/>;
            </head>
            <div className='divNavBar'>
                <NavBar className='NavBar'/>
            </div>
            <div class="jumbotron">
                <h1 class="display-4">Bienvenido a <b className='title'>Late Chocolates</b></h1>
                <p className="lead">Hacemos chocolates de autor. Nos gusta explorar nuevas opciones. Amantes del sabor y de la originalidad.</p>
                <img src={JumboImg} alt="JumboImg" className='JumboImg'/>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" 
                    role="button"
                    style={{
                        borderRadius: 35,
                        backgroundColor: "#8A5448",
                        padding: "18px 36px",
                        borderColor: "white",
                        fontSize: "18px"
                    }}
                    href="https://www.instagram.com/late.chocolates/"
                    >
                        Contactanos
                    </a>
                </p>
            </div>
            <div className='divInfo1'>
                <img src={SecondImg} alt="SecondImg" className='SecondImg'/>   
                <p className='pInfo1'>Conoce nuestros <b>sabores</b> y <b>productos</b> aca o revisa nuestro Instagram donde tambien podras contactarnos por mensaje privado para encargarnos tu gustos y chocolates favoritos. Para ir a ver porque elegir <b>LATE</b> hace click <Link to="/menu">ACA</Link>.</p>   
            </div>
            <div className='divAbajo'>
                <Footer className='abajo'/>
            </div>
        </div>
    )
}

export default Inicio;