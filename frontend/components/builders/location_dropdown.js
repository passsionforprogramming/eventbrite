import DropDownList from './dropdown_list';
import { updateAddressType } from '../../actions/location_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    selected: state.entities.event.addressType
});

const mapDispatchToProps = dispatch => ({
    updateState: (addressType) => dispatch(updateAddressType(addressType))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownList);