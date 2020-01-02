import React from 'react';
import BasicInfoContainer from './basic_info_container';
import { Route, Switch } from 'react-router-dom';
import DetailsContainer from './details_container';
import TicketContainer from './ticket_container';
const MainEventContent = props => {
    return (
        <div>
            <Switch >
                <Route exact path="/manageEvents/:eventId" render={(props) => <BasicInfoContainer {...props} />} />
                <Route exact path="/manageEvents/:eventId/basicInfo" render={(props) => <BasicInfoContainer {...props} />} />
                <Route exact path="/manageEvents/:eventId/details" render={(props) => <DetailsContainer {...props} />} />
                <Route exact path="/manageEvents/:eventId/tickets" render={(props) => <TicketContainer {...props} />} />
            </Switch>
        </div>
    )
}

export default MainEventContent