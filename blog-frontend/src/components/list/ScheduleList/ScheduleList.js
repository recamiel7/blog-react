import React from 'react';
import styles from './ScheduleList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ScheduleItem = () => {
  return (
    <div className={cx('schedule-item')}>
      <h2><a>타이틀</a></h2>
      <div className={cx('date')}>2019-11-28 PM 04:55</div>
      <p>내용</p>
      <div className={cx('schedule-date')}>2019-11-28 AM 09:00 ~ 2019-12-15 PM 05:00</div>
    </div>
  )
}

const ScheduleList = () => {
  return (
    <div className={cx('schedule-list')}>
        <ScheduleItem/>
        <ScheduleItem/>
        <ScheduleItem/>
    </div>
  );
};

export default ScheduleList;