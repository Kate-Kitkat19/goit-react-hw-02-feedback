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
      console.log(prevValue, 'prevValue');
      return { [value]: prevValue[value] + 1 };
    });
  };

  render() {
    return (
      <section>
        <Controls onBtnClick={this.onClick}></Controls>
        <Stats stats={this.state}></Stats>
      </section>
    );
  }
}
