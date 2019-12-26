import DropDownList from './dropdown_list';
import { updateType } from '../../actions/event_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    selected: state.entities.event.eventType,
});

const mapDispatchToProps = dispatch => ({
    updateState: (eventType) => dispatch(updateType(eventType))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownList);