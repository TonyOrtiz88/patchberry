import React, { Component } from "react";

export default class AudioPlayer extends Component {
  render() {
    return (
      <div className="container text-center mt-5">
        <div className="card" style={{ width: " 22rem" }}>
          <img
            className="card-img-top"
            src="/music/music1/music1.jpg"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Get It</h5>
            <audio controls>
              <source src="/music/music1/getIt.mp3" type="audio/mp3" />
              <source src="/music/music1/getIt.mp3" type="audio/mp3" />
            </audio>
          </div>
        </div>
      </div>
    );
  }
}
