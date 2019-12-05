import React from 'react';
import styles from './CommentEdit.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const CommentEdit = () => (
  <div className={cx('edit-body')}>
    <input className={cx('edit-text')} placeholder={'댓글 내용을 입력해 주세요.'}>
    </input>
    <Button theme="default">댓글 입력</Button>
  </div>
);

export default CommentEdit;