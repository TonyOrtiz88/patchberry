import React, { Component } from "react";
// import { Link } from "react-router-dom";
import slider1 from "../img/slide4.JPEG";
import slider2 from "../img/slide2.JPEG";
import slider3 from "../img/slide3.JPEG";
import slider4 from "../img/slide5.JPEG";
import slider5 from "../img/slide6.JPEG";
import berry from "../img/patchBerryLogo.jpg";
import AudioPlayer from "./utility/AudioPlayer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content content--fixed">
          <div className="content__inner" />
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
          <div className="col-4"> </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            <AudioPlayer />
          </div>
          <div className="col-6 mt-5">
            <div className="card w-75">
              <div className="card-body">
                <h5 className="card-title">What is Patch Berry ?</h5>
                <p className="card-text">
                  Patch Berry is a platform where independent and mainstream
                  artist can come and express themselves through music, vlogs,
                  and videos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
