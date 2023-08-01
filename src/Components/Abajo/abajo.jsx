import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0000;
  color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-family: "Arial", sans-serif;
  font-weight: 900;
  font-size: 16px;
  color: #eeee;
`;

const InstagramLink = styled.a`
  color: #eeee;
  margin-right: 10px;

  &:hover {
    color: #e4405f;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InstagramLink
        href="https://www.instagram.com/YOUR_INSTAGRAM_PAGE/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram size={24} />
      </InstagramLink>
      <Text>@Copyright LATE Chocolates - 2023</Text>
    </FooterContainer>
  );
};

export default Footer;
