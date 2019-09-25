import React from "react";

import AtwWeatherForecasts from "./AtwWeatherForecasts.es";

class AtwWeather extends React.Component {
  render() {
    return (
      <div className="weather card-body text-center">
        <p>{this.props.currentLocation}</p>
        <img
          className="weather-icon-main"
          src={this.props.currentIconURL}
          alt={this.props.currentWeatherDescription}
        />
        <p>
          {this.props.currentTemperatureCelsius} °C ,{" "}
          {this.props.currentWeatherDescription}
        </p>
        <hr />
        <AtwWeatherForecasts
          forecastData={this.props.forecastData}
          currentForecastCountry={this.props.currentForecastCountry}
        />
      </div>
    );
  }
}

export default AtwWeather;
