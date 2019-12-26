import DropDownList from './dropdown_list';
import { updateCategory } from '../../actions/event_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    selected: state.entities.event.category
});

const mapDispatchToProps = dispatch => ({
    updateState: (category) => dispatch(updateCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownList);