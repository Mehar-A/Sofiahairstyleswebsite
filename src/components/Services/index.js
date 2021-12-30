import React , {useEffect, useRef, useState} from 'react';
import {ServicesContainer, ServicesBackground, ServicesH1, ServicesP, ServicesH2, ServicesH3, ServicesAnimation} from './ServicesElements';
import lottie from 'lottie-web';
import {BtnWrap} from './ServicesElements';
import { Button3 } from '../ButtomElements';
import {CardContainer,CardInner,CardFront, CardBack,CardFront2, CardBack2} from './ServicesElements'

/*
<ServicesContent>
                <ServicesCard>
                <ServicesH2>Colors</ServicesH2>
                <ServicesP>We do colors.</ServicesP> 
                </ServicesCard>
                <ServicesCard>
                <ServicesH2>Cuts</ServicesH2>
                <ServicesP>We do cuts.</ServicesP> 
                </ServicesCard>
                <ServicesCard>
                <ServicesH2>Hair Styles</ServicesH2>
                <ServicesP>We do hairstyles.</ServicesP> 
                </ServicesCard>
            </ServicesContent>


*/



const ServiceSection = () => {
    const[flipped, setFlipped] = useState(false);
    
    

    const container = useRef(null) // starting the animation

    useEffect(()=> {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Animation/Colors.json')
        })

    }, [])
    
    const container2 = useRef(null) // starting the animation

    useEffect(()=> {
        lottie.loadAnimation({
            container: container2.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Animation/Sissors.json')
        })

    }, [])

    const container3 = useRef(null) // starting the animation

    useEffect(()=> {
        lottie.loadAnimation({
            container: container3.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Animation/HairStyle.json')
        })

    }, [])

    
    const container4 = useRef(null) // starting the animation
    useEffect(()=> {
        lottie.loadAnimation({
            container: container4.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Animation/eyelashes.json')
        })

    }, [])


    const container5 = useRef(null) // starting the animation
    useEffect(()=> {
        lottie.loadAnimation({
            container: container5.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Animation/waxing.json')
        })

    }, [])

    const container6 = useRef(null) // starting the animation
    useEffect(()=> {
        lottie.loadAnimation({
            container: container6.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Animation/extra.json')
        })

    }, [])
    
