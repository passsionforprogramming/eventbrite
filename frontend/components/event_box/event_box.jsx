import React from 'react'

export default class EventSearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: "Any",
            category: "Anything"
        }
    }
    render(){
        return (
            <div className="large-box">
                <p className="box-top">I want to go out</p>
               <div className="custom-select">
                    <p className="box-select-category">{this.state.date}</p>
                    <p className="down-arrow"> ▾ </p>
               </div>
               <div className="five-height">

               </div>
               <p className="box-top">In</p>
               <div className="location-select">
                   <p className="box-select-category">San Francisco</p>
               </div>

               <div className="one-em">

               </div>
               <p className="box-top">And I'm in the mood for</p>
                <div className="custom-select">
                    <p className="box-select-category">{this.state.category}</p>
                    <p className="down-arrow"> ▾ </p>
                </div>
            </div>
        )
    
    }
}