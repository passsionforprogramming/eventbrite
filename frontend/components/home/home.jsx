import React from 'react';
import EventSearchBox from '../event_box/event_box';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
const Home = () => (
    
       <div>
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
              <div className="arrow-circle">
                     <FontAwesomeIcon icon={faArrowCircleRight} 
                     color={"orangered"}
                     className="the-arrow"/>
              </div>
             

       </div>

)

export default Home;