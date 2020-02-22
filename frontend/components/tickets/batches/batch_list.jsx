import React from 'react';
import BatchThumb from './batch_thumb';
const BatchList = props => {
    const { batches } = props;
    return (
        <div className="batch-list">
            {
                batches.map(batch => (
                    <BatchThumb 
                    title={batch.name}
                    startTime={batch.sale_start_time}
                    endTime={batch.sale_end_time}
                    sold={batch.tickets_sold}
                    price={batch.price}
                    quantity={batch.quantity}
                    />
                ))
            }
        </div>
    )
}

export default BatchList