import React from "react";

class AtwWiki extends React.Component {
  render() {
    return (
      <div className="wiki card-body">
        <p>{this.props.wikiTitle}</p>
        <p>{this.props.wikiExtract}</p>
        <a href={this.props.wikiUrl} target="_blank" rel="noopener noreferrer">
          Wikipedia ...
        </a>
      </div>
    );
  }
}

export default AtwWiki;
