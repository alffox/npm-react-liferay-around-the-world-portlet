import React from "react";

class AtwFooterPoweredByButton extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <button
          type="button"
          className="btn btn-light"
          data-toggle="modal"
          data-target="#poweredByModal"
        >
          Powered by ...
        </button>
        <div
          className="modal fade"
          id="poweredByModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="poweredByModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="poweredByModalLabel">
                  Powered by ...
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h3>Powered by ...</h3>
                <p>
                  <a href="https://newsapi.org/">News API</a>
                </p>
                <p>
                  <a href="https://openweathermap.org/">OpenWeatherMap</a>
                </p>
                <p>
                  <a href="https://www.webcams.travel/">Webcams.travel</a>
                </p>
                <p>
                  <a href="https://en.wikipedia.org">Wikipedia</a>
                </p>
                <p>
                  <a href="https://unsplash.com/">Unsplash</a>
                </p>
                <p>
                  <a href="https://developers.google.com/maps/documentation/">
                    GoogleMaps API
                  </a>
                </p>
                <p>
                  <a href="https://timezonedb.com/">TimeZoneDB.com</a>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AtwFooterPoweredByButton;
