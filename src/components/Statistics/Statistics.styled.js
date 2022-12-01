import styled from 'styled-components';


export const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Item = styled.li`
  padding-left: 5px;
`;

export const Value = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
