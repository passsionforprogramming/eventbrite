import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { deleteBatch } from '../../../actions/ticket_actions';


const BatchThumb = props => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const saleStartTime = new Date(props.startTime);
    const saleEndTime = new Date(props.endTime);
    const conditionalTime = new Date() < saleEndTime ? <div className="row"><span className="circle-grn"></span>
        <p className="ticket-end-time">{`Ends ${saleEndTime.toLocaleDateString('en-US', options)}`}</p>
    </div> : <div className="row"><span className="circle-grey"></span>
            <p className="ticket-end-time">{`Ended ${saleEndTime.toLocaleDateString('en-US', options)}`}</p>
        </div>;
    return (
        <div className="batch-thumb">
            <div className="batch-col">
                <p className="name-header">{props.name}</p>
                {conditionalTime}
            </div>
            <div className="right-batch-thumb">
                <p className="tickets-sold">{`${props.sold}/${props.quantity}`}</p>
                <p className="price-tickets">{`$${props.price}`}</p>
                <span className="elipsis">
                    <FontAwesomeIcon icon={faEllipsisV} className="icon-elipsis" />
                    <div className="crud-box">
                        <p className="crud-p">Edit</p>
                        <p onClick={() => props.deleteBatch(props.id)} className="crud-p">Delete</p>
                    </div>
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    deleteBatch: batchId => dispatch(deleteBatch(batchId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BatchThumb);