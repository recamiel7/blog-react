import React from 'react';
import EditorTemplate from 'components/scheduleEditor/EditorTemplate';
import EditorHeader from 'components/scheduleEditor/EditorHeader';
import EditorPane from 'components/scheduleEditor/EditorPane';

const ScheduleEditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeader/>}
      editor={<EditorPane/>}
    />
  );
};

export default ScheduleEditorPage;