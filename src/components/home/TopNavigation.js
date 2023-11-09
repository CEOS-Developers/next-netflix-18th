import React from "react";
import NetflixLogo from "public/assets/images/icon/netflix.svg";
import styled from "styled-components";
export function TopNavigation() {
  return (
    <TopNavigationWrapper>
      <NetflixLogo />
      <TopMenuItem>TV Shows</TopMenuItem>
      <TopMenuItem>Movies</TopMenuItem>
      <TopMenuItem>My List</TopMenuItem>
    </TopNavigationWrapper>
  );
}

const TopNavigationWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25.32px;
  padding: 24px 0px;
  position: absolute;
  top: 0;
  z-index: 999;
`;

const TopMenuItem = styled.li`
  color: #fff;
  text-align: center;
  cursor: pointer;
  font-size: 17.197px;
  font-style: normal;
  font-weight: 400;
  line-height: 30.447px;
  letter-spacing: 0.762px;
`;
