import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Item = styled.section`
  padding-bottom: 40px;
  &:last-child {
    padding-bottom: 0;
  }
`;
