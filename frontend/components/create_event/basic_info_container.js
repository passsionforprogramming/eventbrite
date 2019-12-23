import { connect } from 'react-redux';
import BasicInfo from './basic_info';

const mapStateToProps = state => ({
title: state.entities.event,
eventType: state.entities.eventType,
category: state.entities.category,
tags: state.entities.tags,
organizer: state.entities.organizer
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