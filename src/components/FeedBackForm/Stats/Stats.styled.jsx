import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
`;

export const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  padding: 5px 0;
`;

export const Item = styled.li`
  padding-left: 5px;
`;

export const Value = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
