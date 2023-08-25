// Card.js

import React from 'react';
import styled from 'styled-components';
import fotopa from '../menu/DreamShaper_v7_create_the_image_of_a_doctor_with_a_chocolate_i_2.jpg';
import fotobe from './DreamShaper_v7_create_the_image_of_a_web_18_year_old_developer_0.jpg';
import fotoro from './Absolute_Reality_v16_make_a_brown_hair_lady_with_brown_eyesho_0.jpg';
import './card.scss';

const NeomorphicCard = ({ title, description, photoUrl }) => {
  return (
    <div className="cards-container">
    <div className="neomorphic-card">
      <img src={fotoro} alt={title} className="neomorphic-card-photo" />
      <div className="neomorphic-card-content">
        <h3 className="neomorphic-card-title">Romina</h3>
        <p className="neomorphic-card-description">Social Media Manager</p>
      </div>
    </div>
    <div className="neomorphic-card">
    <img src={fotopa} alt={title} className="neomorphic-card-photo" />
    <div className="neomorphic-card-content">
      <h3 className="neomorphic-card-title">Demian</h3>
      <p className="neomorphic-card-description">Chocolatier & Social Media Manager</p>
    </div>
    </div>
    <div className="neomorphic-card">
        <img src={fotobe} alt={title} className="neomorphic-card-photo" />
        <div className="neomorphic-card-content">
            <h3 className="neomorphic-card-title">Benjamin</h3>
            <p className="neomorphic-card-description">Web Developer</p>
        </div>
    </div>
  
  </div>
  );
};

export default NeomorphicCard;

