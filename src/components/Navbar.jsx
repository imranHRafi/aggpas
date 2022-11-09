import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentWrapper, UnStyledButton } from '../style/SharedStyle';
import BrandLogo from '../assets/Icon/brandLogo.png';
import { Link } from 'react-router-dom';
import { COLORS, QUERIES, WEIGHTS } from '../style/Constraints';
import { navMenu } from '../data/navData';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <ContentWrapper>
      <Wrapper>
        <BrandIcon src={BrandLogo} alt='aggPass logo' />
        <MobileActionButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuStick isMenuOpen={isMenuOpen}></MenuStick>
          <MenuStick isMenuOpen={isMenuOpen}></MenuStick>
          <MenuStick isMenuOpen={isMenuOpen}></MenuStick>
        </MobileActionButton>
        <NavigationOverlay isMenuOpen={isMenuOpen}>
          <NavLinks>
            {navMenu.map((item) => (
              <NavLink key={item.id}>{item.name}</NavLink>
            ))}
          </NavLinks>
        </NavigationOverlay>
        <SubmitListing>Submit a Listing</SubmitListing>
      </Wrapper>
    </ContentWrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const NavigationOverlay = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    width: ${({ isMenuOpen }) => (isMenuOpen ? '100%' : '0')};
    height: 100vh;
    position: fixed;
    z-index: 10;
    top: 60px;
    left: 0;
    background-color: ${COLORS.white};
    overflow-y: hidden;
    transition: 0.5s;
  }
`;
const BrandIcon = styled.img`
  margin-right: auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 66px;
  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    flex-direction: column;
    position: relative;
    /* top: 25%; */
    width: 100%;

    text-align: center;
    margin-top: 30px;
  }
`;

const NavLink = styled.a`
  font-weight: ${WEIGHTS.thin};
  font-size: 12px;
  line-height: 8px;
  cursor: pointer;
  @media ${QUERIES.phoneAndSmaller} {
    padding: 8px;
    text-decoration: none;
    font-size: 26px;
    font-weight: ${WEIGHTS.thin};
    color: ${COLORS.gray[900]};
    display: block;
    user-select: none;
    /* transition: 0.3s; */
  }
`;

const SubmitListing = styled(UnStyledButton)`
  margin-left: auto;
  width: 133px;
  height: 46px;
  font-size: 12px;
  font-weight: ${WEIGHTS.normal};
  padding: 18px;
  border: 0.6px solid ${COLORS.primary};
  border-radius: 6px;
  color: ${COLORS.primary};

  transition: 0.5s;
  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;
const MobileActionButton = styled.div`
  cursor: pointer;
`;
const MenuStick = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    width: 35px;
    height: 2px;
    background-color: ${COLORS.primary};
    margin: 8px 0;
    transform: rotate(-45deg) translate(-7px, 8px);
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? ' rotate(-45deg) translate(-7px, 8px)' : 'none'};
    transition: 0.4s;
    :nth-child(2) {
      width: 20px;
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? ' 0' : '100%')};
    }
    :nth-child(3) {
      width: ${({ isMenuOpen }) => (isMenuOpen ? '35px' : '25px')};
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? ' rotate(45deg) translate(-6px, -8px)' : 'none'};
    }
  }
`;

export default Navbar;
