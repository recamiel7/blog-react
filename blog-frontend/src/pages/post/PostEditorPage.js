import React from 'react';
import EditorTemplate from 'components/postEditor/EditorTemplate';
import EditorHeader from 'components/postEditor/EditorHeader';
import EditorPane from 'components/postEditor/EditorPane';
import PreviewPane from 'components/postEditor/PreviewPane';

const PostEditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeader/>}
      editor={<EditorPane/>}
      preview={<PreviewPane/>}
    />
  );
};

export default PostEditorPage;