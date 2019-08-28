import React from "react";

import AtwNewsCard from "./AtwNewsCard.es";

class AtwLocalDataLeft extends React.Component {
  render() {
    return (
      <div className="col-md-8">
        <AtwNewsCard
          englishNewsData={this.props.englishNewsData}
          regionalNewsData={this.props.regionalNewsData}
          techNewsData={this.props.techNewsData}
        />
      </div>
    );
  }
}

export default AtwLocalDataLeft;
