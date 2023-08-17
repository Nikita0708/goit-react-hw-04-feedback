import React, { useState } from 'react';

import { FeedbackOptions } from './FeedBackOptions/FeedBackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevGood => prevGood + 1);
        break;

      default:
        throw new Error();
    }
  };

  const total = good + neutral + bad;

  const positivePercentage = Math.round((good / total) * 100);

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>

      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
