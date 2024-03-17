import React, { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification'
import s from './App.module.css'

const initialFeedbackState = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [feedbackData, setFeedbackData] = useState(() => {
    const storedFeedbackData = localStorage.getItem('feedback');
    return JSON.parse(storedFeedbackData) ?? initialFeedbackState;
  });

  const updateFeedbackCount = feedbackType => {
    setFeedbackData(prevFeedbackData => ({
      ...prevFeedbackData,
      [feedbackType]: prevFeedbackData[feedbackType] + 1,
    }));
  };

  const totalFeedbackCount = Object.values(feedbackData).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const calculatePositiveFeedbackPercentage = Math.round(
    ((feedbackData.good + feedbackData.neutral) / totalFeedbackCount) * 100
  );

  const resetFeedback = () => {
    setFeedbackData(initialFeedbackState);
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedbackData));
  }, [feedbackData]);

  return (
    <div className={s.feedbackAppController}>
      <Description />
      <Options
        updateFeedback={updateFeedbackCount}
        resetFeedback={resetFeedback}
        totalFeedbackCount={totalFeedbackCount}
      />
      {totalFeedbackCount !== 0 ? (
        <Feedback
          {...feedbackData}
          total={totalFeedbackCount}
          positiveFeedbackPercentage={calculatePositiveFeedbackPercentage}
        />
      ) : (
        <Notification/>
      )}
    </div>
  );
}

export default App;