// button is for the pointer link for changing the pages
    return (
        <ServicesContainer id = "services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesH3>We provide servies such as colors, cuts, hairstyles and special services.</ServicesH3>


            <CardContainer>
                <CardInner className={flipped ? "flipped": ""}>
                    <CardFront2>
                        <BtnWrap>
                            <Button3 onClick={()=> setFlipped(true)} smooth={true} duration={500} spy={true} exact="true" offset={0}>Prices</Button3>
                        </BtnWrap>
                    </CardFront2>
                    <CardBack2>
                        <BtnWrap>
                                <Button3 onClick={()=> setFlipped(false)} smooth={true} duration={500} spy={true} exact="true" offset={0}>Back</Button3>
                        </BtnWrap>
                    </CardBack2>
                </CardInner>
            </CardContainer>
            <ServicesBackground>
                <CardContainer>
                    <CardInner className={flipped ? "flipped": ""}>
                        <CardFront>
                            <ServicesH2>Colors</ServicesH2>
                            <ServicesAnimation ref={container}></ServicesAnimation>
                        </CardFront>
                        <CardBack>
                            <ServicesP>We do colors.</ServicesP>
                        </CardBack>
                    </CardInner>
                </CardContainer>

                <CardContainer>
                    <CardInner className={flipped ? "flipped": ""}>
                        <CardFront>
                            <ServicesH2>Cuts</ServicesH2>
                            <ServicesAnimation ref={container2}></ServicesAnimation>
                        </CardFront>
                        <CardBack>
                            <ServicesP>We do Cuts.</ServicesP>
                        </CardBack>
                    </CardInner>
                </CardContainer>

                <CardContainer>
                    <CardInner className={flipped ? "flipped": ""}>
                        <CardFront>
                            <ServicesH2>Hair Styles</ServicesH2>
                            <ServicesAnimation ref={container3}></ServicesAnimation>
                        </CardFront>
                        <CardBack>
                            <ServicesP>We do Hair Styles.</ServicesP>
                        </CardBack>
                    </CardInner>
                </CardContainer>

                <CardContainer>
                    <CardInner className={flipped ? "flipped": ""}>
                        <CardFront>
                            <ServicesH2>Lashes</ServicesH2>
                            <ServicesAnimation ref={container4}></ServicesAnimation>
                        </CardFront>
                        <CardBack>
                            <ServicesP>We do Lashes.</ServicesP>
                        </CardBack>
                    </CardInner>
                </CardContainer>


                <CardContainer>
                    <CardInner className={flipped ? "flipped": ""}>
                        <CardFront>
                            <ServicesH2>Waxing</ServicesH2>
                            <ServicesAnimation ref={container5}></ServicesAnimation>
                        </CardFront>
                        <CardBack>
                            <ServicesP>We do Waxing.</ServicesP>
                        </CardBack>
                    </CardInner>
                </CardContainer>


                <CardContainer>
                    <CardInner className={flipped ? "flipped": ""}>
                        <CardFront>
                            <ServicesH2>Extra</ServicesH2>
                            <ServicesAnimation ref={container6}></ServicesAnimation>
                        </CardFront>
                        <CardBack>
                            <ServicesP>We do Extra requirements.</ServicesP>
                        </CardBack>
                    </CardInner>
                </CardContainer>


            
            </ServicesBackground>
            
            
        </ServicesContainer>
    )
}

export default ServiceSection

/*
<ServicesH1>Our Services</ServicesH1>
            <ServicesH3>We provide servies such as colors, cuts, hairstyles and special services.</ServicesH3>
<button onClick={()=> setFlipped(true)}>Prices</button>
<ServicesBackground>
                <ServicesCard>
                    <ServicesAnimation1 ref={container}></ServicesAnimation1>
                    <ServicesH2>Colors</ServicesH2>
                    <ServicesP>We do colors.</ServicesP> 
                </ServicesCard>
                <ServicesCard>
                    <ServicesAnimation2 ref={container2}></ServicesAnimation2>
                    <ServicesH2>Cuts</ServicesH2>
                    <ServicesP>We do cuts.</ServicesP> 
                </ServicesCard>
                <ServicesCard>
                    <ServicesAnimation3 ref={container3}></ServicesAnimation3>
                    <ServicesH2>Hair Styles</ServicesH2>
                    <ServicesP>We do hairstyles.</ServicesP> 
                </ServicesCard>
                <ServicesCard>
                    <ServicesAnimation4 ref={container4}></ServicesAnimation4>
                    <ServicesH2>Lashes</ServicesH2>
                    <ServicesP>We do Lashes.</ServicesP> 
                </ServicesCard>
                <ServicesCard>
                    <ServicesAnimation5 ref={container5}></ServicesAnimation5>
                    <ServicesH2>Waxing</ServicesH2>
                    <ServicesP>We do Waxing.</ServicesP> 
                </ServicesCard>
                <ServicesCard>
                    <ServicesAnimation6 ref={container6}></ServicesAnimation6>
                    <ServicesH2>Extra</ServicesH2>
                    <ServicesP>Extra requirements</ServicesP> 
                </ServicesCard>
            </ServicesBackground> 
            <BtnWrap>
                                <Button3 onClick={()=> setFlipped(true)} smooth={true} duration={500} spy={true} exact="true" offset={0}>Prices</Button3>
                            </BtnWrap>
            
                            <BtnWrap>
                                <Button3 onClick={()=> setFlipped(false)} smooth={true} duration={500} spy={true} exact="true" offset={0}>Back</Button3>
                            </BtnWrap>
            */