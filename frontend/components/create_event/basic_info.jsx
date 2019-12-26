import React from 'react';
import { eventTypes, eventCategories } from '../../util/event_types';
import DropDownEventType from '../builders/dropdown_list_container';
import DropDownCategory from '../builders/category_dropdown_container';
export default class BasicInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            titleClassName: ["float-container"],
            typeClassName: ["float-container"],
            categoryClassName: ["float-container"],
            tagClassName: ["float-container"],
            counter: 0,
            valTest: ""
        }

    }


    inFocus = (arg) => {
        this.setState(prevState => (
            prevState[arg].push("focused")
        ));
    }

    inBlur = (arg) => {
        this.setState(prevState => (
            prevState[arg].pop()
        ))
    }

    updateDropdownCallback = (newVal) => {
        this.setState({valTest: newVal});
    }
    render(){
        
        return (
            <div className="basic-info">
                <h1 className="basic-info-header">Basic Info</h1>
                <p className="basic-info-explanation">Name your event and tell event-goers why they should come. Add</p>
                <p className="basic-info-explanation">details that highlight what makes it unique</p>
                <form>
                    <div className={this.state.titleClassName.join(" ")}>
                        <label htmlFor="title">Event Title</label>
                        <input type="text" id="title"
                            placeholder="Be clear and descriptive."
                            maxLength="75"
                            onChange={(e) => this.props.updateTitle(e.currentTarget.value)}
                            onFocus={() => this.inFocus("titleClassName")}
                            onBlur={() => this.inBlur("titleClassName")} />
                    </div>
                    <p className="counter">{`${this.props.title.length.toString()}/75`}</p>
                    <div className="space-between">
                        <DropDownEventType
                        items={eventTypes} 
                        />

                        <DropDownCategory
                            items={eventTypes}
                        />

                        <div className="width-thirty-three">

                        </div>
                        
                    </div>
                </form>
            </div>
        )
    }
}