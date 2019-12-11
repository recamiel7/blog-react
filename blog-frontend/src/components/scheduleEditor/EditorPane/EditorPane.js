import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';

const cx = classNames.bind(styles);

class EditorPane extends Component {

  state = {
    startDate: new Date(),
    endDate: new Date()
  };
 
  startHandleChange = date => {
    this.setState({
      startDate: date
    });
  };

  endHandleChange = date => {
    this.setState({
      endDate: date
    });
  };

  render() {
    return (
      <div className={cx('editor-pane')}>
        <input 
          className={cx('title')} 
          placeholder="제목을 입력하세요" 
          name="title"
        />
        <input 
          className={cx('detail-schedule')}
          placeholder="상세 일정을 입력하세요" 
          name="detail-schedule"
        />
        <div className={cx('date-editor')}>
          <p>시작일</p>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.startHandleChange}
            locale="ko"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={10}
            timeCaption="time"
            dateFormat="yyyy년 MM월 d일 h:mm aa"
          />
          <p>종료일</p>
          <DatePicker
            selected={this.state.endDate}
            onChange={this.endHandleChange}
            locale="ko"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={10}
            timeCaption="time"
            dateFormat="yyyy년 MM월 d일 h:mm aa"
          />
        </div>
        
      </div>
    );
  }
}

export default EditorPane;