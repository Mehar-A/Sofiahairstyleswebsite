import React from "react";
import {
  FootContainer,
  Footerh1,
  FooterSection,
  Footer1,
  Footer2,
  Footer3,
  FooterLogo,
  FooterSocial,
  FooterNew,
  FooterUL,
  FooterLI,
  FooterA,
  FooterColor1,
  FooterColor2,
  FooterI,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FootContainer>
      <FooterSection>
        <Footer1>
          <FooterLogo to="/" onClick={toggleHome}>
            Sofia Jure
          </FooterLogo>
        </Footer1>

        <Footer2>
          <Footerh1>Sofia @ 2021 All rights reserved. </Footerh1>
        </Footer2>

        <Footer3>
          <FooterSocial>
            <FooterNew>SOCIAL</FooterNew>
            <FooterUL>
              <FooterLI>
                <FooterA
                  href="https://www.instagram.com/sofiajure.hairartist/"
                  className="Instagram Social"
                >
                  <FooterI>
                    <FooterColor1>
                      <FaInstagramSquare />
                    </FooterColor1>
                  </FooterI>
                </FooterA>
              </FooterLI>
              <FooterLI>
                <FooterA
                  href="https://m.facebook.com/sofiajure.hairartist"
                  className="Facebook Social"
                >
                  <FooterI>
                    <FooterColor2>
                      <FaFacebookSquare />
                    </FooterColor2>
                  </FooterI>
                </FooterA>
              </FooterLI>
            </FooterUL>
          </FooterSocial>
        </Footer3>
      </FooterSection>
    </FootContainer>
  );
};

export default Footer;
