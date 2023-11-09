import React from "react";
import styled from "styled-components";
import HomeLogo from "public/assets/images/icon/info.svg";
function BottomNavigation() {
  return (
    <BottomNavigationWrapper>
      <HomeLogo />
    </BottomNavigationWrapper>
  );
}

const BottomNavigationWrapper = styled.div`
  width: 100%;
`;

export default BottomNavigation;
