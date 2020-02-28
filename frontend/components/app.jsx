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
import StartNewEvent from './main/start_new_event';
import Footer from './footer/footer';
import ManageEvents from './create_event/manage_event';
import ShowEvent from './event_display/show_event';
import LikesList from './likes/likes_list';
import BrowseEvents from './browse/browse_events';
const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signin" component={SignIn} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <AuthRoute exact path="/" component={Home}/>
      <ProtectedRoute exact path="/createEvent" component={StartNewEvent} />
      <ProtectedRoute exact path="/manageEvents/" component={ManageEvents} />
      <ProtectedRoute exact path="/manageEvents/:eventId" component={ManageEvents} />
      <ProtectedRoute exact path="/manageEvents/:eventId/basicInfo" component={ManageEvents} />
      <ProtectedRoute exact path="/manageEvents/:eventId/details" component={ManageEvents} />
      <ProtectedRoute exact path="/manageEvents/:eventId/tickets" component={ManageEvents} />
      <Route exact path="/event/:eventId" component={ShowEvent} />
      <ProtectedRoute exact path="/likes" component={LikesList} />
      <Route exact path="/browse_events" component={BrowseEvents} />
    </Switch>
    <Footer />
  </div>
);

export default App;