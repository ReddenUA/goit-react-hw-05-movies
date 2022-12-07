import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  justify-content: start;

  padding-bottom: 12px;

  border-bottom: 1px solid black;
`;

export const MainInfo = styled.div`
  padding: 16px;

  > h2,
  h3,
  h4,
  p {
    margin-bottom: 12px;
  }
`;

export const Additional = styled.h3`
  margin-bottom: 12px;
`;
