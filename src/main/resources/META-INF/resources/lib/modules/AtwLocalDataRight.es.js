import React from "react";

import AtwGrowPageLink from "./AtwGrowPageLink.es";
import AtwWeatherCard from "./AtwWeatherCard.es";
import MapContainer from "./MapContainer.es";
import AtwWebCamCard from "./AtwWebCamCard.es";
import AtwWikiCard from "./AtwWikiCard.es";

class AtwLocalDataRight extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <AtwGrowPageLink
          currentCountry={this.props.currentCountry}
          currentGrowURL={this.props.currentGrowURL}
        />
        <AtwWeatherCard
          currentLocation={this.props.currentLocation}
          currentWeatherCountry={this.props.currentWeatherCountry}
          currentTemperatureCelsius={this.props.currentTemperatureCelsius}
          currentTemperatureFahrenheit={this.props.currentTemperatureFahrenheit}
          setCelsius={this.props.setCelsius}
          setFahrenheit={this.props.setFahrenheit}
          isCelsius={this.props.isCelsius}
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
          currentCountry={this.props.currentCountry}
          currentWikiDescription={this.props.currentWikiDescription}
          currentWikiURL={this.props.currentWikiURL}
        />
      </div>
    );
  }
}

export default AtwLocalDataRight;
