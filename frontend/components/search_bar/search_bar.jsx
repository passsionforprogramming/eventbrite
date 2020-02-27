import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AutoCompleteList from "./auto_complete_list";
import { connect } from 'react-redux';
import { autoComplete } from '../../actions/event_actions';
import { debounce } from '../../util/debounce_util';
class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timer: null,
            search: ""
        }
    }
    //convert to class component
    handleChange = (e) => {
        clearTimeout(this.state.timer);
        let timer = setTimeout(() => this.props.autocomplete(this.state.search), 500);
        this.setState({timer, search: e.currentTarget.value});
    }
    render(){
        const { events } = this.props;
        const renderAutocomplete = this.props.events.length > 0 ? <div className="auto-complete-box">
            <AutoCompleteList 
            events={events}/>
        </div> : null;
        return (
            <div className="search-bar">
                <FontAwesomeIcon icon={faSearch} color="black" />
                <input type="text"
                    placeholder="Search Events" 
                    onChange={this.handleChange}
                    value={this.state.search} />
                {renderAutocomplete}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    events: state.entities.search
});

const mapDispatchToProps = dispatch => ({
    autocomplete: (query) => dispatch(autoComplete(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);