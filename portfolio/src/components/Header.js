import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;

const NavLinks = styled.nav`
  a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Мое портфолио</h1>
      <NavLinks>
        <Link to="/">Главная</Link>
        <Link to="/about">Обо мне</Link>
        <Link to="/projects">Проекты</Link>
        <Link to="/contact">Контакты</Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
