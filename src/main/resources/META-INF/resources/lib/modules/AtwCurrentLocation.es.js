import React from "react";

class AtwCurrentLocation extends React.Component {
  render() {
    return (
      <a className="navbar-brand ml-3" href="/#">
        <div className="flag-navbar mx-auto" />
        <div>
          {this.props.currentLocation}, {this.props.currentCountry}
        </div>
      </a>
    );
  }
}

export default AtwCurrentLocation;
