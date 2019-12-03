import React from 'react';
import styles from './CommentEdit.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const CommentEdit = () => (
  <div className={cx('edit-body')}>
    <div className={cx('edit-text')}>
      내용
    </div>
    <Button theme="default">댓글 입력</Button>
  </div>
);

export default CommentEdit;