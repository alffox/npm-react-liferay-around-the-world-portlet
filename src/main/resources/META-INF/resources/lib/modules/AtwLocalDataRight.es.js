import React from "react";

import AtwWeatherCard from "./AtwWeatherCard.es";
import MapContainer from "./MapContainer.es";
import AtwWebCamCard from "./AtwWebCamCard.es";
import AtwWikiCard from "./AtwWikiCard.es";

class AtwLocalDataRight extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <AtwWeatherCard
          currentLocation={this.props.currentLocation}
          currentWeatherCountry={this.props.currentWeatherCountry}
          currentTemperature={this.props.currentTemperature}
          currentForecastCountry={this.props.currentForecastCountry}
          currentWeatherDescription={this.props.currentWeatherDescription}
          currentIconURL={this.props.currentIconURL}
          forecastData={this.props.forecastData}
        />
        <MapContainer
          currentLatitude={this.props.currentLatitude}
          currentLongitude={this.props.currentLongitude}
        />
        <AtwWebCamCard webCamData={this.props.webCamData} />
        <AtwWikiCard
          wikiExtract={this.props.wikiExtract}
          wikiTitle={this.props.wikiTitle}
          wikiUrl={this.props.wikiUrl}
        />
      </div>
    );
  }
}

export default AtwLocalDataRight;
