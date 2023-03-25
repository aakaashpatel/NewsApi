import React, { Component } from "react";
import PlaceholderImage from "../placeholderimage.png";

export default class Placeholder extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
             <div className="card" aria-hidden="true">
              <img src={PlaceholderImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a
                  href="/"
                  tabindex="-1"
                  className="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
             </div>
            </div>
            <div className="col-lg-4">
             <div className="card" aria-hidden="true">
              <img src={PlaceholderImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a
                  href="/"
                  tabindex="-1"
                  className="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
             </div>
            </div>
            <div className="col-lg-4">
             <div className="card" aria-hidden="true">
              <img src={PlaceholderImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a
                  href="/"
                  tabindex="-1"
                  className="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
             </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
