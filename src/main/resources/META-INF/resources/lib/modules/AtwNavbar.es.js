import React from "react";

import AtwCurrentLocation from "./AtwCurrentLocation.es";
import AtwTimeDate from "./AtwTimeDate.es";
//import AtwNavbarDropDowns from "./AtwNavbarDropDowns.es";
//import AtwNavbarToggler from "./AtwNavbarToggler.es";

class AtwNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-info p-1">
        <AtwCurrentLocation
          currentLocation={this.props.currentLocation}
          currentCountry={this.props.currentCountry}
          currentLocationISO_3166_1_alpha_2={
            this.props.currentLocationISO_3166_1_alpha_2
          }
        />
        <AtwTimeDate date={this.props.date} time={this.props.time} />
        {/* <AtwNavbarDropDowns
          handleClick={this.props.handleClick}
          locationsData={this.props.locationsData}
        /> */}
        {/* <AtwNavbarToggler /> */}
      </nav>
    );
  }
}

export default AtwNavbar;
