import styled from 'styled-components'

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`;


export const LoginContainer = styled.div`
background: #AAAAAA;
height 930px;

@media screen and (max-width: 768px){
    padding: 100px 0;
}
`;

export const LoginWrapper = styled.div`
display: grid;
height: 800px;
justify-context: center;
overflow: hidden;
`;

export const LoginRow = styled.div`
display: grid;
display: grid;
width: 75%;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-gap: 16px;
overflow: hidden;
margin: 150px 0 0 350px;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    align-items: center;
}
`;

export const Column1 = styled.div`
margin-bottom: 15px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;

export const Column2 = styled.div`
flex-direction: column;
justify-content: flex-start;
align-items: center;
height 100%;
`;

export const ImgWrap = styled.div`
margin: 0 -200px 0 0;
height: 100%;
`;

export const Img = styled.img`
margin: 0 0 10px 0px;
width: 80%;


@media screen and (max-width: 768px){
    height: 1100px;
}

`;






