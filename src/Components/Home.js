import React, { Component } from "react";
// import { Link } from "react-router-dom";
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
        <div class="content content--fixed">
          <div class="content__inner" />
        </div>
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
          <div className="col-4" />
          <div className="col-4">
            <img
              src={berry}
              className="img-fluid rounded mx-auto d-block"
              alt="Responsive logo"
            />
            <h1 className="text-center">Welcome to Patch Berry</h1>
          </div>
          <div className="col-4" />
        </div>
      </div>
    );
  }
}
