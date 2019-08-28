import React from "react";

import AtwCardHeader from "./AtwCardHeader.es";
import AtwWebCams from "./AtwWebCams.es";

class AtwWebCamCard extends React.Component {
  render() {
    return (
      <div className="card w-100 mt-1">
        <AtwCardHeader
          icon="fas fa-video"
          cardKey="Nearby Web Cams"
          APIAttribution="Webcams.travel"
          APIURL="https://www.webcams.travel/"
        />
        <AtwWebCams webCamData={this.props.webCamData} />
      </div>
    );
  }
}

export default AtwWebCamCard;
