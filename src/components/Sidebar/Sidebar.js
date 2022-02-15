import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "../SubMenu";
// import { IconContext } from "react-icons/lib";

const SidebarNav = styled.nav`
  background: var(--color-dune);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar] = useState(true);

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Sidebar;
