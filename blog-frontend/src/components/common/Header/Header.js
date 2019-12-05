import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Header = ({type}) => (
    <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">리카미엘의 블로그</Link>
      </div>
      <div className={cx('right')}>
        {type==='post'? null : <Button theme="outline" to="/postPage/1">게시판</Button>}
        {type==='schedule'? null : <Button theme="outline" to="/schedulePage/1">일정</Button>}
        {type==='schedule'?<Button theme="outline" to="/scheduleEditor">새 일정</Button> : null}
        {type==='post'?<Button theme="outline" to="/postEditor">새 포스트</Button> : null}
      </div> 
    </div>
  </header>
);

export default Header;