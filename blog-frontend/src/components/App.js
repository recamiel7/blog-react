import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MainPage, PostEditorPage, PostListPage, PostPage, ScheduleEditorPage, ScheduleListPage, SchedulePage, NotFoundPage} from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        
        <Route path="/postPage/:postPage" component={PostListPage}/>
        <Route path="/postTag/:postTag/:postPage?" component={PostListPage}/>
        <Route path="/post/:postId" component={PostPage}/>
        <Route path="/postEditor" component={PostEditorPage}/>

        <Route path="/schedulePage/:schedulePage" component={ScheduleListPage}/>
        <Route path="/schedule/:scheduleId" component={SchedulePage}/>
        <Route path="/scheduleEditor" component={ScheduleEditorPage}/>

        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
};

export default App;