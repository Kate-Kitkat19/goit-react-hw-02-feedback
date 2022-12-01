
import { PropTypes } from 'prop-types';
import { Wrapper, List, Title, Item, Value } from './Stats.styled';

export const Stats = ({ stats, total, percentage }) => {
  return (
    <Wrapper>
      <Title>Statictics</Title>
      <List>
        <Item>
          Good: <Value>{stats.good}</Value>
        </Item>
        <Item>
          Neutral: <Value>{stats.neutral}</Value>
        </Item>
        <Item>
          Bad: <Value>{stats.bad}</Value>
        </Item>
        <Item>
          Total: <Value>{total}</Value>
        </Item>
        <Item>
          Positive Feedback: <Value>{percentage}%</Value>
        </Item>
      </List>
    </Wrapper>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
