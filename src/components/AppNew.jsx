import React, { useState } from 'react';

import { FeedbackOptions } from './FeedBackOptions/FeedBackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const leaveFeedback = option => {
    setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };
  const countTotalFeedback = () => {
    return Object.values(state).reduce((total, el) => {
      total += el;
      return total;
    }, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={leaveFeedback()}
        />
      </Section>

      <Section title={'Statistics'}>
        {this.countTotalFeedback() ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
