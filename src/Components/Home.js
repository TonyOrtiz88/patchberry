import React, { Component } from "react";
import { Link } from "react-router-dom";
import slider1 from "../img/slide4.JPEG";
import slider2 from "../img/slide2.JPEG";
import slider3 from "../img/slide3.JPEG";
import slider4 from "../img/slide5.JPEG";
import slider5 from "../img/slide6.JPEG";
import berry from "../img/patchBerryLogo.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slider1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slider2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slider3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slider4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slider5} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
        <div className="row">
          <div className="col-4">
            <img src={berry} className="img-fluid" alt="Responsive logo" />
          </div>
          <div className="col-6">
            <h1 className="pt-5">Welcome to Patch Berry</h1>
            <div className="card bg-dark text-color">
              <img src={berry} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>

          <div className="col-2" />
        </div>
      </div>
    );
  }
}
