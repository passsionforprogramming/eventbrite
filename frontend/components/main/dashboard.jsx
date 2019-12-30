import React from 'react';
import CreateEvent from '../create_event/basic_info_container';
import SaveContinueModal from '../create_event/save_and_continue';
const Dashboard = (props) => (
<div>
    <CreateEvent />
    <SaveContinueModal />
    </div>
);

export default Dashboard;
