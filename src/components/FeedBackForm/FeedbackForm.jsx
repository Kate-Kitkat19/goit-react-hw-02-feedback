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
    const { good } = this.state;
    const percentage = good ? ((good / totalValue) * 100).toFixed(0) : '0';
    return percentage;
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
