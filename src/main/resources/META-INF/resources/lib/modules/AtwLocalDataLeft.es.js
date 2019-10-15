import React from "react";

import AtwWikiCard from "./AtwWikiCard.es";
import AtwPicturesCard from "./AtwPicturesCard.es";

class AtwLocalDataLeft extends React.Component {
  render() {
    return (
      <div className="col-md-8">
        <AtwWikiCard
          currentCountry={this.props.currentCountry}
          currentWikiDescription={this.props.currentWikiDescription}
          currentWikiURL={this.props.currentWikiURL}
        />
        <AtwPicturesCard picturesData={this.props.picturesData} />
      </div>
    );
  }
}

export default AtwLocalDataLeft;
