import React from 'react';
import { getBatchByEvent } from '../../../util/ticket_api_util';
import TicketDropDownList from '../../builders/dropdown_list_container';
import LoadingIcon from '../../loading/loading_icon';
class TicketModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            batches: [],
            selected: 0,
        }
    }
    componentDidMount(){
        getBatchByEvent(this.props.id).then(batches => this.setState({batches}));
    }
    render(){
        const itemList = available => {
            const list = [];
            for (let i = 0; i < available; i++){
                const listElement = <li key={i} onClick={() => this.setState({selected: i})}>{i}</li>
                list.push(listElement);
            }
            return list;
        };
            return (
                <div className="ticket-modal">
                    <div className="ticket-modal-content">
                        {this.state.batches.length === 0 && <LoadingIcon />}
                        <p className="modal-event-title">{this.props.title}</p>
                        <p className="modal-event-date">{this.props.date.toLocaleDateString()}</p>
                        <p className="ticket-modal-header">Tickets</p>
                        <div className="modal-list">
                            {
                                this.state.batches.map(batch => (
                                    <div className="modal-list-item">
                                        <div className="modal-list-col">
                                            <p className="modal-ticket-name">{batch.name}</p>
                                            <p className="modal-ticket-price">{batch.price}</p>
                                            <p className="modal-ticket-remaining">{`${(batch.quantity - batch.tickets_sold).toString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })} REMAINING Sales end on ${new Date(batch.sale_end_time).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })}`}</p>
                                        </div>
                                        <div className="my-custom-dropdown">
                                            <div className="select-box">
                                                <p>{this.state.selected}</p>
                                                <p><i className="arrow down"></i></p>
                                            </div>
                                            <div className="relative-custom">
                                                <ul className={`event-type-dropdown-content ${this.props.locationClass ? "auto-height" : ""}`} >
                                                    {itemList(batch.available)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <p>This is a test</p>
                    </div>
                </div>
            );
        
        
    }
}

export default TicketModal; 