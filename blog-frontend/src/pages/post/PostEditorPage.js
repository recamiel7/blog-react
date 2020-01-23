import React from 'react';
import EditorTemplate from 'components/postEditor/EditorTemplate';
import EditorHeaderContainer from 'containers/postEditor/EditorHeaderContainer';
import EditorPaneContainer from 'containers/postEditor/EditorPaneContainer';
import PreviewPaneContainer from 'containers/postEditor/PreviewPaneContainer';

const PostEditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeaderContainer/>}
      editor={<EditorPaneContainer/>}
      preview={<PreviewPaneContainer/>}
    />
  );
};

export default PostEditorPage;