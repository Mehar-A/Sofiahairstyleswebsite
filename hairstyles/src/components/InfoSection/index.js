import React from 'react'
import { Button } from '../ButtomElements'
import { Column2, ImgWrap } from './InfoElements'
import img from '../../images/logo/1.jpg'
import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine,Heading, Subtitle , BtnWrap, Img } from './InfoElements'

const InfoSection = ({lightText, lightBg, imgStart,id,darkText, topline,headline,buttonLabel, description, alt, primary, dark2, dark}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
           <InfoWrapper>
               <InfoRow imgStart={imgStart}>
                   <Column1>
                   <TextWrapper>
                       <TopLine>{topline}</TopLine>
                       <Heading lightText={lightText}>{headline}</Heading>
                       <Subtitle darkText={darkText}>{description}</Subtitle>
                       <BtnWrap>
                           <Button to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1:0} dark={dark ? 1:0} dark2={dark2 ? 1:0}>{buttonLabel}</Button>
                       </BtnWrap>
                   </TextWrapper>
                   </Column1>
                   <Column2>
                   <ImgWrap>
                   <Img src={img} alt={alt}/>
                   </ImgWrap>
                   </Column2>
               </InfoRow>
               </InfoWrapper> 
            </InfoContainer>            
        </>
    )
}

export default InfoSection
