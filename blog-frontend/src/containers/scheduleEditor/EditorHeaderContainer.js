import React, { Component } from 'react';
import EditorHeader from 'components/scheduleEditor/EditorHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as editorActions from 'store/modules/schedule/scheduleEditor';

class EditorHeaderContainer extends Component {
  componentDidMount() {
    const { EditorActions } = this.props;
    EditorActions.initialize(); // 에디터를 초기화합니다.
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  handleSubmit = async () => {
    const { title, markdown, EditorActions, history } = this.props;
    const schedule = {
      title,
      body: markdown,
    };
    try {
      await EditorActions.writeSchedule(schedule);
      // 페이지를 이동시킵니다. 주의: postId는 상단에서 레퍼런스를 만들지 말고
      // 이 자리에서 this.props.postId를 조회해 주어야 합니다(현재 값을 불러오기 위함).
      history.push(`/schedule/${this.props.scheduleId}`);
    } catch (e) {
      console.log(e);
    }
  }

    
  render() {
    const { handleGoBack, handleSubmit } = this;
    
    return (
      <EditorHeader
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
      />
    );
  }

}

export default connect(
  (state) => ({
    title: state.scheduleEditor.get('title'),
    markdown: state.scheduleEditor.get('markdown'),
    scheduleId: state.scheduleEditor.get('scheduleId')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(withRouter(EditorHeaderContainer));