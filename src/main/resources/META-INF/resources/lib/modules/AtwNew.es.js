import React from "react";

import AtwIcon from "./AtwIcon.es";
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
            <LazyLoad overflow={true}>
              <img
                className="img-fluid img-thumbnail news-picture"
                alt={this.props.articleTitle}
                src={this.props.imageURL}
              />
            </LazyLoad>
            <h3 className="ml-2">
              <p>
                <span className="label label-info d-inline-block">
                  <span className="label-item label-item-expand text-uppercase">
                    {this.props.articleSource}
                  </span>
                </span>
                <small className="font-italic d-inline-block">
                  {this.props.articleDate}
                </small>
              </p>
              {this.props.articleTitle}
              <hr />
              <AtwIcon
                classes="lexicon-icon inline-item mr-1"
                iconName={this.props.iconName}
              />
              <span className="label label-secondary d-inline-block">
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
