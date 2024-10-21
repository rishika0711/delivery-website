import React from 'react';
import styled from 'styled-components';
import liquorBottle from '../Images/liquorBottle.jpg';
import liquorImage from '../Images/liquorImg.jpg'; 
import Header from './header';

const HomePageScreen = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <HeroContainer>
          <div className="hero-content">
            <span className="heading">DIAL-A-BOTTLE</span>
            <br />
            <span className="sub-heading">(LIQUOR DELIVERY)</span>
            <h2>FAST 24/7 HOME DELIVERY</h2>
            <h1>AT YOUR DOORSTEP</h1>
            <CenteredContent>
              <ImageWrapper>
                <img src={liquorImage} alt="Liquor bottles for delivery" />
              </ImageWrapper>
              <CenteredPhoneNumber href="tel:5877324242" title="Call us now">587-732-4242</CenteredPhoneNumber>
            </CenteredContent>
            <h2 className="sub-description">WE COVER ALL OVER EDMONTON, SHERWOOD PARK, LEDUC, NESKU, WEST EDMONTON, SPROOCE GROOVE</h2>
          </div>
          <ImageWrapper>
            <img src={liquorBottle} alt="Liquor bottle for delivery" />
          </ImageWrapper>
        </HeroContainer>
      </MainContainer>
    </>
  );
};

export default HomePageScreen;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  min-height: 100vh;
`;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 800px;

  .hero-content {
    width: 100%;
  }

  .heading {
    font-size: 66px;
    font-weight: bold;
    color: #0846A1;
    text-align: center;
    width: 100%;
  }

  .sub-heading {
    font-size: 46px;
    font-weight: bold;
    color: #0d6efd;
    margin-top: 10px;
    text-align: center; 
    width: 100%;
  }
    h1{
    font-size: 56px;
    }
   @media (max-width: 600px) {
   .heading {
     font-size:52px;
    }
    .sub-heading {
     font-size:40px;
    }
     h1{
     font-size:40px;
     }
  }
  @media (max-width: 500px) {
    .hero-content {
      text-align: left;
    }
    .heading{
     font-size: 46px;
    }
      .sub-heading{
     font-size: 40px;
    }
    h1{
     font-size: 38px;
    }
    .heading,
    .sub-heading {
      text-align: left;
    }
  }
  @media (max-width: 470px) {
   .heading {
     font-size:44px;
    }
    .sub-heading {
     font-size:30px;
    }
  }
  @media (max-width: 680px) {
   .hero-content {
      text-align: left;
    }
  }
  @media (max-width: 423px) {
   .heading {
     font-size:36px;
    }
    .sub-heading {
     font-size:30px;
    }
     h1{
     font-size:28px;
     }
     h2{
     font-size:22px;
     }
  }
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const CenteredPhoneNumber = styled.a`
  font-size: 2rem;
  color: #fff;
  background-color: #0d6efd;
  padding: 20px;
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  font-weight: 700;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
