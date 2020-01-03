import { connect } from 'react-redux';
import { updateDescription, updateImageFile } from '../../actions/event_actions';
import { sendPreviewUrl } from '../../actions/ui_actions';
import Details from './details';

const mapStateToProps = state => ({
    description: state.entities.event.description,
    imageFile: state.entities.event.imageFile,
    imageUrl: state.ui.detailsUi.previewUrl
});

const mapDispatchToProps = dispatch => ({
    updateDescription: description => dispatch(updateDescription(description)),
    updateImage: imageFile => dispatch(updateImageFile(imageFile)),
    updatePreview: url => dispatch(sendPreviewUrl(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);