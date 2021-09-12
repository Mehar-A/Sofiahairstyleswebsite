import styled from 'styled-components'


export const ContactContainer = styled.div`
height: 950px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: center;
align-items: center;
background : #010606;

@media screen and (max-width: 768px){
    height: 1000px;
}

`;

export const ContactSection = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 -50px;
overflow: hidden;


@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`;


export const ContactH1 = styled.h1`
font-size: 50px;
font-weight: 500;
color: white;
@media screen and (max-width: 768px){
    font-size: 30px
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
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
overflow: hidden;



`;

// col1
export const ContactInfo = styled.div`
width: 50%;
display: flex;
flex-direction: column;
margin: 0 50px 0 0;

@media screen and (max-width: 768px){
    margin: 0 0 0 0;
}
`;

// col2
export const ContactGPS = styled.div`
height: auto;
margin: auto;
display: flex;
flex-wrap: wrap;
padding: 10px;
margin: 0 0 0 -100px;
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



export const ContactText = styled.div``;

export const ContactH3 =  styled.h3``;

export const ContactTextP = styled.div``;
export const ContactCol2 = styled.div``;