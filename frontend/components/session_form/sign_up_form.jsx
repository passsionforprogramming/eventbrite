import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
export default class SignUpForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: this.props.location.state.email,
            emailConfirm: "",
            firstName: "",
            lastName: "",
            password: "",
            emailConfirmClass: ["input-group"],
            firstNameClass: ["input-group"],
            lastNameClass: ["input-group"],
            passwordClass: ["input-group"]

        }
    }

    update = field => e => {
        this.setState({ [field]: e.currentTarget.value })
    }

    inFocus = (arg) => {
        this.setState(prevState => (
            { class: prevState[arg].push("focused") }
        ));
    }

    inBlur = (arg) => {
        this.setState(prevState => (
            { class: prevState[arg].pop() }
        ))
    }
    render(){
        return (
            <div className="sign-in-container">
                <form>
                    <p className="started">Welcome</p>
                    <p className="enter-email">Create an account.</p>
                    <div className="float-container grey"
                        >
                            <span className="edit-icon">
                            <Link to="/signin"><FontAwesomeIcon icon={faPencilAlt} color="black" /></Link> 
                            </span>
                        <label htmlFor="email">Email Address</label>
                        <input className="myDisabled" 
                        value={this.state.email}
                        type="text" id="email"
                            disabled />
                    </div>
                    <div className={this.state.emailConfirmClass.join(" ")}
                        onFocus={() => this.inFocus("emailConfirmClass")} onBlur={() => this.inBlur("emailConfirmClass")}>
                        <input type="text" required onChange={this.update('emailConfirm')}/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Confirm email</label>
                    </div>
                    <div className="fname-lname">
                        <div className={this.state.firstNameClass.join(" ")} 
                        onFocus={() => this.inFocus("firstNameClass")} onBlur={() => this.inBlur('firstNameClass')}>
                            <input type="text" required onChange={this.update('firstName')} />
                            <label>First Name</label>
                        </div>
                        <div className="empty-divider">

                        </div>
                        <div className={this.state.lastNameClass.join(" ")}
                            onFocus={() => this.inFocus("lastNameClass")} onBlur={() => this.inBlur("lastNameClass")}>
                            <input type="text" required onChange={this.update('lastName')} />
                            <label>Last Name</label>
                        </div>
                    </div>
                    <div className={this.state.passwordClass.join(" ")}
                        onFocus={() => this.inFocus("passwordClass")} onBlur={() => this.inBlur("passwordClass")}>
                        <input type="text" required onChange={this.update('password')} />
                        <label>Password</label>
                    </div>
                    <div className="five-height">

                    </div>
                    <hr className="grey-divider"/>
                    <p className="password-warning">Your password must be at least 8 characters</p>
                    <div className="five-height"></div>
                    <button className="red-button">Sign Up</button>
                    <div className="third-em"></div>
                    <p className="login-text">Log In Instead</p>
                </form>
            </div>
        )
    }
}