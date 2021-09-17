import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const FootContainer = styled.div`
background: black;
display: flex;
justify-content: flex-start;
align-items: center;
margin: 100px 0 0 0;



@media screen and (max-width: 768px){
    margin: 100px 0 -50px 0;
    
}

`;


export const FooterSection = styled.div`
max-width: 1000px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 -50px;
overflow: hidden;


@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`;

export const Footer1 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 40px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
overflow: hidden;
margin: 100px 0 0 0;

@media screen and (max-width: 768px){
    margin: -10px 50px 0 0;
}

`;
export const Footer2 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 40px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
overflow: hidden;
margin: 100px 0 0 0;

@media screen and (max-width: 768px){
    margin: -70px 0 -30px 0;
}

`;


export const Footerh1 = styled.p`
display: block;
color: #fff;
font-size: 15px;

`;


//socials
export const Footer3 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 40px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
overflow: hidden;
margin: 50px 0 0 0;

@media screen and (max-width: 768px){
    margin: -50px 0 -40px 0;
}

`;

export const FooterSocial = styled.div`
color: black;
`;

export const FooterUL = styled.ul`
padding: 0;
margin: 0;
`;

export const FooterLI = styled.li`
list-style: none;
display: inline-block;
margin-right: 20px;
margin-top: 5px;
`;

export const FooterA = styled.a`
width: 30px;
height: 30px;
text-align: center;
background: #fff;
border-radius: 50px;
`;

export const FooterI = styled.i`
min-width: 60px;
height: 60px;
background: black;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
font-size: 40px;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

`;

export const FooterColor1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;


export const FooterColor2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: blue;
`;


export const FooterNew =  styled.h3`
color: #fff;
display: flex;
justify-content: center;
align-items: center;
margin: 0 0 0 -20px;
`;



export const FooterLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;

