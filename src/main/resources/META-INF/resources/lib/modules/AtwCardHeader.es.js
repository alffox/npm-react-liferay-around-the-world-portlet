import React from "react";

import AtwIcon from "./AtwIcon.es";

class AtwCardHeader extends React.Component {
  render() {
    return (
      <div className="card-header py-1">
        <AtwIcon
          classes="lexicon-icon inline-item mx-1"
          iconName={this.props.iconName}
        />
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
