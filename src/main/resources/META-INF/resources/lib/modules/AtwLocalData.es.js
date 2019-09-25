import React from "react";

import AtwLocalDataLeft from "./AtwLocalDataLeft.es";
import AtwLocalDataRight from "./AtwLocalDataRight.es";
import AtwLocalDataBottom from "./AtwLocalDataBottom.es";

class AtwLocalData extends React.Component {
  render() {
    return (
      <div className="row">
        <main />
        <AtwLocalDataLeft
          englishNewsData={this.props.englishNewsData}
          regionalNewsData={this.props.regionalNewsData}
          techNewsData={this.props.techNewsData}
        />
        <AtwLocalDataRight
          currentLocation={this.props.currentLocation}
          currentWeatherCountry={this.props.currentWeatherCountry}
          currentTemperatureCelsius={this.props.currentTemperatureCelsius}
          currentTemperatureFahrenheit={this.props.currentTemperatureFahrenheit}
          currentWeatherDescription={this.props.currentWeatherDescription}
          currentIconURL={this.props.currentIconURL}
          currentForecastCountry={this.props.currentForecastCountry}
          forecastData={this.props.forecastData}
          currentLatitude={this.props.currentLatitude}
          currentLongitude={this.props.currentLongitude}
          webCamData={this.props.webCamData}
          wikiExtract={this.props.wikiExtract}
          wikiTitle={this.props.wikiTitle}
          wikiUrl={this.props.wikiUrl}
          picturesData={this.props.picturesData}
        />
        <AtwLocalDataBottom picturesData={this.props.picturesData} />
      </div>
    );
  }
}

export default AtwLocalData;
