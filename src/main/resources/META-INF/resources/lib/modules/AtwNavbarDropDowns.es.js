import React from "react";

import AtwNavbarDropDownContinent from "./AtwNavbarDropDownContinent.es.js";

class AtwNavbarDropDowns extends React.Component {
  render() {
    return (
      <div className="navbar-collapse collapse show" id="navbarDropDowns">
        <ul className="navbar-nav">
          <AtwNavbarDropDownContinent
            continentName={"Americas"}
            handleClick={this.props.handleClick}
            locationsContinentData={this.props.locationsData.locations.filter(
              item => item.continent.includes("Americas")
            )}
          />
          <AtwNavbarDropDownContinent
            continentName={"Europe"}
            handleClick={this.props.handleClick}
            locationsContinentData={this.props.locationsData.locations.filter(
              item => item.continent.includes("Europe")
            )}
          />
          <AtwNavbarDropDownContinent
            continentName={"Africa"}
            handleClick={this.props.handleClick}
            locationsContinentData={this.props.locationsData.locations.filter(
              item => item.continent.includes("Africa")
            )}
          />
          <AtwNavbarDropDownContinent
            continentName={"Asia-Pacific"}
            handleClick={this.props.handleClick}
            locationsContinentData={this.props.locationsData.locations.filter(
              item => item.continent.includes("Asia-Pacific")
            )}
          />
        </ul>
      </div>
    );
  }
}

export default AtwNavbarDropDowns;
