import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import CommentEdit from 'components/guest/CommentEdit';
import CommentBody from 'components/guest/CommentBody';

const PostPage = () => {
  return (
    <PageTemplate>
      <PostInfo/>
      <PostBody/>
      <CommentBody/>
      <CommentEdit/>
    </PageTemplate>
  );
};

export default PostPage;