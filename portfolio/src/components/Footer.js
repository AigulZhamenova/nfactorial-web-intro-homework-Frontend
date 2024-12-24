import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Айгуль Жаменова. Все права защищены.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
