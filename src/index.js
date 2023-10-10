import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import NavBar from './Components/navBar/navBar';
import Inicio from './Components/inicio/inicio';
import Menu from './Components/menu/menu';
import 'bootstrap/dist/css/bootstrap.css';
import RealMenu from './Components/RealMenu/RealMenu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
          <Route path="/" element={< Inicio/>} />
          <Route path="/Contact" element={< Inicio/>} />
          <Route path="/Menu" element={< Menu/>} />
          <Route path="/RealMenu" element={< RealMenu/>} />
          <Route path="/" element={< Inicio/>} />
      </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
