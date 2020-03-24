import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventMap from './EventMap';
import MarkerManager from '../../util/marker_manager';

const mapStateToProps = state => ({
    otherEvents: state.entities.browse,
    MarkerManager
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventMap))