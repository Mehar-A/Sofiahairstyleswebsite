import styled, {css} from 'styled-components'


export const BtnWrap = styled.div`
display: flex;
justify-content: center;
text-align: left;
vertical-align: middle;
margin: 0 0 10px 0;
`;

export const ServicesContainer = styled.div`
height: 1050px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
grid-template-rows: 1fr;

@media screen and (max-width: 768px){
    height: 1400px;
}

@media screen and (max-width: 480px){
    height: 1600px;
}
`;

export const ServicesBackground = styled.div`
max-width: 950px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 5px 16px;


@media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    max-width: 500px;   
    
}

@media screen and (max-width: 480px){
    grid-template-columns: 1fr 1fr;
    max-width: 400px; 
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
padding: 40px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    
}

@media screen and (max-width: 768px){
    max-height: 400px;
    padding: 30px 0;
}
`;

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #010606;
margin: 20px 0 10px 0;

@media screen and (max-width: 768px){
    font-size: 3rem;
    margin: -100px 0 50px 0;
}

@media screen and (max-width: 480px){
    font-size: 3.5rem;
}

`;

export const ServicesH3 = styled.h3`
font-size: 1.5rem;
color: #010606;
margin: 10px 0 20px 0;


@media screen and (max-width: 768px){
    font-size:2rem;
    margin: 0 0 20px 50px;
}

@media screen and (max-width: 480px){
    font-size: 2.5rem;
    margin: 0 0 20px 50px;
    
}

`;

// these are in the cards

export const ServicesAnimation = styled.div`
display: flex;
justify-content: center;
@media screen and (max-width: 768px){
    
}
`;


export const ServicesH2 = styled.h2`
font-size: 1.5rem;
color: #fff;
display: flex;
justify-content: center;
width: auto;
height: auto;
`;



export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
color: #fff;
`;


export const CardContainer = styled.div`
display: flex;
flex-direction: column;
transition: z-index 1500ms, transform 1500ms;
z-index: 0;
-webkit-perspective: 100px;
perspective: 1000px;
transform-style: preserve-3d;

&.flipped{
    z-index: 1;
}
`;


export const CardSide = css`
width: 100%;
min-width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
-moz-backface-visibility: hidden;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
border: 2px solid #fff;
`;


export const CardFront = styled.div`
${CardSide}
z-index: 0;
background: black;
`;

export const CardBack = styled.div`
${CardSide}
transform: rotateY(180deg) translate(100%, 0);
background: #000;
z-index: 1;
`;

export const CardFront2 = styled.div`
${CardSide}
z-index: 0;
background: white;
`;

export const CardBack2 = styled.div`
${CardSide}
transform: rotateY(180deg) translate(100%, 0);
background: white;
z-index: 1;
`;


export const CardInner = styled.div`
flex: 1;
display: flex;
transition: transform 1500ms;
transform-style: preserve-3d;

&.flipped{
    transform:rotateY(180deg);
    cursor: pointer;
}

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