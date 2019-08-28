import React from "react";

import AtwWeatherCard from "./AtwWeatherCard.es";
import MapContainer from "./MapContainer.es";
import AtwWebCamCard from "./AtwWebCamCard.es";

class AtwLocalDataRight extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <AtwWeatherCard
          currentLocation={this.props.currentLocation}
          currentTemperature={this.props.currentTemperature}
          currentWeatherDescription={this.props.currentWeatherDescription}
          currentIconURL={this.props.currentIconURL}
          forecastData={this.props.forecastData}
        />
        <MapContainer
          currentLatitude={this.props.currentLatitude}
          currentLongitude={this.props.currentLongitude}
        />
        <AtwWebCamCard webCamData={this.props.webCamData} />
      </div>
    );
  }
}

export default AtwLocalDataRight;
