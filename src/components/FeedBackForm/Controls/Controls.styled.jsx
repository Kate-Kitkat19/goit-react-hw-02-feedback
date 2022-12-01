import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  padding: 5px 0;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  display: flex;
`;

export const Button = styled.button`
  margin: 0;
  padding: 10px;
  cursor: pointer;
  vertical-align: middle;
  border-radius: 4px;
  border: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${p => {
    switch (p.value) {
      case 'bad':
        return 'red';
      case 'neutral':
        return 'orangered';
      case 'good':
        return 'green';
      default:
        throw new Error('Something went wrong, please check the button');
    }
  }};

  &:hover,
  &:focus {
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
      rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  }

  &:not(:last-child) {
    margin-right: 15px;
  }

  color: white;
  font-weight: 700;
`;
