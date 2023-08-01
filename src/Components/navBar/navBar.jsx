import React from "react";
import "./navBar.scss";
import { AiFillInstagram } from 'react-icons/ai';
import styled from 'styled-components';
import logo from './logo.png';

const InstagramLink = styled.a`
  color: #eeee;
  margin-right: 10px;

  &:hover {
    color: #e4405f;
  }
`;

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <InstagramLink
        href="https://www.instagram.com/late.chocolates/"
        target="_blank"
        rel="noopener noreferrer"
        >
          <AiFillInstagram size={24} />
        </InstagramLink>
        <a href="/">Home</a>
        <a href="/Menu">¿Porque LATE?</a>
        <img className="logo" src={logo}/>
      </div>
    </nav>
  );
};

export default Navbar;

