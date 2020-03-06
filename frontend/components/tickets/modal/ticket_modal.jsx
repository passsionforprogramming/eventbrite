import React from 'react';
import { getBatchByEvent } from '../../../util/ticket_api_util';
class TicketModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            batches: []
        }
    }
    componentDidMount(){
        getBatchByEvent().then(batches => this.setState({batches}));
    }
    render(){
        return (
            <div className="ticket-modal">
                <div className="ticket-modal-content">
                    <p className="modal-event-title">{this.props.title}</p>
                    <p className="modal-event-date">{this.props.date}</p>
                    
                    <p>This is a test</p>
                </div>
            </div>
        );
    }
}

export default TicketModal; 