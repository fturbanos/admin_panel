import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: var(--color-ecru-white);
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;

  &:hover {
    color: var(--color-ecru-white);
    opacity: 0.5;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: var(--color-dune);
  height: 30px;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-ecru-white);
  font-size: 14px;

  &:hover {
    background: var(--color-dune);
    color: var(--color-ecru-white);
    opacity: 0.5;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
