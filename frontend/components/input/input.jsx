import React from 'react';

export default class Input extends React.Component {
    constructor(props){
        super(props)
        state = {
            
        }
    }
    render(){
        return (
            <div className="input-button">
                <input type={this.props.type} required onChange={this.props.update} />
                <label>Password</label>
            </div>
        )
    }
}