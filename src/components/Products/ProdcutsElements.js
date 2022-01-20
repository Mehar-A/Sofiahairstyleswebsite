import styled ,{css}from 'styled-components'


// remove height to adjust by itself
export const ProductContainers = styled.div`
height: 950px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background : #010606;

@media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1300px;
}
`;

export const ProductH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-top: 30px;
margin-bottom: 30px;

@media screen and (max-width: 768px){
    font-size: 2rem;
    margin: -200px 0 60px 0;
}

@media screen and (max-width: 480px){
    font-size: 1.5rem;
}
`;


export const ProductWarpper = styled.div`
max-width: 950px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 5px 16px;
max-width: 1000px;


@media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    max-width: 500px;   
    
}

@media screen and (max-width: 480px){
    grid-template-columns: 1fr 1fr;
    max-width: 400px; 
}
`;

export const ProductCard = styled.div`
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

@media screen and (max-width: 768px){
    max-height: 250px;
    padding: 15px;
}

`;

export const ProductIcon = styled.img`
height: 60%;
width: 60%;

@media screen and (max-width: 768px){
    max-height: 250px;
    height: 100px;
    width: 100px;
}
`;




export const ProductH2 = styled.h2`
font-size: 1rem;
text-align: center;
overflow: hidden;

@media screen and (max-width: 769px){
    margin-top: -30px;
}
`;

export const ProductP = styled.p`
font-size: 1rem;
text-align: center;
overflow: hidden;

@media screen and (max-width: 768px){
    font-size: 0.8rem;
}
`;

// this style is for the cards
export const CardContainer = styled.div`
display: flex;
flex-direction: column;
transition: z-index 1500ms, transform 1500ms;
z-index: 0;
-webkit-perspective: 100px;
perspective: 1000px;
transform-style: preserve-3d;

&:hover{
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

border-radius: 10px;
max-height: 340px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
`;


export const CardFront = styled.div`
${CardSide}
z-index: 0;
background: #fff;
`;

export const CardBack = styled.div`
${CardSide}
transform: rotateY(180deg) translate(100%, 0);
background: #fff;
z-index: 1;
`;

export const CardInner = styled.div`
flex: 1;
display: flex;
transition: transform 1500ms;
transform-style: preserve-3d;

&:hover{
    transform:rotateY(180deg);
    cursor: pointer;
}

`;


/*
This is for the button option
export const CardFront2 = styled.div`
${CardSide}
z-index: 0;
background: #fff;
`;

export const CardBack2 = styled.div`
${CardSide}
transform: rotateY(180deg) translate(100%, 0);
background: #fff;
z-index: 1;
`;

*/


export const Cardmiddle = styled.div`
position: absolute;
  justify-content: center;
  transform: translate(-50%,-50%);
  background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;  
width: 50%;
height: 50%;

`;

export const Card = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: white;
`;

export const Front = styled.div`
    width: 100%;
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  position: absolute;
  transition: transform .6s linear;
  
`;

