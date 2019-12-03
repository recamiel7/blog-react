import React from 'react';
import styles from './CommentBody.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CommentBody = () => (
  <div className={cx('comment-body')}>
    <div className={cx('comment-content')}>
      안녕하세요.
    </div>
    <div className={cx('comment-content')}>
      안녕하세요.
    </div>
    <div className={cx('comment-content')}>
      안녕하세요.
    </div>
  </div>
);

export default CommentBody;