import { connect } from 'react-redux';
import BasicInfo from './basic_info';
import {
    updateTitle,
    updateType,
    updateCategory,
    addTag,
    removeTag,
    updateOrganizer,
    updateStartDate,
    updateEndDate,
    updateDisplayEndTime,
    updateDisplayStartTime
} from '../../actions/event_actions';

import { updateAddress, updateLatLng } from '../../actions/location_actions';

const mapStateToProps = state => ({
title: state.entities.event.title,
eventType: state.entities.event.eventType,
category: state.entities.event.category,
tags: state.entities.event.tags,
organizer: state.entities.event.organizer,
address: state.entities.event.address,
startDate: state.entities.event.startDate,
endDate: state.entities.event.endDate,
loading: state.ui.loading.loadingForm,
displayStartTime: state.entities.event.displayStartTime,
displayEndTime: state.entities.event.displayEndTime
});

const mapDispatchToProps = dispatch => ({
    updateTitle: (title) => dispatch(updateTitle(title)),
    updateType: (eventType) => dispatch(updateType(eventType)),
    updateCategory: (category) => dispatch(updateCategory(category)),
    addTag: (tag) => dispatch(addTag(tag)),
    removeTag: (tag) => dispatch(removeTag(tag)),
    updateOrganizer: (organizer) => dispatch(updateOrganizer(organizer)),
    updateAddress: address => dispatch(updateAddress(address)),
    updateLatLng: latLng => dispatch(updateLatLng(latLng)),
    updateStartDate: startDate => dispatch(updateStartDate(startDate)),
    updateEndDate: endDate => dispatch(updateEndDate(endDate)),
    updateDisplayStartTime: val => dispatch(updateDisplayStartTime(val)),
    updateDisplayEndTime: val => dispatch(updateDisplayEndTime(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);