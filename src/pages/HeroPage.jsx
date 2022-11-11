import React from 'react';
import styled from 'styled-components';
import CoreService from '../components/CoreService';
import Navbar from '../components/Navbar';
import Trusted from '../components/Trusted';
import { COLORS, QUERIES, WEIGHTS } from '../style/Constraints';
import { ContentWrapper, UnStyledButton } from '../style/SharedStyle';
import CategoryPage from './CategoryPage';

const HeroPage = () => {
  return (
    <>
      <HeroPageWrapper>
        <Navbar />
        <Wrapper>
          <Header>
            Need Help Looking for the Best
            <HighlighText>
              <br /> App Development
            </HighlighText>
            <span> </span>Partner for Your Project?
          </Header>
          <SubHeader>
            We'll recommend you the best pre-vetted digital agencies <br /> based on your needs
          </SubHeader>
          <ButtonGroup>
            <ButtonGhost>Find Out How</ButtonGhost>
            <Button>Get Started</Button>
          </ButtonGroup>
          <CoreService />
        </Wrapper>
        <Trusted />
      </HeroPageWrapper>
      <CategoryPage />
    </>
  );
};

const HeroPageWrapper = styled.div``;

const Wrapper = styled(ContentWrapper)`
  max-width: 1100px;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 1.25rem;
  font-size: clamp(1.25rem, 0.9rem + 2.23vw, 2.875rem);
  font-weight: ${WEIGHTS.semiBold};
  line-height: 60px;
  text-align: center;
  padding-left: 100px;
  padding-right: 100px;
  letter-spacing: -1px;
  @media ${QUERIES.phoneAndSmaller} {
    padding: 0;
    line-height: 40px;
  }
`;

const HighlighText = styled.span`
  color: ${COLORS.primary};
`;

const SubHeader = styled.p`
  font-size: 16px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 40px;
  line-height: 30px;
  color: ${COLORS.gray[900]};
  @media ${QUERIES.phoneAndSmaller} {
    line-height: 2opx;
  }
`;

// Buttons
const ButtonGroup = styled.div`
  display: flex;
  gap: 30px;
`;

const ButtonGhost = styled(UnStyledButton)`
  height: 46px;
  font-size: 14px;
  padding: 18px;
  color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
    transform: scale(0.95);
  }
`;
const Button = styled(ButtonGhost)`
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  &:hover {
    color: ${COLORS.primary};
    background-color: ${COLORS.white};
  }
`;

export default HeroPage;
