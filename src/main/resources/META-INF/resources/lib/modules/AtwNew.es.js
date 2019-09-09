import React from "react";

import LazyLoad from "react-lazyload";

class AtwNew extends React.Component {
  render() {
    return (
      <ul className="list-group">
        <a
          href={this.props.articleURL}
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item list-group-item-action active"
        >
          <li className="list-group-item list-group-item-action active d-flex justify-content-between align-items-center mt-1">
            <LazyLoad>
              <img
                className="img-fluid img-thumbnail news-picture"
                alt={this.props.articleTitle}
                src={this.props.imageURL}
              />
            </LazyLoad>
            <h3 className="ml-2">{this.props.articleTitle}</h3>
            <span className="badge badge-light badge-primary d-none d-xl-block">
              {this.props.articleSource}
            </span>
          </li>
        </a>
      </ul>
    );
  }
}

export default AtwNew;
