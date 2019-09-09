import React from "react";

import AtwWeatherForecast from "./AtwWeatherForecast.es";

class AtwWeatherForecasts extends React.Component {
  render() {
    return (
      <div className="row forecast text-center">
        {this.props.forecastData &&
          this.props.forecastData.map((day, index) => {
            return (
              <AtwWeatherForecast
                key={index}
                forecastDay={day.dt_txt.substring(10, 8)}
                forecastDayTemperature={Math.round(day.main.temp)}
                forecastDayIconURL={
                  "https://openweathermap.org/img/w/" +
                  day.weather[0].icon +
                  ".png"
                }
                forecastDayIconDescription={day.weather[0].description}
                currentForecastCountry={this.props.currentForecastCountry}
              />
            );
          })}
      </div>
    );
  }
}

export default AtwWeatherForecasts;
