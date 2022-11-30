import { PropTypes } from 'prop-types';
export const Stats = ({ stats, total, percentage }) => {
  return (
    <div>
      <h2>Statictics</h2>
      <ol>
        <li>Good: {stats.good}</li>
        <li>Neutral: {stats.neutral}</li>
        <li>Bad: {stats.bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {percentage}%</li>
      </ol>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
