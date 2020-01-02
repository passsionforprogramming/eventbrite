import { connect } from 'react-redux';
import { updateDescription } from '../../actions/event_actions';
import Details from './details';

const mapStateToProps = state => ({
    description: state.entities.event.description
});

const mapDispatchToProps = dispatch => ({
    updateDescription: description => dispatch(updateDescription(description))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);