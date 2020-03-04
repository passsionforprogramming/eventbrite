import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Placeholder from './placeholder.png'
const ManageThumb = props => {
    const eventTime = new Date(props.eventTime);
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const monthOptions = { month: 'short'};
    const dayOptions = { day: 'numeric'};
    return (
        <div className="manage-thumb">
            <div className="cal-col">
                <p>{eventTime.toLocaleDateString('en-US', monthOptions)}</p>
                <p>{eventTime.toLocaleDateString('en-US', dayOptions)}</p>
            </div>
            <img className="manage-thumb-img" src={props.imageUrl ? props.imageUrl : Placeholder} alt="event-image"/>
            <div className="manag-thumb-details-col">
                <p className="manage-thumb-event-title">{props.title}</p>
                <p className="manage-thumb-location">{props.address}</p>
                <p className="manage-thumb-full-date">{eventTime.toLocaleDateString('en-US', options)}</p>
            </div>
            <p className="sold">
                {`${props.sold}/${props.tickets}`}
            </p>
            <p className="sold">
                {props.gross ? props.gross : "0"}
            </p>
            <p className="sold">
                {props.status}
            </p>
            <span className="elipsis">
                <FontAwesomeIcon icon={faEllipsisV} className="icon-elipsis" />
                <div className="crud-box">
                    <p onClick={() => {
                        props.editBatch(props.idx, props.batches);
                        props.toggleForm();
                    }} className="crud-p">Edit</p>
                    <p onClick={() => props.deleteBatch(props.id)} className="crud-p">Delete</p>
                </div>
            </span>

        </div>
    )
};

export default ManageThumb;