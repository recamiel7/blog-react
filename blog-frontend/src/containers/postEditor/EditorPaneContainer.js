import React, { Component } from 'react';
import EditorPane from 'components/postEditor/EditorPane';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/post/postEditor';

class EditorPaneContainer extends Component {

  handleChangeInput = ({name, value}) => {
    const { EditorActions } = this.props;
    EditorActions.changeInput({name, value});
  }
  
  render() {
    const { title, tags, markdown } = this.props;
    const { handleChangeInput } = this;

    return (
      <EditorPane
        title={title}
        markdown={markdown}
        tags={tags}
        onChangeInput={handleChangeInput}
      />
    );
  }
}

export default connect(
  (state) => ({
    title: state.postEditor.get('title'),
    markdown: state.postEditor.get('markdown'),
    tags: state.postEditor.get('tags')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(EditorPaneContainer);