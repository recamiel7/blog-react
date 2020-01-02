import React from 'react';
import EditorTemplate from 'components/postEditor/EditorTemplate';
import EditorHeader from 'components/postEditor/EditorHeader';
import EditorPaneContainer from 'containers/postEditor/EditorPaneContainer';
import PreviewPaneContainer from 'containers/postEditor/PreviewPaneContainer';

const PostEditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeader/>}
      editor={<EditorPaneContainer/>}
      preview={<PreviewPaneContainer/>}
    />
  );
};

export default PostEditorPage;