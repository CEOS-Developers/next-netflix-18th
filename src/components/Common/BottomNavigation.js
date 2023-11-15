import React from "react";
import styled from "styled-components";
import HomeLogo from "public/assets/images/icon/home.svg";
import SearchLogo from "public/assets/images/icon/search.svg";
import CommingLogo from "public/assets/images/icon/coming-soon.svg";
import DownloadLogo from "public/assets/images/icon/downloads.svg";
import MoreLogo from "public/assets/images/icon/more.svg";
import indicator from "public/assets/images/indicator.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
function BottomNavigation() {
  const router = useRouter();
  return (
    <>
      <BottomNavigationWrapper>
        <MenuList>
          <MenuItem $padding={"8px"} onClick={() => router.push("/home")}>
            <HomeLogo stroke={"#FFF"} />
            <MenuText $color={"#FFF"}>Home</MenuText>
          </MenuItem>
          <MenuItem $padding={"8px"} onClick={() => router.push("/search")}>
            <SearchLogo stroke={"#8C8787"} />
            <MenuText>Search</MenuText>
          </MenuItem>
          <MenuItem $padding={"10px"} onClick={() => router.push("/")}>
            <CommingLogo fill={"#8C8787"} />
            <MenuText>Coming Soon</MenuText>
          </MenuItem>
          <MenuItem $padding={"8px"} onClick={() => router.push("/")}>
            <DownloadLogo fill={"#8C8787"} />
            <MenuText>Downloads</MenuText>
          </MenuItem>
          <MenuItem $padding={"11px"} onClick={() => router.push("/")}>
            <MoreLogo fill={"#8C8787"} />
            <MenuText>More</MenuText>
          </MenuItem>
        </MenuList>
        <Image src={indicator} alt={"home-indicator"} width={"100%"} />
      </BottomNavigationWrapper>
    </>
  );
}

const BottomNavigationWrapper = styled.div`
  position: fixed;
  height: 79px;
  bottom: 0px;
`;

const MenuList = styled.div`
  display: flex;
  background: #121212;
  justify-content: center;
  gap: 25px;
  width: 375px;
  height: 48px;
`;

const MenuItem = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  padding-top: ${(props) => props.$padding};
  position: relative;
  cursor: pointer;
`;

const MenuText = styled.div`
  position: absolute;
  bottom: 6px;
  width: 55px;
  text-align: center;
  font-size: 8.2px;
  font-style: normal;
  font-weight: 500;
  color: #8c8787;
  color: ${(props) => props.$color};
`;

export default BottomNavigation;
