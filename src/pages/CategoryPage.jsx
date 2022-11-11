import React from 'react';
import styled from 'styled-components';
import { categoryList } from '../data/categoryData';
import { COLORS, WEIGHTS, QUERIES } from '../style/Constraints';
import { ContentWrapper } from '../style/SharedStyle';

const CategoryPage = () => {
  return (
    <CategoryPageWrapper>
      <Wrapper>
        <Header>Browse by category</Header>
        <Category>
          <CategoryMenu>
            {categoryList.map((c) => (
              <Menu key={c.id}>
                <CategoryImage src={c.icon} alt={c.name} />
                <CategoryTitle>{c.name}</CategoryTitle>
              </Menu>
            ))}
          </CategoryMenu>
        </Category>
      </Wrapper>
    </CategoryPageWrapper>
  );
};

const CategoryPageWrapper = styled.div`
  padding-top: 200px;
  height: 949px;
`;
const Wrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 1.25rem;
  font-size: clamp(1.25rem, 1.01rem + 1.38vw, 2.25rem);
  font-weight: ${WEIGHTS.semiBold};
  line-height: 50px;
  margin-bottom: 50px;
`;

/* -------------------------------- Category -------------------------------- */
const Category = styled.div``;

const CategoryMenu = styled.div`
  display: flex;
  gap: 64px;
  padding-bottom: 34px;
  border-bottom: 0.2px solid ${COLORS.gray[100]};
  @media ${QUERIES.tabletAndSmaller} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-content: center;
    border-bottom: none;
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;

const CategoryImage = styled.img`
  padding: 12px;
  width: 52px;
  height: 52px;
  background-color: ${COLORS.gray[100]};
  color: ${COLORS.white};
  border-radius: 50%;
  transition: all 0.3s ease;
`;

const CategoryTitle = styled.p`
  font-size: 0.625rem;
  font-size: clamp(0.625rem, 0.57rem + 0.35vw, 0.875rem);
  font-weight: ${WEIGHTS.thin};
  color: ${COLORS.gray[500]};
  text-align: center;
`;
const Menu = styled.div`
  width: 100px;
  height: 107px;
  display: grid;
  place-items: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    &::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${COLORS.secondary};
      position: absolute;
      bottom: -34px;
      left: 0;
      @media ${QUERIES.tabletAndSmaller} {
        bottom: -10px;
      }
    }
    /* border-bottom: 2px solid ${COLORS.primary}; */

    ${CategoryImage} {
      background-color: ${COLORS.primary};
    }
  }
`;

export default CategoryPage;
