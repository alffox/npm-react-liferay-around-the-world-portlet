import React from "react";

class AtwTimeDate extends React.Component {
  render() {
    return (
      <div className="col-md-12 text-info font-weight-bold text-center">
        <div className="timedate">
          <i className="icon-calendar" />
          <span className="date px-1 mr-3">{this.props.date}</span>
          <i className="icon-time" />
          <span className="time px-1">{this.props.time}</span>
        </div>
      </div>
    );
  }
}

export default AtwTimeDate;
