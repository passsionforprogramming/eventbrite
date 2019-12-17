import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import NavBar from './navbar/navbar';
import { Switch } from 'react-router-dom';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
    <h1>Hello World</h1>
  </div>
);

export default App;