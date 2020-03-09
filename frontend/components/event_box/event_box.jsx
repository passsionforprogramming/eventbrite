import React from 'react'
import { sendDropdownEvent } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import RangePicker from "react-range-picker";
import LoadingIcon from '../loading/loading_icon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
class EventSearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked: "Any date",
            date: "",
            category: "Anything",
            address: ""
        }
    }
    updateDay = day => {
        this.setState({checked: day});
    }
    update = field => e => {
        return this.setState({ [field]: e.currentTarget.value})
    }

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({ lat: latLng.lat, lng: latLng.lng });
      })
      .catch(error => console.error("Error", error));
    const state = address.split(",")[1].trim();
    this.setState({ address, state });
  };

    updateRange = (a, b) => {
        console.log("first", a);
        console.log("second", b);
    }
    
    render(){
      // const style = {
      //   color: 'rgba($color: #310a2f, $alpha: 0.7)',
      //   fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      //   fontSize: ".8em"
      // };
      const searchOptions = {
        types: ['(cities)']
      }
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
              className="relative"
            >
              <ul className={`custom-select-dropdown-content ${this.props.showDropDown && 'show'}` }>{dateList}</ul>
            </div>
            <div className="five-height"></div>
            <p className="box-top">In</p>
            <div className="location-select">
              <PlacesAutocomplete
                value={this.state.address}
                onChange={address => this.setState({ address })}
                debounce={500}
                onSelect={this.handleSelect}
                searchOptions={searchOptions}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading
                }) => (
                    <div>
                        <input
                          type="text"
                          {...getInputProps({
                            placeholder: "Search City",
                            required: true,
                            className: "auto-input-style"
                          })}
                        />
                      <div className="autocomplete-dropdown-container">
                        {loading && <LoadingIcon />}
                        {suggestions.map(suggestion => {
                          const className = suggestion.active
                            ? "suggestion-item--active row"
                            : "suggestion-item row";
                          const style = suggestion.active
                            ? { backgroundColor: "#fafafa", cursor: "pointer" }
                            : { backgroundColor: "#ffffff", cursor: "pointer" };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style
                              })}
                            >
                              <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                className="map-marker"
                              />
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
              </PlacesAutocomplete>
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

