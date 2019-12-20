import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { fieldsMatch, validateEmail } from '../../util/form_validator';
export default class LoginForm extends React.Component {
    constructor(props){
        super(props);
        if (!props.location.state) {
            this.props.history.push("/signin");
        }
        this.state = {
            email: this.props.location.state ? this.props.location.state.email : "",
            password: "",
            passwordClass: ["input-group"]
        }
    }


    inFocus = (arg) => {
        this.setState(prevState => (
            { class: prevState[arg].push("focused") }
        ));
    }

    inBlur = (arg) => {
        this.setState(prevState => (
            { class: prevState[arg].filter(el => el !== "focused") }
        ))
    }

    renderErrors = () => {
        if (this.props.errors.length > 0) {
            this.state.passwordClass.push("error-password");
        }
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        )
    }

    handleSubmit = e => {
        e.preventDefault();
        if (!validateEmail(this.state.email)) {
            this.props.sendErrors(["Please enter a valid email."])
            return;
        }
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.processForm(user);
    }

    update = field => e => {
        this.setState({ [field]: e.currentTarget.value })
    }
    render(){
        return (
            <div className="sign-in-container">
                <form onSubmit={this.handleSubmit}>
                    <p className="started">Welcome Back</p>
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
                    <div className={this.state.passwordClass.join(" ")}
                        onFocus={() => this.inFocus("passwordClass")} onBlur={() => this.inBlur("passwordClass")}>
                        <input type="password" required onChange={this.update('password')} />
                        <label>Password</label>
                    </div>
                    {this.renderErrors()}
                    <div className="five-height"></div>
                    <button className="red-button">Log In</button>
                    <div className="third-em"></div>
                    <p className="login-text">Forgot Password</p>
                </form>
            </div>
        )
    }
}