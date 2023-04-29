import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 300px;
  border-radius: 5px;
  border: 1px solid #e4e9ed;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 60px;
  border-bottom: none;
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const LineText = styled.p`
  color: black;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  font-weight: 700;
  font-size: 24px;
  &.subtitle {
    color: grey;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 4px;
  background-color: #f2f6f9;
  border: 1px solid #cdcccc;
  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  color: #7d848a;
`;

export const Quantity = styled.span`
  color: #253340;
  font-weight: 700;
`;
