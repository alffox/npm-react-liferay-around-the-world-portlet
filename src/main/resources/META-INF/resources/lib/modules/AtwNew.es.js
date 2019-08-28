import React from "react";

import LazyLoad from "react-lazyload";

class AtwNew extends React.Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item list-group-item-action active d-flex justify-content-between align-items-center mt-1">
          <LazyLoad>
            <img
              className="img-fluid img-thumbnail news-picture"
              alt={this.props.articleTitle}
              src={this.props.imageURL}
            />
          </LazyLoad>
          <a
            href={this.props.articleURL}
            target="_blank"
            rel="noopener noreferrer"
            className="list-group-item list-group-item-action active"
          >
            {this.props.articleTitle}
          </a>
          <span className="badge badge-light badge-primary d-none d-xl-block">
            {this.props.articleSource}
          </span>
        </li>
      </ul>
    );
  }
}

export default AtwNew;
