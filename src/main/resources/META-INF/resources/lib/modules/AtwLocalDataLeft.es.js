import React from "react";

import AtwWikiCard from "./AtwWikiCard.es";
import AtwPicturesCard from "./AtwPicturesCard.es";
//import AtwNewsCard from "./AtwNewsCard.es";

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
        {/* <AtwNewsCard
        //techNewsData={this.props.techNewsData}
        //englishTechNewsURLData={this.props.englishTechNewsURLData}
        //regionalNewsData={this.props.regionalNewsData}
        /> */}
      </div>
    );
  }
}

export default AtwLocalDataLeft;
