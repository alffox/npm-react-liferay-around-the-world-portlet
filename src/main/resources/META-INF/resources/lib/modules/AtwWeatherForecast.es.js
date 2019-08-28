import React from "react";

class AtwWeatherForecast extends React.Component {
  render() {
    return (
      <div className="col-xs-2 next-days">
        <span className="font-weight-bold">{this.props.forecastDay}</span>
        <br />
        <img
          className="weather-icon-next-days"
          src={this.props.forecastDayIconURL}
          alt={this.props.forecastDayIconDescription}
        />
        <br />
        {this.props.forecastDayTemperature} °C
      </div>
    );
  }
}

export default AtwWeatherForecast;
