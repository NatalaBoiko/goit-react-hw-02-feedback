import React, { Component } from 'react';
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
  updateCount = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };
  totalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  positiveFeedback = () => {
    return this.totalFeedback()
      ? ((this.state.good / this.totalFeedback()) * 100).toFixed(0)
      : '0';
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateCount}
          />
        </Section>

        {this.totalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positive={this.positiveFeedback()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}