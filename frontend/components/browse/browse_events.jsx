import React from 'react';
import { eventCategories } from '../../util/event_categories';
import EventListItem from '../search_bar/event_list_item';
class BrowseEvents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            moreCategories: false,
            category: "Anything",
            date: "Any day"
        }
    }
    render(){
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
                    <ul className="date-list-browse">
                        {newDateList}
                    </ul>
                    <div className="category-filter-arrow-row">
                        <p className="filters-header">Category</p>
                        <span className="arrow-down black"></span>
                    </div>
                    <ul className="date-list-browse">
                        {categoryList}
                    </ul>
                    {
                        !this.state.moreCategories ? <p className="more-categories" onClick={() => this.setState({ moreCategories: true })}>More Categories</p>:
                        <p className="more-categories" onClick={() => this.setState({moreCategories: false})}>Less Categories</p>
                    }
                </div>
                <div className="evt-search-list">

                </div>
                <div className="event-maps">

                </div>
            </div>
        )
    }
}

export default BrowseEvents;