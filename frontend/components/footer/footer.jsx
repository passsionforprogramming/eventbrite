import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
const Footer = props => (
        <ul className="footer">
            <li><p className="copyright"> &copy;2019 Haply</p></li>
            <div className="footer-center">
                <li><a href="https://github.com/passsionforprogramming/eventbrite/wiki/MVP-List">MVP List</a></li>
                <li><a href="https://github.com/passsionforprogramming/eventbrite/wiki/Schema">Schema</a></li>
                <li onClick={() => {
                    const user = {
                        email: "barryallen@haply.com",
                        password: "123456"
                    };
                    props.login(user);
                }}>Demo Login</li>
                <li><a href="https://www.jamessaulsberry.com">About James Saulsberry</a></li>
            </div>
        </ul>
);


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
