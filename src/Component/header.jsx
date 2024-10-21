import React from 'react';
import styled from 'styled-components';
import logo from '../Images/logo.jpg'; 

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 80px; 
  background-color: #fff;
  color: white;
  padding: 0 40px;
  margin-top: 20px;
`;

const Logo = styled.div`
   img {
    height: 80px;
    width: 200px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="bottle for delivery" />
      </Logo>
    </HeaderContainer>
  );
};

export default Header;
