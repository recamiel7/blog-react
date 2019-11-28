import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ScheduleList from 'components/list/ScheduleList';
import Pagination from 'components/list/Pagination';

const ScheduleListPage = () => {
  return (
    <PageTemplate>
      <ListWrapper  type={'일정 관리 리스트'}>
        <ScheduleList/>
        <Pagination/>
      </ListWrapper>
    </PageTemplate>
  );
};

export default ScheduleListPage;