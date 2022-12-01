import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Title, Wrapper } from './Section.styled';

export class Section extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
  };

  render() {
    const { title, children } = this.props;
    return (
      <Wrapper>
        {title && <Title> {title} </Title>}
        {children}
      </Wrapper>
    );
  }
}
