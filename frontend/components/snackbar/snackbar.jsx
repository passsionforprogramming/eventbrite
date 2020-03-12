import React from 'react';
import { connect } from 'react-redux';

class SnackBar extends React.Component {
    render(){
        return (
            <div className={`snackbar ${this.props.show ? "show-snackbar" : ""}`}>
                {this.props.message}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    show: state.ui.snackbar.show,
    message: state.ui.snackbar.message
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);