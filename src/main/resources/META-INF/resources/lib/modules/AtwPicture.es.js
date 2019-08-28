import React from "react";

import LazyLoad from "react-lazyload";

class AtwPicture extends React.Component {
  render() {
    return (
      <div className="card pictures text-center">
        <a
          href={this.props.pictureURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLoad>
            <img
              className="card-img-top img-fluid"
              src={this.props.pictureURL}
              alt={this.props.pictureDescription}
            />
          </LazyLoad>
        </a>
        <div className="card-block">
          <small className="text-muted">
            <p>{this.props.pictureDescription}</p>
            by{" "}
            <a
              href={this.props.pictureAuthorURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.pictureAuthorUsername}{" "}
            </a>
            via{" "}
            <a
              href={this.props.pictureSiteAttributionURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.pictureSiteAttribution}
            </a>
          </small>
        </div>
      </div>
    );
  }
}

export default AtwPicture;
