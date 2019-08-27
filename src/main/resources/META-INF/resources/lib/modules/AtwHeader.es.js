import React from "react";

class AtwHeader extends React.Component {
  render() {
    return (
      <header className="row">
        <div className="col-md-12 text-center text-uppercase">
          <img
            className="float-left img-fluid favicon"
            src="/o/npm-react-liferay-around-the-world-portlet/images/logo.svg"
            alt="Paper airplane icon"
          />
          <h1 className="title-super text-muted position-relative d-none d-sm-block">
            ReactJS - Liferay Around the World
          </h1>
        </div>
      </header>
    );
  }
}

export default AtwHeader;
