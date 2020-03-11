import React from 'react';
import { eventCategories } from '../../util/event_categories';
import EventListItem from '../search_bar/event_list_item';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingIcon from '../loading/loading_icon';
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import MapsContainer from './maps_container';
import { submitSearch } from '../../actions/event_actions';
import { connect } from 'react-redux';
class BrowseEvents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            moreCategories: false,
            category: "Anything",
            date: "Any day",
            address: ""
        }
    }

    componentDidMount(){
        const {lat, lon, category} = this.props.match.params;
        this.props.submitSearch(null, null, category, lat, lon);
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
    render(){
        const searchOptions = {
            types: ['(cities)']
        };
        const newCategories = ["Anything", ...eventCategories];
        const categoryList = this.state.moreCategories ? newCategories.map((category, i) => {
            return <li key={i} className={this.state.category === category ? "the-selected" : ""} onClick={() => this.setState({category})}>{category}</li>
        }) : newCategories.slice(0, 4).map((category, i) => {
            return <li key={i} onClick={() => this.setState({ category })}>{category}</li>
        });
        const dateList = ["Any day", "Pick a date...", "Today", "Tomorrow", "This weekend"];
        const newDateList = dateList.map((date, i) => (
            <li key={i} className={this.state.date === date ? "the-selected" : ""} onClick={() => this.setState({date})}>{date}</li>
        ));
        return (
          <div className="browse-events">
            <div className="filters">
              <p className="filters-header">Filters</p>
              <div className="date-filter-arrow-row">
                <p className="filters-header">Date</p>
                <span className="arrow-down black"></span>
              </div>
              <ul className="date-list-browse">{newDateList}</ul>
              <div className="category-filter-arrow-row">
                <p className="filters-header">Category</p>
                <span className="arrow-down black"></span>
              </div>
              <ul className="date-list-browse">{categoryList}</ul>
              {!this.state.moreCategories ? (
                <p
                  className="more-categories"
                  onClick={() => this.setState({ moreCategories: true })}
                >
                  More Categories
                </p>
              ) : (
                <p
                  className="more-categories"
                  onClick={() => this.setState({ moreCategories: false })}
                >
                  Less Categories
                </p>
              )}
            </div>
            <div className="evt-search-list">
              <div className="search-row">
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
                                className: "autocomplete-suggestion-content",
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
                <button className="search-button">Search</button>
              </div>
              {this.props.events.length > 0 ? this.props.events.map(event => (
                <EventListItem
                  title={event.title}
                  id={event.id}
                  key={event.id}
                  eventTime={event.startDate}
                  imageUrl={event.imageUrl}
                  address={event.address}
                />
              )) : <div className="no-events-match">
                  <p className="basic-info-header">There are no events in the area that match your search request.</p>
              </div> }
            </div>
            <div className="event-maps">
              <MapsContainer />
            </div>
          </div>
        );
    }
}


const mapStateToProps = state => ({
    events: state.entities.search
});

const mapDispatchToProps = dispatch => ({
  submitSearch: (query, date, category, lat, lon) =>
    dispatch(submitSearch(query, date, category, lat, lon))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents);