import { Component } from 'react';
import { Controls } from './Controls/Controls';
import { Stats } from './Stats/Stats';

export class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = evt => {
    const value = evt.target.textContent.toLowerCase();
    console.log('Натиснули на кнопку', { value });
    this.setState(prevValue => {
      return { [value]: prevValue[value] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    return total;
  }

  countPositiveFeedbackPercentage(totalValue) {
    console.log(
      'FeedbackForm   countPositiveFeedbackPercentage   totalValue',
      totalValue
    );
    const { good } = this.state;
    console.log('FeedbackForm   countPositiveFeedbackPercentage   good', good);
    if (good) {
      const percentage = good / totalValue;
      return percentage.toFixed(2) * 100;
    } else {
      return '0';
    }
  }

  render() {
    const totalNumber = this.countTotalFeedback();
    return (
      <section>
        <Controls onBtnClick={this.onClick}></Controls>
        <Stats
          stats={this.state}
          total={totalNumber}
          percentage={this.countPositiveFeedbackPercentage(totalNumber)}
        ></Stats>
      </section>
    );
  }
}
