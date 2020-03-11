import { connect } from 'react-redux';
import MapsContainer from './maps_container';

const mapStateToProps = state => ({
    events: state.entities.search
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);