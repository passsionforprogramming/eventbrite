import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventMap from './EventMap';


const mapStateToProps = state => ({
    events: state.entities.browse
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventMap))