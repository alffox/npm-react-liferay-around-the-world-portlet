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
          className="p-0"
        >
          <li
            className={
              this.props.newsType +
              " list-group-item list-group-item-action d-flex align-items-center"
            }
          >
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
              <span className="label label-secondary">
                <span className="label-item label-item-expand text-uppercase">
                  {this.props.newsType}
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
