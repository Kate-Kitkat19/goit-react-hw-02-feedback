import { PropTypes } from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;

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
  }
}
