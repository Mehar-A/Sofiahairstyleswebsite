import React from "react";
import "./DealsTwoElements.css";
import { BtnWrap } from "./DealsTwoElements";
import { Button } from "../ButtomElements";
import CanImg from "../../images/deals/newdeals.png";

const Deals = () => {
  return (
    <div id="deals" class="main">
      <div class="card">
        <div class="circle"></div>
        <div class="content">
          <h2>Sales</h2>
          <p>
            50% off any Hair Service! *New Clients Only*
            <br />
            <br />
            <br />
            $30 classic Last Set *Model Fee*
          </p>
          <BtnWrap>
            <Button
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={0}
            >
              Book Now
            </Button>
          </BtnWrap>
        </div>
        <img src={CanImg} alt="fireSpot" />
      </div>
    </div>
  );
};

export default Deals;
