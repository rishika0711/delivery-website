import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 40px; 
  background-color: #fff; /* You can set the background color here */
  color: white;
  padding: 0 40px;
  margin-top: 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid grey; /* Grey border around the logo */
  padding: 5px 40px;
  border-radius: 8px;
  color: black;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        Demo Name 
      </Logo>
    </HeaderContainer>
  );
};

export default Header;
