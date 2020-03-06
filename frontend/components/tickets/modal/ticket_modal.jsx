import React from 'react';
import { getBatchByEvent } from '../../../util/ticket_api_util';
import TicketDropDownList from '../../builders/dropdown_list_container';
import LoadingIcon from '../../loading/loading_icon';
import ModalListItem from './modal_list_item';
class TicketModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            batches: [],
        }
    }
    componentDidMount(){
        getBatchByEvent(this.props.id).then(batches => this.setState({batches}));
    }

    updateState = (id, num) => {
        this.setState(prevState => ({
            ...prevState,
            tickets: {
                ...prevState.tickets,
                [id]: num
            }
        }))
    }
    render(){
            return (
                <div className="ticket-modal">
                    <div className="ticket-modal-content">
                        {this.state.batches.length === 0 && <LoadingIcon />}
                        <p className="modal-event-title">{this.props.title}</p>
                        <p className="modal-event-date">{this.props.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
                        <p className="ticket-modal-header">Tickets</p>
                        <div className="modal-list">
                            {
                                this.state.batches.map(batch => (
                                    <ModalListItem 
                                    key={batch.id}
                                    id={batch.id}
                                    name={batch.name}
                                    price={batch.price}
                                    quantity={batch.quantity}
                                    tickets_sold={batch.tickets_sold}
                                    sale_end_time={batch.sale_end_time}
                                    tickets_available={batch.tickets_available}
                                    updateState={this.updateState}/>
                                ))
                            }
                        </div>
                        <div className="let-space">
                            <button className="discard-button"> Cancel</button>
                            <button className="red-button">
                                Checkout
                        </button>
                        </div>
                    </div>
                </div>
            );
        
        
    }
}

export default TicketModal; 