import React from "react";

class AtwWeatherForecast extends React.Component {
  render() {
    return (
      <div className="next-days">
        <span className="font-weight-bold">{this.props.forecastDay}</span>
        <br />
        <img
          className="weather-icon-next-days"
          src={this.props.forecastDayIconURL}
          alt={this.props.forecastDayIconDescription}
        />
        <br />
        {this.props.currentForecastCountry === "USA" ? (
          <div>
            {(this.props.forecastDayTemperature * 9) / 5 + 32} °F <br />
            <small>({this.props.forecastDayTemperature} °C)</small>
          </div>
        ) : (
          <div>
            {this.props.forecastDayTemperature} °C <br />
            <small>
              ({(this.props.forecastDayTemperature * 9) / 5 + 32} °F)
            </small>
          </div>
        )}
      </div>
    );
  }
}

export default AtwWeatherForecast;
