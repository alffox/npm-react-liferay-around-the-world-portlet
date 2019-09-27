import React from "react";

class AtwWiki extends React.Component {
  render() {
    return (
      <div className="wiki card-body">
        <p>{this.props.currentCountry}</p>
        <p>{this.props.currentWikiDescription}</p>
        <a
          href={this.props.currentWikiURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia ...
        </a>
      </div>
    );
  }
}

export default AtwWiki;
