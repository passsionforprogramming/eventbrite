import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
export default class Ticket extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          nameClassName: ["float-container"],
          quantityClassName: ["float-container"],
          selected: null
        };
    }

    selected = arg => e => {
        this.setState({selected: arg});
        console.logt(this.state.selected);
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
    render(){
        return (
          <div className="ticket">
            <FontAwesomeIcon icon={faTicketAlt} className="ticket-icon" />
            <p className="ticket-create">Create your first ticket</p>
            <button className="red-button">Create Ticket</button>
            <div className="create-ticket">
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
              </form>
            </div>
          </div>
        );
    }
}