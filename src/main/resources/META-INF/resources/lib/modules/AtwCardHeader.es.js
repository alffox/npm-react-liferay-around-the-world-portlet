import React from "react";

class AtwCardHeader extends React.Component {
  render() {
    return (
      <div className="card-header py-1">
        <i className={this.props.icon + " mr-1"} />
        {this.props.cardKey}
        <p>
          <small>
            Powered by{" "}
            <a href={this.props.APIURL}>{this.props.APIAttribution}</a>
          </small>
        </p>
      </div>
    );
  }
}

export default AtwCardHeader;
