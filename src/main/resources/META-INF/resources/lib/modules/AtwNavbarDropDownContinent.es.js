import React from "react";

import AtwNavbarDropDownLocation from "./AtwNavbarDropDownLocation.es";

class AtwNavbarDropDownContinent extends React.Component {
  render() {
    return (
      <li className="nav-item dropdown mr-5">
        <a
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="mr-1" />
          {this.props.continentName} &#9660;
        </a>
        <div className="dropdown-menu" id={this.props.continentName}>
          {this.props.locationsContinentData &&
            this.props.locationsContinentData.map((location, index) => {
              return (
                <AtwNavbarDropDownLocation
                  key={index}
                  handleClick={this.props.handleClick}
                  currentLocation={location.title}
                  currentCountry={location.country}
                  currentLocationISO_3166_1_alpha_2={
                    location.ISO_3166_1_alpha_2
                  }
                  currentTimeZoneDBName={location.timezone_database_name}
                  classes={
                    location.ISO_3166_1_alpha_2 + " flag-button mx-auto mr-3"
                  }
                  currentLatitude={location.location.lat}
                  currentLongitude={location.location.lon}
                  currentWikiDescription={location.wiki.description}
                  currentWikiURL={location.wiki.URL}
                  locationTitle={location.title}
                  locationCountry={location.country}
                />
              );
            })}
        </div>
      </li>
    );
  }
}

export default AtwNavbarDropDownContinent;
