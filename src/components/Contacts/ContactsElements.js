import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 950px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1200px;
  }
`;

export const ContactSection = styled.div`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 -50px;
  overflow: hidden;
  margin: -20px 0 -100px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactH1 = styled.h1`
  font-size: 50px;
  font-weight: 500;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ContactHeader = styled.div`
  margin: 100px 0 120px 0;

  @media screen and (max-width: 768px) {
    margin: -70px 0 -80px 0;
  }
`;

//container
export const ContactEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 500px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin: 60px 0 -100px 0;
  }
`;

export const ContactEvent2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 500px;
  padding: 40px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  margin: 0 0 0 -100px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

// col1
export const ContactInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 50px 0 0;

  @media screen and (max-width: 768px) {
    margin: 0 0 0 0;
  }
`;

// col2
export const ContactGPS = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  box-shadow: 0 0 10 0 #666;
`;

export const ContactBox = styled.div`
position: relative;
padding 20px 0;
display flex;
color: #fff;
`;

export const ContactIcon = styled.div`
  min-width: 60px;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px 0 0;
  border-radius: 50%;
  font-size: 22px;
`;

export const ContactIconColor = styled.div`
  color: black;
`;

export const ContactBack = styled.div`
  width: 100%;
  height: auto;
  flex: 50%;
`;

// socials
export const ContactSocial = styled.div`
  color: black;
`;

export const ContactUL = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ContactLI = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 20px;
  margin-top: 5px;
`;

export const ContactA = styled.a`
  width: 30px;
  height: 30px;
  text-align: center;
  background: #fff;
  border-radius: 50px;
`;

export const ContactI = styled.i`
  min-width: 60px;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 22px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ContactColor1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactColor2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
`;

export const ContactText = styled.div``;

export const ContactH3 = styled.h3`
  color: #fff;
`;

export const ContactNew = styled.h3`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 -20px;
`;

export const ContactTextP = styled.div``;
export const ContactCol2 = styled.div``;
