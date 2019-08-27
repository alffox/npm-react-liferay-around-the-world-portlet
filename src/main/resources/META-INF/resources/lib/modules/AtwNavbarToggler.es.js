import React from "react";

class AtwNavbar extends React.Component {
  render() {
    return (
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarDropDowns"
        aria-controls="navbarDropDowns"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    );
  }
}

export default AtwNavbar;
