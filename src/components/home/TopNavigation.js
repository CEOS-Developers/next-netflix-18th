import React from "react";
import NetflixLogo from "public/assets/images/icon/netflix.svg";
import styled from "styled-components";
function TopNavigation() {
  return (
    <TopNavigationWrapper>
      <NetflixLogo />
      <TopMenuItem></TopMenuItem>
      <TopMenuItem></TopMenuItem>
      <TopMenuItem></TopMenuItem>
    </TopNavigationWrapper>
  );
}

const TopNavigationWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25.32px;
`;

const TopMenuItem = styled.li`
  color: #fff;
  text-align: center;
  font-size: 17.197px;
  font-style: normal;
  font-weight: 400;
  line-height: 30.447px; /* 177.049% */
  letter-spacing: 0.762px;
`;

export default TopNavigation;
