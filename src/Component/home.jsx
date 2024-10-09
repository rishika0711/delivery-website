import React from 'react';
import styled from 'styled-components';
import img1 from '../Images/beer1.jpg';
import img2 from '../Images/beer2.jpg';
import img3 from '../Images/backgroundImage.jpg';
import liquorImage from '../Images/liquorImg.jpg'; 
import Header from './header';

const HomePageScreen = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <HeroContainer>
          <div className="hero-content">
            <span className='heading'>Dial-a-bottle</span>
            <h1>At your doorstep</h1>
            <Description>
              Fastest beer delivery service across Edmonton. Get your favorite beverages delivered to your door within minutes.
            </Description>
            <PhoneNumber href="tel:7804714777" className='button' title="Call us now">780-471-4777</PhoneNumber>
            <h2 className='sub-heading'>WE COVER ALL OF EDMONTON</h2>
            <p>
              We provide quick and convenient alcohol delivery to all parts of Edmonton. Whether it's for a party, a gathering, or just a quiet night in, Dial-a-bottle is here to deliver your favorite drinks fast and hassle-free.
              With our reliable service, you can order from a wide range of beers, wines, spirits, and mixers, all delivered straight to your doorstep in record time.
              We pride ourselves on offering the fastest delivery in Edmonton, ensuring you never run out of beverages for your special occasions.
              Our team is committed to making your experience smooth, from placing the order to receiving it with just a phone call away.
              Dial-a-bottle also guarantees competitive pricing and a seamless delivery process, making us your go-to service for alcohol delivery in Edmonton.
              Whether you need a single bottle or you're stocking up for an event, we've got you covered with our extensive selection and prompt service.
            </p>
          </div>
        </HeroContainer>

        <ImageGridWrapper>
          <div className="image-grid">
            <div className="image full-width-image">
              <img src={liquorImage} alt="Liquor bottles for delivery" />
            </div>
            <div className="image" style={{ gridArea: 'img1' }}>
              <img src={img1} alt="A refreshing beer glass" />
            </div>
            <div className="image" style={{ gridArea: 'img2' }}>
              <img src={img2} alt="Cold beer bottles ready for delivery" />
            </div>
            <div className="image" style={{ gridArea: 'img3' }}>
              <img src={img3} alt="Background showing delivery service" />
            </div>
          </div>
        </ImageGridWrapper>
      </MainContainer>
    </>
  );
};

export default HomePageScreen;

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  height: 100vh;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const HeroContainer = styled.section`
  flex: 1.5;
  max-width: 100%;
  
  .hero-content {
    max-width: 100%;
    text-align: start;
  }

  .button {
    margin-bottom: 40px;
  }

  span {
    font-size: 46px;
    font-weight: bold;
    color: #0d6efd;
  }

  h1 {
    font-size: 26px;
    color: #3e3e3e;
    margin-top: 0;
    margin-bottom: 40px;

    @media (min-width: 768px) {
      font-size: 48px;
    }
  }

  p {
    color: #6b6b6b;
    font-size: 16px;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  .sub-heading {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 0;
  }
`;

const ImageGridWrapper = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px !i;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  .image-grid {
    display: grid;
    grid-template-areas:
      'full-width-image full-width-image full-width-image'
      'img1 img2 img3';
    gap: 20px;
    width: 100%;
    max-width: 600px;

    @media (max-width: 768px) {
      grid-template-areas:
        'full-width-image'
        'img1'
        'img2'
        'img3';
    }
  }

  .image {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }

  .full-width-image {
    grid-column: 1 / -1;
    width: 100%;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #000;
  margin: 10px 0;
  font-weight: 600;

  @media (max-width: 564px) {
    font-size: 1rem;
  }
`;

const PhoneNumber = styled.a`
  font-size: 1.2rem;
  color: #fff;
  background-color: #0d6efd;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
