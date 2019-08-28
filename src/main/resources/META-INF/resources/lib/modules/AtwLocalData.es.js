import React from "react";

import AtwLocalDataLeft from "./AtwLocalDataLeft.es";

class AtwLocalData extends React.Component {
  render() {
    return (
      <div className="row">
        <main />
        <AtwLocalDataLeft
          englishNewsData={this.props.englishNewsData}
          regionalNewsData={this.props.regionalNewsData}
          techNewsData={this.props.techNewsData}
        />
      </div>
    );
  }
}

export default AtwLocalData;
