import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtomElements';
import {HeroContainer, HeroBackground,VideoBg, HeroContent, HeroH1,HeroP, HeroBtnWrapper,ArrowForward, ArrowRight } from './HeroElements';


// first page
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

// button is for the pointer link for changing the pages
    return (
        <HeroContainer id = "home">
            <HeroBackground>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBackground>
            
            <HeroContent>
                <HeroH1>
                ππΆππππ πππππΎππ
                ππππππΎππ 
                </HeroH1>
                <HeroP>
                    Good hair
                    Good mood
                    Good day
                </HeroP>
                <HeroBtnWrapper>
                    <Button to ="contact" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark = "true">
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
