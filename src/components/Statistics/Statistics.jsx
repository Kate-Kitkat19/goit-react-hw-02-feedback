import { PropTypes } from 'prop-types';
import { List, Item, Value } from './Statistics.styled';

export const Statistics = ({ good, bad, neutral, total, percentage }) => {
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
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
