import React from 'react';
import styled from 'styled-components';
import { featuredData } from '../data/FeaturedData';
import { COLORS, QUERIES, WEIGHTS } from '../style/Constraints';

const CoreService = () => {
  return (
    <CoreServiceWrapper>
      {featuredData.map((item) => (
        <Card key={item.id}>
          <Title>{item.title}</Title>
          <Slogan>{item.slogan}</Slogan>
          <Icon src={item.icon} alt='' />
        </Card>
      ))}
    </CoreServiceWrapper>
  );
};

const CoreServiceWrapper = styled.div`
  padding-top: 75px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
  }
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Card = styled.div`
  height: 180px;
  color: ${COLORS.white};
  border-radius: 14px;
  padding-left: 30px;
  padding-top: 25px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.03);
  position: relative;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }
  @media ${QUERIES.tabletAndSmaller} {
    min-width: 200px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    min-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: ${WEIGHTS.semiBold};
  color: ${COLORS.gray[900]};
`;
const Slogan = styled.p`
  color: ${COLORS.gray[300]};
  font-size: 14px;
  line-height: 14px;
  font-weight: ${WEIGHTS.thin};
  padding-top: 10px;
`;
const Icon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 85px;
  width: 85px;
`;

export default CoreService;
