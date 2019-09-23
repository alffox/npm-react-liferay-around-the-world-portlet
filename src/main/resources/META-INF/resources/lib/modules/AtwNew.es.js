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
          className="p-0 list-group-item list-group-item-action active"
        >
          <li className="list-group-item list-group-item-action active d-flex align-items-center mt-1">
            <LazyLoad>
              <img
                className="img-fluid img-thumbnail news-picture"
                alt={this.props.articleTitle}
                src={this.props.imageURL}
              />
            </LazyLoad>
            <h3 className="ml-2">
              {this.props.articleTitle}
              <br />
              <span className="label label-secondary">
                <span className="label-item label-item-expand text-uppercase">
                  {this.props.articleSource}
                </span>
              </span>
            </h3>
          </li>
        </a>
      </ul>
    );
  }
}

export default AtwNew;
