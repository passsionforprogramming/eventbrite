import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from 'react-router-dom';
import { fieldsMatch, validateEmail } from '../../util/form_validator';
export default class SignUpForm extends React.Component {
    constructor(props){
        super(props)
        if (!props.location.state) {
            this.props.history.push("/signin");
        }
        this.state = {
            email: this.props.location.state ? this.props.location.state.email : "",
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

    static getDerivedStateFromProps(props, state){
        debugger;
        if (!props.location.state.email){
            this.props.history.push("/signin");
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

    handleSubmit = e => {
        e.preventDefault();
        if (!fieldsMatch(this.state.email, this.state.emailConfirm)){
            this.props.sendErrors(["The emails you entered do no not match."])
            return;
        } else if (!validateEmail(this.state.email)){
            this.props.sendErrors(["Please enter a valid email."])
            return;
        } else {
            const user = {
                email: this.state.email,
                password: this.state.password,
                first_name: this.state.firstName,
                last_name: this.state.lastName
            }
            this.props.processForm(user);
        }
    }

    renderErrors = () => (
        <ul className="errors">
            {this.props.errors.map((error, i) => (
                <li key={i}>{error}</li>
            ))}
        </ul>
    )
    render(){
        return (
            <div className="sign-in-container">
                <form onSubmit={this.handleSubmit}>
                    <p className="started">Welcome</p>
                    <p className="enter-email">Create an account.</p>
                    {this.renderErrors()}
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
                        <input type="password" required onChange={this.update('password')} />
                        <label>Password</label>
                    </div>
                    <div className="five-height">

                    </div>
                    <hr className="grey-divider"/>
                    <p className="password-warning">Your password must be at least 8 characters</p>
                    <div className="five-height"></div>
                    <button className="red-button">Sign Up</button>
                    <div className="third-em"></div>
                    <Link to="/login"><p className="login-text">Log In Instead</p></Link>
                </form>
            </div>
        )
    }
}