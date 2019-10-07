import React from "react";

import AtwNewsCard from "./AtwNewsCard.es";

class AtwLocalDataLeft extends React.Component {
  render() {
    return (
      <div className="col-md-8">
        <AtwNewsCard
          //techNewsData={this.props.techNewsData}
          englishTechNewsURLData={this.props.englishTechNewsURLData}
          //regionalNewsData={this.props.regionalNewsData}
        />
      </div>
    );
  }
}

export default AtwLocalDataLeft;
