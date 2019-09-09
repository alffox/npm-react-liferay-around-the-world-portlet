import React from "react";

class AtwCurrentLocation extends React.Component {
  render() {
    return (
      <a className="navbar-brand mx-3" href="/#">
        <div
          className={
            this.props.currentLocationISO_3166_1_alpha_2 +
            " flag-navbar mx-auto"
          }
        />
        <div>
          {this.props.currentLocation}, {this.props.currentCountry}
        </div>
      </a>
    );
  }
}

export default AtwCurrentLocation;
