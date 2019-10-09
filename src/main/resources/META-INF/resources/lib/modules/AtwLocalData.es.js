import React from "react";

import AtwLocalDataLeft from "./AtwLocalDataLeft.es";
import AtwLocalDataRight from "./AtwLocalDataRight.es";
//import AtwLocalDataBottom from "./AtwLocalDataBottom.es";

class AtwLocalData extends React.Component {
  render() {
    return (
      <div className="row">
        <main />
        <AtwLocalDataLeft
          currentWikiDescription={this.props.currentWikiDescription}
          currentWikiURL={this.props.currentWikiURL}
          picturesData={this.props.picturesData}
          //techNewsData={this.props.techNewsData}
          //englishTechNewsURLData={this.props.englishTechNewsURLData}
          //regionalNewsData={this.props.regionalNewsData}
        />
        <AtwLocalDataRight
          currentGrowURL={this.props.currentGrowURL}
          currentLocation={this.props.currentLocation}
          currentWeatherCountry={this.props.currentWeatherCountry}
          currentTemperatureCelsius={this.props.currentTemperatureCelsius}
          currentTemperatureFahrenheit={this.props.currentTemperatureFahrenheit}
          setCelsius={this.props.setCelsius}
          setFahrenheit={this.props.setFahrenheit}
          isCelsius={this.props.isCelsius}
          currentWeatherDescription={this.props.currentWeatherDescription}
          currentIconURL={this.props.currentIconURL}
          currentForecastCountry={this.props.currentForecastCountry}
          forecastData={this.props.forecastData}
          currentLatitude={this.props.currentLatitude}
          currentLongitude={this.props.currentLongitude}
          webCamData={this.props.webCamData}
          currentCountry={this.props.currentCountry}
        />
        {/* <AtwLocalDataBottom picturesData={this.props.picturesData} /> */}
      </div>
    );
  }
}

export default AtwLocalData;
