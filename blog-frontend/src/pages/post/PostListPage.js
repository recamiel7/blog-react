import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import PostList from 'components/list/PostList';
import Pagination from 'components/list/Pagination';

const PostListPage = () => {
  return (
    <PageTemplate>
      <ListWrapper type={'게시글 리스트'}>
        <PostList/>
        <Pagination/>
      </ListWrapper>
    </PageTemplate>
  );
};

export default PostListPage;