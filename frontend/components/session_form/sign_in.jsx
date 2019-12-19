import React from 'react';
import { connect } from 'react-redux';
import { verifyMember } from '../../util/session_api_util';
import LoadingIcon from '../loading/loading_icon';
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
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
        this.setState({loading: true});
        verifyMember(this.state.email).then(data => {
            if (!data.verify){
                this.setState({ loading: false });
                this.props.history.push({
                    pathname: "/signup",
                    state: { email: this.state.email },
                })
            } else {
                this.setState({ loading: false });
                this.props.history.push({
                    pathname: "/login",
                    state: { email: this.state.email },
                })
            }
        })
        
        
    }
    update = field => e => {
        this.setState({[field]: e.currentTarget.value})
    }
    render(){
        if (this.state.loading){
            return <section><LoadingIcon /></section>;
        }
        return (
            <div className="sign-in-container">
                <form onSubmit={this.handleSubmit}>
                    <p className="logo-initial">h</p>
                    <p className="started">Let's get started</p>
                    <p className="enter-email">Enter your email to get started.</p>
                   <div className={this.state.myClass.join(" ")}
                   onFocus={this.inFocus} onBlur={this.inBlur}>
                       <label htmlFor="email">Email Address</label>
                       <input type="text" id="email"
                       onChange={this.update('email')}/>
                   </div>
                   <button className="red-button">Get Started</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   loading: state.ui.loading.verifyLoading
})

const mapDispatchToProps = dispatch => ({
    previousMember: (email) => dispatch(verifyPreviousMember(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)