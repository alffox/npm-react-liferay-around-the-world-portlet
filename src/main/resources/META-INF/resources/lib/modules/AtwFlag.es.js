import React from "react";

class AtwFlag extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.handleClick.bind(
          this,
          this.props.currentLocation,
          this.props.currentCountry,
          this.props.currentLocationISO_3166_1_alpha_2,
          this.props.currentTimeZoneDBName,
          this.props.currentLatitude,
          this.props.currentLongitude
        )}
        key={this.props.index}
        type="button"
        className="btn btn-info m-1 flag-top"
      >
        <div className={this.props.classes} />
        {this.props.locationTitle}, {this.props.locationCountry}
      </button>
    );
  }
}

export default AtwFlag;
