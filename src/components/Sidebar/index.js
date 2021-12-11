import React from "react";
import {
  SidebarContainer,
  Siderbaricon,
  ClosedIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SidebarElements";

// make sure to take out the signup button
/*
This is for route for new page, will fix it later

                <SideBtnWrap>
                    <SideBarRoute to="/signup">Sign Up</SideBarRoute>
                </SideBtnWrap>

*/
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Siderbaricon onClick={toggle}>
        <ClosedIcon />
      </Siderbaricon>

      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="services" onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to="products" onClick={toggle}>
            Products
          </SideBarLink>
          <SideBarLink to="deals" onClick={toggle}>
            Deals
          </SideBarLink>
        </SideBarMenu>

        <SideBtnWrap>
          <SideBarRoute to="contact" onClick={toggle}>
            Contact Us
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
