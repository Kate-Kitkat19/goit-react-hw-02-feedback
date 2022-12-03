import { PropTypes } from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(item => {
    const normalizedName = item.trim().toLowerCase();
    const id = nanoid();
    return (
      <Button
        key={id}
        type="button"
        onClick={onLeaveFeedback}
        value={normalizedName}
      >
        {normalizedName}
      </Button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
