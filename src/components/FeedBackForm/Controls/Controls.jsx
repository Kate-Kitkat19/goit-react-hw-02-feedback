import { PropTypes } from 'prop-types';
import { Wrapper, Title, Button } from './Controls.styled';
export const Controls = ({ onBtnClick }) => {
  return (
    <Wrapper>
      <Title>Please leave your feedback</Title>

      <Button type="button" onClick={onBtnClick} value="good">
        Good
      </Button>

      <Button type="button" onClick={onBtnClick} value="neutral">
        Neutral
      </Button>

      <Button type="button" onClick={onBtnClick} value="bad">
        Bad
      </Button>
    </Wrapper>
  );
};

Controls.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
