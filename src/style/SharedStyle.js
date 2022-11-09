import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: min(1440px, 100%);
  display: flex;
  align-items: center;
  margin: auto;
`;

export const UnStyledButton = styled.button`
  display: ${(props) => props.display || 'block'};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
