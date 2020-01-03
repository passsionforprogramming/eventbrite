import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone";
export default class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          descriptionClassName: ["float-container", "short"]
        };
    }

    onDrop = acceptedFiles => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
      this.props.updateImage(file);
      this.props.updatePreview(reader.result)
      }
      if (file){
        reader.readAsDataURL(file);
      } else {
        this.props.updatePreview("")
        this.props.updateImage(null);
      }
    }

    inFocus = (arg) => {
        this.setState(prevState => (
            prevState[arg].push("focused")
        ));
    }

    inBlur = (arg) => {
        this.setState(prevState => (
            prevState[arg].pop()
        ))
    }
    render(){
        return (
          <div className="event-details">
            <h1 className="basic-info-header">Main Event Image</h1>
            <p className="basic-info-explanation">
              This is the first image attendees will see at the top of your
              listing. Use a
            </p>
            <p className="basic-info-explanation">
              high quality image: 2160x1080px (2:1 ratio).
            </p>
            <Dropzone onDrop={this.onDrop}>
              {({ getRootProps, getInputProps }) => {
                if (this.props.imageFile === null){
                  return (
                    <div
                      {...getRootProps({
                        className: "upload-image"
                      })}
                    >
                      <input {...getInputProps()} />
                      <FontAwesomeIcon icon={faImage} className="image-icon" />
                      <p className="image-instructions">
                        Drag & drop or click to add main event image.
                  </p>
                      <p className="image-types">
                        JPEG or PNG, no larger than 10MB
                  </p>
                    </div>
                  )
                } else {
                  return (
                    <div {...getRootProps({
                      className: "preview"
                    })}>
                      <input {...getInputProps()} />
                      <img src={this.props.imageUrl}/>
                    </div>
                  )
                }
                
    }}
            </Dropzone>
            <div className="spacer"></div>
            <div className="long"></div>
            <h1 className="basic-info-header">Description</h1>
            <p className="basic-info-explanation">
              Add more details to your event like your schedule, sponsors, or
            </p>
            <p>featured guests.</p>
            <div className={this.state.descriptionClassName.join(" ")}>
              <label htmlFor="summary">Summary</label>
              <textarea
                type="text"
                required
                id="summary"
                placeholder="Write a short event summary to get attendees excited."
                maxLength="140"
                onChange={e =>
                  this.props.updateDescription(e.currentTarget.value)
                }
                onFocus={() => this.inFocus("descriptionClassName")}
                onBlur={() => this.inBlur("descriptionClassName")}
                value={this.props.description}
              />
            </div>
            <p className="description-counter">{`${this.props.description.length.toString()}/140`}</p>
            <div className="buttons-second">
              <button className="detail-outline-btn">Add Text</button>
              <button className="detail-outline-btn">Add Image</button>
              <button className="detail-outline-btn">Add Video</button>
            </div>
            <div className="seven-size"></div>
            <p>"</p>
          </div>
        );
    }
}