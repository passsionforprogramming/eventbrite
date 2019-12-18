import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarIndex from './navbar_index';
import LoginNavBar from './login_navbar';
const NavBar = (props) => (
    <div>
        <Switch>
            <Route exact path="/" render={(props) => <NavBarIndex {...props}/>} />
            <Route exact path="/login" render={(props) => <LoginNavBar {...props} />} />
            <Route exact path="/signin" render={(props) => <LoginNavBar {...props} />} />
        </Switch>
    </div>
)

export default NavBar;