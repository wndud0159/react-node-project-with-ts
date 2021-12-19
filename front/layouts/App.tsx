import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
const Login = loadable(() => import('../pages/Login'));
const SignUp = loadable(() => import('../pages/SignUp'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login"></Redirect>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={SignUp}></Route>
    </Switch>
  );
};

export default App;
