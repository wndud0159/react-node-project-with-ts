import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
// 코드 스플리팅
const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login"></Redirect>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={SignUp}></Route>
      {/* route parameter (:foo)*/}
      <Route path="/workspace/:workspace" component={Workspace}></Route>
    </Switch>
  );
};

export default App;
