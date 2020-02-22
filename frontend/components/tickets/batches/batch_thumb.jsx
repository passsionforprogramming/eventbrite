import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const BatchThumb = props => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const saleStartTime = new Date(props.startTime);
    const saleEndTime = new Date(props.endTime);
    const conditionalTime = new Date() < saleEndTime ? <div className="row"><span className="circle-grn"></span>
        <p>{`Ends ${saleEndTime.toLocaleDateString('en-US', options)}`}</p>
    </div> : <div className="row"><span className="circle-grey"></span>
            <p>{`Ended ${saleEndTime.toLocaleDateString('en-US', options)}`}</p>
            <span className="elipsis">
                <FontAwesomeIcon icon={faEllipsisV} className="icon-elipsis"/>
            </span>
        </div>;
    return (
        <div className="batch-thumb">
            <div className="batch-col">
                <p className="name-header">{props.name}</p>
                {conditionalTime}
            </div>
            <p className="tickets-sold">{`${props.sold}/${props.quantity}`}</p>
            <p className="price-tickets">{`$${props.price}`}</p>

        </div>
    )
}

export default BatchThumb;