import { PropTypes } from 'prop-types';
import { Title, Wrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      {title && <Title> {title} </Title>}
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};
