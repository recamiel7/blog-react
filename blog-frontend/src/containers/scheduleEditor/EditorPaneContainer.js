import React, { Component } from 'react';
import EditorPane from 'components/scheduleEditor/EditorPane';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/schedule/scheduleEditor';

class EditorPaneContainer extends Component {

  handleChangeInput = ({name, value}) => {
    const { EditorActions } = this.props;
    EditorActions.changeInput({name, value});
  }
  
  render() {
    const { title, markdown } = this.props;
    const { handleChangeInput } = this;

    return (
      <EditorPane
        title={title}
        markdown={markdown}
        onChangeInput={handleChangeInput}
      />
    );
  }
}

export default connect(
  (state) => ({
    title: state.scheduleEditor.get('title'),
    markdown: state.scheduleEditor.get('markdown'),
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(EditorPaneContainer);