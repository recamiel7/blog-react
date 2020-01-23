import React from 'react';
import EditorTemplate from 'components/scheduleEditor/EditorTemplate';
import EditorHeaderContainer from 'containers/scheduleEditor/EditorHeaderContainer';
import EditorPaneContainer from 'containers/scheduleEditor/EditorPaneContainer';

const ScheduleEditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeaderContainer/>}
      editor={<EditorPaneContainer/>}
    />
  );
};

export default ScheduleEditorPage;