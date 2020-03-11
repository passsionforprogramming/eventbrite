import React from 'react';
import EventSearchBox from '../event_box/event_box';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { sendDropdownEvent, arrowSearchClicked } from "../../actions/ui_actions";
import InfiniteScroll from "react-infinite-scroll-component";
import Thumbnail from "../event_display/thumbnail";
import { fetchAllEvents } from "../../actions/event_actions";
import { connect } from 'react-redux';
class DashBoard extends React.Component {
       constructor(props){
              super(props);
              this.state = {
                     hideArrow: false
              }
       }

       componentDidMount() {
              this.props.fetchAllEvents().then(console.log("Type of", typeof this.props.events));
       }

       hideIt = () => {
              this.setState({hideArrow: true})
       }

       showIt = () => {
              this.setState({hideArrow: false})
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
                            <EventSearchBox hideIt={this.hideIt} showIt={this.showIt}/>
                            <div onClick={() => {
                                   this.props.arrowSearchClicked(true);
                            }} className={`arrow-circle ${this.state.hideArrow ? "hide-arrow" : ""}`}>
                                   <FontAwesomeIcon icon={faArrowCircleRight}
                                          color={"orangered"}
                                          className="the-arrow" />
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
 events: Object.values(state.entities.totalEvents)
});

const mapDispatchToProps = dispatch => ({
  sendDropdownEvent: (event) => dispatch(sendDropdownEvent(event)),
  fetchAllEvents: () => dispatch(fetchAllEvents()),
  arrowSearchClicked: val => dispatch(arrowSearchClicked(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);