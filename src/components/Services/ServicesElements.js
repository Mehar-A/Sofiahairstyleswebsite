import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 950px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  grid-template-rows: 1fr;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesBackground = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 -50px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 50px;
  }
`;

export const ServicesCard = styled.div`
  background: #010606;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  margin: 400px 0 0 0;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-height: 400px;
    margin: 400px 0 0 0;
    padding: 30px 0;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin: 0 0 50px 0;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin: 0 0 100px 0;
  }
`;

export const ServicesH3 = styled.h3`
  font-size: 1.5rem;
  color: #010606;
  margin: 0 0 -200px 0;
`;

// these are in the cards

export const ServicesAnimation1 = styled.div`
  margin: -50px -40px 0 0;

  @media screen and (max-width: 768px) {
    margin: -40px -20px 0 0;
  }
`;

export const ServicesAnimation2 = styled.div`
  margin: -50px 0 -90px 0;

  @media screen and (max-width: 768px) {
    margin: 0 0 0 0;
    padding: 0 40px;
  }
`;

export const ServicesAnimation3 = styled.div`
  margin: 0 0 30px 0;

  @media screen and (max-width: 768px) {
    margin: -20px 0 30px 0;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin: 0 0 10px 0;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;

/*
export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 40px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;





export const ServicesContent = styled.div`
height: 1000px;
display: flex;
justify-content: center;
grid-area: col2;

@media screen and (max-width: 768px){
    height: 1100px;
}

`;


*/
