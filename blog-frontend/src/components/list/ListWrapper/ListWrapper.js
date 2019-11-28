import React from 'react';
import styles from './ListWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ListWrapper = ({type, children}) => (
  <div className={cx('list-wrapper')}>
    <h2>{type}</h2>
    {children}
  </div>
);

export default ListWrapper;