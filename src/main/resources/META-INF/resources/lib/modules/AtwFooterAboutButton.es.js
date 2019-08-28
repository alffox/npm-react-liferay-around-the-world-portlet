import React from "react";

class AtwFooterAboutButton extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <button
          type="button"
          className="btn btn-light"
          data-toggle="modal"
          data-target="#aboutModal"
        >
          About
        </button>
        <div
          className="modal fade"
          id="aboutModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="aboutModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="aboutModalLabel">
                  About this App
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
                <p>
                  Liferay Around the World is a Single Page Application showing
                  information for Liferay locations around the world:{" "}
                  <a
                    href="https://www.liferay.com/locations"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.liferay.com/locations
                  </a>
                </p>
                <p>
                  All APIs have been used for demo, non-commercial purposes. You
                  may read more here:{" "}
                  <a
                    href="https://github.com/alffox/around-the-world#api--credit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/alffox/around-the-world#api--credit
                  </a>
                </p>
                <h2 className="anchor">Purpose of this project</h2>
                <p>
                  Back in late 90's when having an internet connection was not
                  always possible, I used to get to know people from all over
                  the world through paper letters. At a point, I decided to ask
                  each of my penpals to draw a flag of the country they were
                  writing from and send it back to me. Eventually, after
                  collecting all of them, I could get a huge poster, hanging on
                  my room's wall, showing me the colors of the world I was in
                  touch with. This project is inspired by those times.
                </p>
                <p>
                  Where are my co-workers worldwide living? What's going on at
                  their location right now? How can I get to know better other
                  Liferay offices worldwide countries?
                </p>
                <p>
                  And also: What's going on at my location at the moment? How
                  can I get useful information, all in one place?
                </p>
                <p>
                  <strong>Around the World</strong> would like to cover this
                  needs and encourage the global mutual knowledge of our
                  countries. The name is inspired by a{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Around_the_World_(Red_Hot_Chili_Peppers_song)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    popular song of the late 90's
                  </a>
                </p>
                <p>
                  More on GitHub:{" "}
                  <a
                    href="https://github.com/alffox/liferay-around-the-world-react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/alffox/liferay-around-the-world-react
                  </a>
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

export default AtwFooterAboutButton;
