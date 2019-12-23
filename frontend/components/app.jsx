import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import NavBarContainer from './navbar/navbar_container';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';
import SignIn from './session_form/sign_in';
import Dashboard from './main/dashboard';
import CreateEvent from './create_event/create_event';
import Footer from './footer/footer';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signin" component={SignIn} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={Home}/>
      <ProtectedRoute exact path="/createEvent" component={CreateEvent} />
    </Switch>
    <Footer />
  </div>
);

export default App;