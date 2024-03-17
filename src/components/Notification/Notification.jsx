import React from 'react';
import s from './Notification.module.css'


const Notification = () => {
  return (
    <div className={s.feedbackAlternativeContainer}>
      <p className={s.feedbackAlternativeText}>No feedback yet</p>
    </div>
  );
};

export default Notification;
