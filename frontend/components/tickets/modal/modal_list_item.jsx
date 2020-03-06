import React from 'react';

class ModalListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: 0
        }
    }
    render(){
        const itemList = available => {
            const list = [];
            for (let i = 0; i <= available; i++) {
                const listElement = <li key={i} onClick={() => {
                    this.setState({ selected: i });
                    this.props.updateState(this.props.id, i);
                }}>{i}</li>
                list.push(listElement);
            }
            return list;
        };
        return (
            <div className="modal-list-item">
                <div className="modal-list-col">
                    <p className="modal-ticket-name">{this.props.name}</p>
                    <p className="modal-ticket-price">{`$${this.props.price.toFixed(2)}`}</p>
                    <p className="modal-ticket-remaining">{`${(this.props.quantity - this.props.tickets_sold).toString()} REMAINING Sales end on ${new Date(this.props.sale_end_time).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })}`}</p>
                </div>
                <div className="ticket-modal-dropdown">
                    <div className="select-box">
                        <p>{this.state.selected}</p>
                        <p><i className="arrow down"></i></p>
                    </div>
                    <div className="relative-custom">
                        <ul className={`ticket-dropdown-content ${this.props.locationClass ? "auto-height" : ""}`} >
                            {itemList(this.props.tickets_available)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalListItem;