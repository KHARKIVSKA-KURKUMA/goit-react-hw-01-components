import styled from '@emotion/styled';
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #e4e9ed;
`;

export const Title = styled.h2`
  width: 100%;
  padding: 10px;
  text-align: center;
  color: grey;
  font-weight: 500;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px;
  margin: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  background-color: ${p => p.bg};
`;

export const LineText = styled.span`
  color: #fff;
  opacity: 1;
  &.subtitle {
    opacity: 1;
    margin-top: 10px;
  }
`;
