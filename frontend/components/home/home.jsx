import React from 'react';
import EventSearchBox from '../event_box/event_box';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { sendDropdownEvent, arrowSearchClicked } from "../../actions/ui_actions";
import { fetchAllEvents } from "../../actions/event_actions";
import InfiniteScroll from "react-infinite-scroll-component";
import Thumbnail from "../event_display/thumbnail";
import { connect } from 'react-redux';
import { likeEvent } from '../../actions/like_actions';
class Home extends React.Component {
       constructor(props){
              super(props);
              this.state = {
                     hideArrow: false
              }
       }

       hideIt = () => {
              this.setState({ hideArrow: true })
       }

       showIt = () => {
              this.setState({ hideArrow: false })
       }
       
       componentDidMount(){
              this.props.fetchAllEvents();
       }
       render(){
              return (

                     <div className="main-home-div" onClick={() => {
                            if (this.props.showDropDown) {
                                   this.props.sendDropdownEvent({ dateDropDown: false })
                            }
                     }}>
                            <div className="background-image">

                            </div>
                            <div className="main-image">

                            </div>
                            <div className="small-main-text">
                                   Made for
              </div>
                            <div className="large-main-text">
                                   those who do
              </div>
                            <EventSearchBox />
                            <div className={`arrow-circle ${this.props.hideArrow && "hide-arrow"}`} onClick={() => this.props.arrowSearchClicked(true)}>
                                   <FontAwesomeIcon icon={faArrowCircleRight}
                                          color={"orangered"}
                                          className="the-arrow" />
                            </div>

                            <div className="browse">
                                   <p className="browse-text">Browse other popular events</p>
                            <span className="browse-down"></span>
                            </div>

                            <div className="event-list">
                                   <InfiniteScroll
                                          dataLength={20}
                                          next={() => this.props.fetchAllEvents()}
                                          hasMore={true}>
                                   <div className="thumb-list">
                                                 {
                                                        this.props.events.map(event => (
                                                               <Thumbnail
                                                                      eventTime={event.eventTime}
                                                                      title={event.title}
                                                                      imageUrl={event.imageUrl}
                                                                      address={event.address}
                                                                      key={event.id}
                                                                      id={event.id}
                                                                       />
                                                        ))
                                                 }
                                   </div>
                                   </InfiniteScroll>
                            </div>


                     </div>

              )
       }
} 


const mapStateToProps = state => ({
  showDropDown: state.ui.homeUi.dateDropDown,
  events: Object.values(state.entities.totalEvents),
  hideArrow: state.ui.homeUi.hideArrow
});

const mapDispatchToProps = dispatch => ({
  sendDropdownEvent: event => dispatch(sendDropdownEvent(event)),
  fetchAllEvents: () => dispatch(fetchAllEvents()),
  like: (eventId, userId) => dispatch(likeEvent(eventId, userId)),
  arrowSearchClicked: val => dispatch(arrowSearchClicked(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);