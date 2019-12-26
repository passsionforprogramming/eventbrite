import React from 'react';

export default class DropDownList extends React.Component {
    constructor(props){
        super(props);
    }
    
    
    render(){
        const { items, updateState, selected } = this.props;
        const itemList = items.map((item, i) =>
            <li key={i} onClick={() => updateState(item)}>{item}</li>)
        return (
            <div className="my-custom-dropdown">
                <div className="select-box">
                    <p>{selected}</p>
                    <p><i className="arrow down"></i></p>
                </div>
                <div className="relative-custom">
                    <ul className="event-type-dropdown-content">
                        {itemList}
                    </ul>
                </div>
            </div>
        )
    }
}