import React from 'react';
import { eventTypes} from '../../util/event_types';
import { eventCategories } from '../../util/event_categories';
import DropDownEventType from '../builders/dropdown_list_container';
import DropDownCategory from '../builders/category_dropdown_container';
import LocationDropdown from '../builders/location_dropdown';
import Tag from '../tag/tag';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LoadingIcon from '../loading/loading_icon';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
export default class BasicInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            titleClassName: ["float-container"],
            typeClassName: ["float-container"],
            categoryClassName: ["float-container"],
            tagClassName: ["float-container", "width-75"],
            tagField: "",
            organizerClassName: ["float-container"],
          displayStartTimeClass: ["display-start-time"]
        }

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

    updateTagField = e => {
        this.setState({tagField: e.currentTarget.value});
    }

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                this.props.updateLatLng(latLng);
            })
            .catch(error => console.error('Error', error));
        this.props.updateAddress(address);
    };

    render(){
      console.log("we are in the render");
        const locationOptions = ["Venue", "Online event", "To be announced"];
      if (this.props.loading) {
        return <section><LoadingIcon /></section>;
      }
        return (
          <div className="basic-info">
            <form>
              <h1 className="basic-info-header">Basic Info</h1>
              <p className="basic-info-explanation">
                Name your event and tell event-goers why they should come. Add
              </p>
              <p className="basic-info-explanation">
                details that highlight what makes it unique
              </p>
              <div className={this.state.titleClassName.join(" ")}>
                <label htmlFor="title">Event Title</label>
                <input
                  type="text"
                  required
                  id="title"
                  placeholder="Be clear and descriptive."
                  maxLength="75"
                  onChange={e => this.props.updateTitle(e.currentTarget.value)}
                  onFocus={() => this.inFocus("titleClassName")}
                  onBlur={() => this.inBlur("titleClassName")}
                  value={this.props.title}
                />
              </div>
              <p className="counter">{`${this.props.title.length.toString()}/75`}</p>
              <div className="space-between">
                <DropDownEventType items={eventTypes} />

                <DropDownCategory items={eventCategories} />

                <div className="width-thirty-three"></div>
              </div>
              <div className="space-between">
                <div className="column">
                  <div className={this.state.tagClassName.join(" ")}>
                    <label htmlFor="tag">Enter Tag</label>
                    <input
                      type="text"
                      id="tag"
                      placeholder="Add keyword to your event."
                      maxLength="25"
                      onChange={this.updateTagField}
                      onFocus={() => this.inFocus("titleClassName")}
                      onBlur={() => this.inBlur("titleClassName")}
                      value={this.state.tagField}
                    />
                  </div>
                  <div className="space-between">
                    <p>{`${this.props.tags.length}/10 tags.`}</p>
                    <p>{`${this.props.title.length.toString()}/25`}</p>
                  </div>
                </div>
                <button
                  className="outline-button"
                  onClick={() => {
                    this.props.addTag(this.state.tagField);
                    this.setState({ tagField: "" });
                  }}
                >
                  Add
                </button>
              </div>
              <div className="row">
                {this.props.tags.length === 0
                  ? null
                  : this.props.tags.map(tag => <Tag tag={tag} />)}
              </div>
              <div className={this.state.organizerClassName.join(" ")}>
                <label htmlFor="organizer">Organizer</label>
                <input
                  type="text"
                  id="organizer"
                  placeholder="Tell attendees who is organizing this event."
                  maxLength="75"
                  onChange={e =>
                    this.props.updateOrganizer(e.currentTarget.value)
                  }
                  onFocus={() => this.inFocus("organizerClassName")}
                  onBlur={() => this.inBlur("organizerClassName")}
                  value={this.props.organizer}
                />
              </div>
              <p className="counter">{`${this.props.organizer.length.toString()}/75`}</p>
              <div className="separator"></div>
              <div className="one-em"></div>
              <h1 className="basic-info-header">Location</h1>
              <p className="basic-info-explanation">
                Help people in the area discover your event and let attendees
                know where to show up.
              </p>
              <div className="one-em"></div>
              <LocationDropdown items={locationOptions} locationClass="true"/>
              <div className="one-em"></div>
              <PlacesAutocomplete
                value={this.props.address}
                onChange={address => this.props.updateAddress(address)}
                debounce={500}
                onSelect={this.handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading
                }) => (
                  <div>
                    <div className="autocomplete">
                      <FontAwesomeIcon
                        icon={faSearch}
                        color="grey"
                        className="google-auto-complete-icon"
                      />
                      <input
                        type="text"
                        {...getInputProps({
                          placeholder: "Search for a venue or address",
                          required: true
                        })}
                      />
                    </div>
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
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
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
              <div className="separator"></div>
              <div className="one-em"></div>
              <h1 className="basic-info-header">Date and Time</h1>
              <p className="basic-info-explanation">
                Tell event-goers when your event starts and ends so they can
                make plans to attend.
              </p>

              <div className="radio-selectors">
                <label>
                  <input
                    type="radio"
                    value="single"
                    onChange={e =>
                      this.props.updateSingleEvent(e.currentTarget.value)
                    }
                    checked={this.props.singleEvent === "single"}
                  />
                  Single Event - Happens once and can last multiple days
                </label>
                <label>
                  <input
                    type="radio"
                    value="recurring"
                    onChange={e =>
                      this.props.updateSingleEvent(e.currentTarget.value)
                    }
                    checked={this.props.singleEvent === "recurring"}
                  />
                  Recurring Events - Repeats or occurs more than once
                </label>
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
                    label="Event Starts"
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
                    label="Event Ends"
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

              <div className="one-em">

              </div>
              <p className="advanced-settings" onClick={e => this.setState(prevState => {
                if (prevState.displayStartTimeClass.includes("show")){
                  return prevState.displayStartTimeClass.pop();
                } else {
                  return prevState.displayStartTimeClass.push("show");
                }
              })}>Advanced Settings <i className={`arrow ${this.state.displayStartTimeClass.length === 1 ? "down" : "up"}`}></i></p>
              <div className={this.state.displayStartTimeClass.join(" ")}>
                <label htmlFor="checkbox">
                  <input type="checkbox" 
                  checked={this.props.displayStartTime}
                    onChange={e => this.props.updateDisplayStartTime(e.target.checked)}/>
                  Display start time.
                  <p>The start time will be displayed to your attendees</p>
                </label>
                <label htmlFor="checkbox">
                  <input type="checkbox" 
                  checked={this.props.displayEndTime}
                    onChange={e => this.props.updateDisplayEndTime(e.target.checked)} />
                  Display end time.
                  <p>The end time will be displayed to your attendees</p>
                </label>
              </div>
              <div className="seven-size"></div>
            </form>
          </div>
        );
    }
}