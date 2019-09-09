import React from "react";

import AtwCardHeader from "./AtwCardHeader.es";
import AtwWeather from "./AtwWeather.es";

class AtwWeatherCard extends React.Component {
  render() {
    return (
      <div className="card w-100 mt-1">
        <AtwCardHeader
          iconName="sun"
          cardKey="Weather"
          APIAttribution="OpenWeatherMap.org"
          APIURL="https://openweathermap.org/"
        />
        <AtwWeather
          currentLocation={this.props.currentLocation}
          currentTemperature={this.props.currentTemperature}
          currentWeatherDescription={this.props.currentWeatherDescription}
          currentIconURL={this.props.currentIconURL}
          forecastData={this.props.forecastData}
        />
      </div>
    );
  }
}

export default AtwWeatherCard;
