import React from 'react';
import s from './Feedback.module.css';

export const Feedback = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <ul className={s.feedbackContainer}>
      <li className={s.feedbackItem}>Good: {good}</li>
      <li className={s.feedbackItem}>Neutral: {neutral}</li>
      <li className={s.feedbackItem}>Bad: {bad}</li>
      <li className={s.feedbackItem}>Total: {total}</li>
      <li className={s.feedbackItem}>
        Positive: {positiveFeedbackPercentage}%
      </li>
    </ul>
  );
};

export default Feedback;
