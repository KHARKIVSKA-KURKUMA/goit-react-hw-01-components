import styled from '@emotion/styled';

export const Link = styled.a`
  margin-bottom: 8px;
  text-decoration: none;
  color: black;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #557b83;
  border-radius: 10px;
  cursor: pointer;
  transform: scale(1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #f2f6f9;
  }
`;

export const OnlineLabel = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${p => (p.isOnline ? '#357C3C' : '#d41b18')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 30px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const Title = styled.span`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 600;
`;
