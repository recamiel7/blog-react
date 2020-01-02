import React from 'react';
import EditorTemplate from 'components/scheduleEditor/EditorTemplate';
import EditorHeader from 'components/scheduleEditor/EditorHeader';
import EditorPaneContainer from 'containers/scheduleEditor/EditorPaneContainer';

const ScheduleEditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeader/>}
      editor={<EditorPaneContainer/>}
    />
  );
};

export default ScheduleEditorPage;