import React from 'react';

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            myClass: ["float-container"]
        }
    }
    inFocus = () => {
        this.setState(prevState => (
            {class: prevState.myClass.push("focused")}
        ));
    }

    inBlur = () => {
        this.setState(prevState => (
            {class: prevState.myClass.pop()}
        ))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push({
            pathname: "/login",
            state: {email: this.state.email},
        })
        
    }
    update = field => e => {
        this.setState({[field]: e.currentTarget.value})
    }
    render(){
        return (
            <div className="sign-in-container">
                <form onSubmit={this.handleSubmit}>
                    <p className="started">Lets get started</p>
                   <div className={this.state.myClass.join(" ")}
                   onFocus={this.inFocus} onBlur={this.inBlur}>
                       <label htmlFor="email">Email Address</label>
                       <input type="text" id="email"
                       onChange={this.update('email')}/>
                   </div>
                </form>
            </div>
        )
    }
}