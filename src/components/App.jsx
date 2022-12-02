import { Component } from 'react';
import { Layout } from './Layout';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const value = e.target.value;
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
    const percentage = good
      ? Number(((good / totalValue) * 100).toFixed(0))
      : 0;
    return percentage;
  }

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const perc = this.countPositiveFeedbackPercentage(total);

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              percentage={perc}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback yet" />
          )}
        </Section>
      </Layout>
    );
  }
}
