import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Header = () => (
    <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">리카미엘의 블로그</Link>
      </div>
      <div className={cx('right')}>
        <Button theme="outline" to="/postPage/1">게시판</Button>
        <Button theme="outline" to="/schedulePage/1">일정</Button>
        <Button theme="outline" to="/postEditor">새 포스트</Button>
      </div> 
    </div>
  </header>
);

export default Header;