import styled from '@emotion/styled';

export const Wrapper = styled.table`
  width: 300px;
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
  color: white;
`;

export const HeadCell = styled.th`
  font-size: 18px;
  padding: 10px 80px;
  min-width: 280px;
`;

export const Row = styled.tr`
  background-color: ${p => (p.accent ? '#ecf1f4' : 'transparent')};
`;

export const Cell = styled.td`
  padding: 10px;
  &.capitalize {
    text-transform: capitalize;
  }
`;
