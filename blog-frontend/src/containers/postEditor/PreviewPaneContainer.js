import React, { Component } from 'react';
import { connect } from 'react-redux';
import PreviewPane from 'components/postEditor/PreviewPane';

class PreviewPaneContainer extends Component {
  render() {
    const { markdown, title } = this.props;
    return (
      <PreviewPane title={title} markdown={markdown}/>
    );
  }
}

export default connect(
  (state) => ({
    title: state.postEditor.get('title'),
    markdown: state.postEditor.get('markdown')
  })
)(PreviewPaneContainer);