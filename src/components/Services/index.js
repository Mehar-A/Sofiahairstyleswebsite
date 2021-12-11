import React, { useEffect, useRef } from "react";
import {
  ServicesContainer,
  ServicesBackground,
  ServicesH1,
  ServicesCard,
  ServicesP,
  ServicesH2,
  ServicesH3,
  ServicesAnimation1,
  ServicesAnimation2,
  ServicesAnimation3,
} from "./ServicesElements";
import lottie from "lottie-web";

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
  const container = useRef(null); // starting the animation

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Animation/Colors.json"),
    });
  }, []);

  const container2 = useRef(null); // starting the animation

  useEffect(() => {
    lottie.loadAnimation({
      container: container2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Animation/cuts3.json"),
    });
  }, []);

  const container3 = useRef(null); // starting the animation

  useEffect(() => {
    lottie.loadAnimation({
      container: container3.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Animation/hair1.json"),
    });
  }, []);

  // button is for the pointer link for changing the pages
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesH3>
        We provide servies such as colors, cuts, hairstyles and special
        services.
      </ServicesH3>

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
      </ServicesBackground>
    </ServicesContainer>
  );
};

export default ServiceSection;
