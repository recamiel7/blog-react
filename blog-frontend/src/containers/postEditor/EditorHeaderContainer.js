import React, { Component } from 'react';
import EditorHeader from 'components/postEditor/EditorHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as editorActions from 'store/modules/post/postEditor';

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
    const { title, markdown, tags, EditorActions, history } = this.props;
    const post = {
      title,
      body: markdown,
      // 태그 텍스트를 ,로 분리시키고 앞뒤 공백을 지운 후 중복되는 값을 제거해줍니다.
      tags: tags === "" ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
    };
    try {
      await EditorActions.writePost(post);
      // 페이지를 이동시킵니다. 주의: postId는 상단에서 레퍼런스를 만들지 말고
      // 이 자리에서 this.props.postId를 조회해 주어야 합니다(현재 값을 불러오기 위함).
      history.push(`/post/${this.props.postId}`);
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
    title: state.postEditor.get('title'),
    markdown: state.postEditor.get('markdown'),
    tags: state.postEditor.get('tags'),
    postId: state.postEditor.get('postId')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(withRouter(EditorHeaderContainer));