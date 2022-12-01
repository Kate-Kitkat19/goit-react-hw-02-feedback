import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { List, Item, Value } from './Statistics.styled';

export class Statistics extends Component {

  static propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  };

  render() {
    const { good, bad, neutral, total, percentage } = this.props;
    return (
      <List>
        <Item>
          Good: <Value>{good}</Value>
        </Item>
        <Item>
          Neutral: <Value>{neutral}</Value>
        </Item>
        <Item>
          Bad: <Value>{bad}</Value>
        </Item>
        <Item>
          Total: <Value>{total}</Value>
        </Item>
        <Item>
          Positive Feedback: <Value>{percentage}%</Value>
        </Item>
      </List>
    );
  }
}
