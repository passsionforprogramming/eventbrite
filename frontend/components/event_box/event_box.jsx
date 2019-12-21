import React from 'react'
import { sendDropdownEvent } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import RangePicker from "react-range-picker";
class EventSearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked: "Any date",
            date: "",
            category: "Anything"
        }
    }
    updateDay = day => {
        this.setState({checked: day});
    }
    update = field => e => {
        return this.setState({ [field]: e.currentTarget.value})
    }

    updateRange = (a, b) => {
        console.log("first", a);
        console.log("second", b);
    }
    
    render(){
        const days = [
            "Any date",
            "Today",
            "Tomorrow",
            "This weekend",
            "This week",
            "Next week",
            "This month",
            "Next month",
            "Pick a date..."
        ];
        const dateList = days.map((day, i) => {
            if (this.state.checked === day){
                return (
                    <li key={i} onClick={() => this.updateDay(day)}>&#10003; {day}</li>
                )
            } else {
                return <li key={i} onClick={() => this.updateDay(day)}>&nbsp;&nbsp;&nbsp; {day} </li>
            }
            
        })
        return (
          <div className="large-box">
            <p className="box-top">I want to go out</p>
            <div className="custom-select">
              <p
                onClick={() =>
                  this.props.sendDropDownEvent({ dateDropDown: true })
                }
                className="box-select-category"
              >
                {this.state.checked}
                {this.state.checked === "Pick a date..." ? (
                  <RangePicker
                    className="range-picker"
                    onChange={this.updateRange}
                  />
                ) : null}
              </p>
              <p className="down-arrow"> ▾ </p>
            </div>
            <div
              className={this.props.showDropDown ? "relative show" : "relative"}
            >
              <ul className="custom-select-dropdown-content">{dateList}</ul>
            </div>
            <div className="five-height"></div>
            <p className="box-top">In</p>
            <div className="location-select">
              <p className="box-select-category">San Francisco</p>
            </div>

            <div className="one-em"></div>
            <p className="box-top">And I'm in the mood for</p>
            <div className="custom-select">
              <p className="box-select-category">{this.state.category}</p>
              <p className="down-arrow"> ▾ </p>
            </div>
          </div>
        );
    
    }
}

const mapStateToProps = state => ({
    showDropDown: state.ui.homeUi.dateDropDown
})

const mapDispatchToProps = dispatch => ({
  sendDropDownEvent: (event) => dispatch(sendDropdownEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventSearchBox);

