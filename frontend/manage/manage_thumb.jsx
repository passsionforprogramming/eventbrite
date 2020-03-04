import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Placeholder from './placeholder.png'
const ManageThumb = props => {
    const eventTime = new Date(props.eventTime);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const monthOptions = { month: 'short'};
    const dayOptions = { day: 'numeric'};
    const capitalize = str => {
        let words = str.split(" ");
        let newWord = "";
        words.forEach((word, i) => {
        newWord += word.length > 1 ? (word[0].toUpperCase() + word.slice(1).toLowerCase()) : word.toUpperCase();
        if (i !== words.length-1) newWord += " ";
        });
       return newWord;
    };
    return (
      <div className="manage-thumb">
        <div className="cal-col">
          <p className="month-short-manage">
            {eventTime.toLocaleDateString("en-US", monthOptions).toUpperCase()}
          </p>
          <p className="month-short-day">
            {eventTime.toLocaleDateString("en-US", dayOptions)}
          </p>
        </div>
        <img
          className="manage-thumb-img"
          src={props.imageUrl ? props.imageUrl : Placeholder}
          alt="event-image"
        />
        <div className="manag-thumb-details-col">
          <p className="manage-thumb-event-title">{capitalize(props.title)}</p>
          <p className="manage-thumb-location">{props.address}</p>
          <p className="manage-thumb-full-date">
            {eventTime.toLocaleDateString("en-US", options)}
          </p>
        </div>
        <p className="sold">{`${props.sold}/${props.tickets}`}</p>
        <p className="sold">{props.gross ? props.gross : "0"}</p>
        <p className="sold">{props.status ? capitalize(props.status) : ""}</p>
        <span className="elipsis">
          <FontAwesomeIcon icon={faEllipsisV} className="icon-elipsis" />
          <div className="crud-box">
            <p
              onClick={() => {
                props.editBatch(props.idx, props.batches);
                props.toggleForm();
              }}
              className="crud-p"
            >
              Edit
            </p>
            <p onClick={() => props.deleteBatch(props.id)} className="crud-p">
              Delete
            </p>
          </div>
        </span>
      </div>
    );
};

export default ManageThumb;