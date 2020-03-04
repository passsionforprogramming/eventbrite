import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarIndex from './navbar_index';
import LoginNavBar from './login_navbar';
import SignedInNavBar from './signed_in_navbar';
import BasicInfoNavBar from './basic_info_navbar';
import PublishEventNavBar from './publish_event_navbar';
const NavBar = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" render={(props) => <NavBarIndex {...props} />} />
                <Route exact path="/login" render={(props) => <LoginNavBar {...props} />} />
                <Route exact path="/signin" render={(props) => <LoginNavBar {...props} />} />
                <Route exact path="/signup" render={(props) => <LoginNavBar {...props} />} />
                <Route exact path="/dashboard" render={(props) => <SignedInNavBar {...props} />} />
                <Route exact path="/likes" render={(props) => <BasicInfoNavBar {...props} />} />
                <Route exact path="/createEvent" render={(props) => <BasicInfoNavBar {...props} />} />
                <Route exact path="/manage" render={(props) => <BasicInfoNavBar {...props} />} />
                <Route  path="/manageEvents/" render={(props) => <PublishEventNavBar {...props} />} />
                <Route exact path="/manageEvents/:eventId/basicInfo" render={(props) => <PublishEventNavBar {...props} />} />
                <Route exact path="/manageEvents/:eventId/details" render={(props) => <PublishEventNavBar {...props} />} />
                <Route exact path="/manageEvents/:eventId/tickets" render={(props) => <PublishEventNavBar {...props} />} />
            </Switch>
        </div>
    )
}

export default NavBar;