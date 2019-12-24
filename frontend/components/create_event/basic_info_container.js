import { connect } from 'react-redux';
import BasicInfo from './basic_info';
import {
    updateTitle,
    updateType,
    updateCategory,
    addTag,
    removeTag,
    updateOrganizer
} from '../../actions/event_actions';

const mapStateToProps = state => ({
title: state.entities.event.title,
eventType: state.entities.event.eventType,
category: state.entities.event.category,
tags: state.entities.event.tags,
organizer: state.entities.event.organizer
});

const mapDispatchToProps = dispatch => ({
    updateTitle: (title) => dispatch(updateTitle(title)),
    updateType: (eventType) => dispatch(updateType(eventType)),
    updateCategory: (category) => dispatch(updateCategory(category)),
    addTag: (tag) => dispatch(addTag(tag)),
    removeTag: (tag) => dispatch(removeTag(tag)),
    organizer: (organizer) => dispatch(updateOrganizer(organizer))
})

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);