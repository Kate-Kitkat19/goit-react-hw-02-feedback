import { PropTypes } from 'prop-types';

export const Controls = ({ onBtnClick }) => {
  return (
    <div>
      <h2>Please leave your feedback</h2>
      <button type="button" onClick={onBtnClick}>
        Good
      </button>
      <button type="button" onClick={onBtnClick}>
        Neutral
      </button>
      <button type="button" onClick={onBtnClick}>
        Bad
      </button>
    </div>
  );
};

Controls.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
