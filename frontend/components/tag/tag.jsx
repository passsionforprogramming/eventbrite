import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Tag = ({tag}) => (
    <div className="tag">
        <div className="space-around">
            <p>{tag}</p>
            <FontAwesomeIcon icon={faTimes}/>
        </div>
    </div>
)

export default Tag;