import React from "react";

class AtwNavbarDropDownLocation extends React.Component {
  render() {
    return (
      <button
        className="dropdown-item"
        onClick={this.props.handleClick.bind(
          this,
          this.props.currentLocation,
          this.props.currentCountry,
          this.props.currentLocationISO_3166_1_alpha_2,
          this.props.currentTimeZoneDBName,
          this.props.currentWikiDescription,
          this.props.currentWikiURL,
          this.props.currentLatitude,
          this.props.currentLongitude
        )}
        type="button"
      >
        <div
          className={
            this.props.currentLocationISO_3166_1_alpha_2 +
            " d-inline-block flag-dropdown"
          }
          key={this.props.index}
        ></div>
        {this.props.locationTitle}
      </button>
    );
  }
}

export default AtwNavbarDropDownLocation;
