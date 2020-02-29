import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BatchList from '../tickets/batches/batch_list';
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
export default class Ticket extends React.Component {
  componentDidMount(){
    this.props.fetchBatches(this.props.match.params.eventId);
  }
    constructor(props){
        super(props);
        this.state = {
          nameClassName: ["float-container"],
          quantityClassName: ["float-container"],
          priceClassName: ["float-container"],
          selected: null,
          createTicketClassName: ["create-ticket"]
        };
    }

    selected = arg => e => {
        this.setState({selected: arg});
    }

    inFocus = (arg) => {
        this.setState(prevState => (
            prevState[arg].push("focused")
        ));
    }

    inBlur = (arg) => {
        this.setState(prevState => (
            prevState[arg].pop()
        ))
    }

    toggleTicketForm = () => {
      this.setState(prevState => {
        if (!prevState.createTicketClassName.includes("hidden-ticket-form")){
          return prevState.createTicketClassName.push("hidden-ticket-form");
        } else {
          return prevState.createTicketClassName.pop();
        }
      })
    }
    render(){
      const batchDisplay = this.props.batches.length === 0 ? <div className={`align-center ${this.state.createTicketClassName.length > 1 && "all-center"}`}>
        <FontAwesomeIcon icon={faTicketAlt} className="ticket-icon" />
        <p className="ticket-create">Create your first ticket</p>
        <button className="red-button" onClick={() => this.toggleTicketForm()}>Create Ticket</button>
      </div> : <div className="batch-ticket-list">
        <div className="ticket-empty-height">
            
        </div>
        <p className="basic-info-header">Tickets</p>
        <div className="btn-row">
            <button className="red-button" 
            onClick={() => this.toggleTicketForm()}>Create Ticket</button>
        </div>
        <div className="three-em">

        </div>
          <BatchList 
            batches={this.props.batches} toggleForm={this.toggleTicketForm}/>
      </div>;
        return (
          <div className={`ticket ${this.props.batches.length > 0 && "to-start"}`}>
            {batchDisplay}
            <div className={this.state.createTicketClassName.join(" ")}>
              <p className="add-ticket">Add Ticket</p>
              <div className="ticket-price-buttons">
                <button
                  onClick={this.selected("paid")}
                  className={
                    this.state.selected !== "paid"
                      ? `price-button`
                      : "price-button btn-selected"
                  }
                >
                  Paid
                </button>
                <button
                  onClick={this.selected("free")}
                  className={
                    this.state.selected !== "free"
                      ? `price-button`
                      : "price-button btn-selected"
                  }
                >
                  Free
                </button>
                <button
                  onClick={this.selected("donation")}
                  className={
                    this.state.selected !== "donation"
                      ? `price-button`
                      : "price-button btn-selected"
                  }
                >
                  Donation
                </button>
              </div>
              <form>
                <div className={this.state.nameClassName.join(" ")}>
                  <label htmlFor="ticket-name">Name</label>
                  <input
                    type="text"
                    required
                    id="ticket-name"
                    maxLength="50"
                    onChange={e => this.props.updateName(e.currentTarget.value)}
                    onFocus={() => this.inFocus("nameClassName")}
                    onBlur={() => this.inBlur("nameClassName")}
                    value={this.props.name}
                  />
                </div>
                <p className="counter">{`${this.props.name.length.toString()}/50`}</p>
                <div className={this.state.quantityClassName.join(" ")}>
                  <label htmlFor="quantity">Total Quantity</label>
                  <input
                    type="text"
                    required
                    id="quantity"
                    maxLength="50"
                    onChange={e => this.props.updateQuantity(e.currentTarget.value)}
                    onFocus={() => this.inFocus("quantityClassName")}
                    onBlur={() => this.inBlur("quantityClassName")}
                    value={this.props.quantity}
                  />
                </div>
                <div className={this.state.priceClassName.join(" ")}>
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    required
                    id="price"
                    maxLength="25"
                    placeholder="0.00"
                    onChange={e => this.props.updatePrice(e.currentTarget.value)}
                    onFocus={() => this.inFocus("priceClassName")}
                    onBlur={() => this.inBlur("priceClassName")}
                    value={this.props.price}
                  />
                </div>
              
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="space-between">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    disablePast={true}
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Sales Start"
                    value={this.props.startDate}
                    onChange={startDate =>
                      this.props.updateStartDate(startDate)
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                  <KeyboardTimePicker
                    margin="normal"
                    disablePast={true}
                    id="time-picker"
                    label="Start Time"
                    value={this.props.startDate}
                    onChange={startDate =>
                      this.props.updateStartDate(startDate)
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change time"
                    }}
                  />
                </div>
                <div className="space-between">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    disablePast={true}
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Sales End"
                    value={this.props.endDate}
                    onChange={endDate =>
                      this.props.updateEndDate(endDate)
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                  <KeyboardTimePicker
                    margin="normal"
                    disablePast={true}
                    id="time-picker"
                    label="End Time"
                    value={this.props.endDate}
                    onChange={endDate =>
                      this.props.updateEndDate(endDate)
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change time"
                    }}
                  />
                </div>
              </MuiPickersUtilsProvider>
              <div className="row">
                <button className="cancel-btn" onClick={() => this.toggleTicketForm()}>Cancel</button>
                <button 
                className="save-ticket-btn"
                onClick={() => {
                  const ticket = {
                    name: this.props.ticket.name,
                    price: this.props.ticket.price,
                    sale_start_time: this.props.ticket.startDate,
                    sale_end_time: this.props.ticket.endDate,
                    quantity: this.props.ticket.quantity,
                    event_id: this.props.match.params.eventId,
                    type: this.state.selected
                  };
                  this.props.createTicket(ticket).then(() => this.toggleTicketForm());
                }}>Save</button>
              </div>
              </form>
            </div>
          </div>
        );
    }
}