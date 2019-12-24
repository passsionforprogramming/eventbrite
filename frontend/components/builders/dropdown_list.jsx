import React from 'react';

export default class DropDownList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: this.props.type
        }
    }
    render(){
        const { items } = this.props;
        const itemList = items.map((item, i) =>
            <li key={i}>{item}</li>)
        return (
            <div className="my-custom-dropdown">
                <p className="select-box">{this.state.selected}</p>
                <ul className="event-type-dropdown-content">
                    {itemList}
                </ul>
            </div>
        )
    }
}