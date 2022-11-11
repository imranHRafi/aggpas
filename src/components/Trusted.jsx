import React from 'react';
import styled from 'styled-components';
import { trustedCompany } from '../data/trustedCompanyData';
import { COLORS, QUERIES, WEIGHTS } from '../style/Constraints';
import { ContentWrapper } from '../style/SharedStyle';

const Trusted = () => {
  return (
    <TrustedWrapper>
      <Wrapper>
        <Header>Over 1,000 companies trust our network including</Header>
        <CompanyHighlight>
          {trustedCompany.map((company) => (
            <CompanyIcon src={company.icon} alt={company.name} key={company.id} />
          ))}
        </CompanyHighlight>
      </Wrapper>
    </TrustedWrapper>
  );
};

const TrustedWrapper = styled.div`
  padding-top: 200px;
`;
const Wrapper = styled(ContentWrapper)`
  max-width: 1060px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 30px;
  font-weight: ${WEIGHTS.semiBold};
  color: ${COLORS.gray[900]};
  line-height: 16px;
  padding-bottom: 50px;
  text-align: center;
  @media ${QUERIES.tabletAndSmaller} {
    line-height: 40px;
  }
`;

const CompanyHighlight = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;
  gap: 20px;
  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;

const CompanyIcon = styled.img`
  max-width: 60%;
`;

export default Trusted;
