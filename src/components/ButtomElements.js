import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px': '12px 30px')};
color: ${({dark}) => (dark? '#010606' : '#fff')};
font-size ${({fontbig}) => (fontbig? '20px': '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff':'#01BF71')};
}
`;

export const Button2 = styled.button`
    border-radius: 50px;
    display: inline-block;
    padding: 10px 15px;
    background-image: linear-gradient(to right, #01BF71, #010606);
    background-size: 200%;
    background-position: 0%;
    transition: 0.4s;
    color: #fff;
    font-weight: 700;
    cursor: pointer;

&:hover{
    transition: all 0.2s ease-in-out;
    background-image: linear-gradient(to top, red, #FFD700)
}
`;