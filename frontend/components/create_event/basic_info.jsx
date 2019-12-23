import React from 'react';
export default class BasicInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            titleClassName: ["float-container"],
            typeClassName: ["float-container"],
            categoryClassName: ["float-container"],
            tagClassName: ["float-container"]
        }

    }
    render(){
        <div className="basic-info">
            <h1 className="basic-info-header">Basic Info</h1>
            <p className="basic-info-explanation">Name your event and tell event-goers why they should come. Add</p>
            <p className="basic-info-explplanation">details that highlight what makes it unique</p>
            <label htmlFor="title">Event Title</label>
            <input type="text" id="title"
                onChange={(e) => this.props.updateTitle(e.currentTarget.value)} />
        </div>
    }
}