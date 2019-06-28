import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <Link className="color-main float-left" to="/">
          <i className="fas fa-chevron-circle-left fa-2x" />
        </Link>
        <br />
        <div className="container">
          <div className="jumbotron mt-4">
            <h1 className="display-4 color-secondary">Patch Berries Mission</h1>
            <p className="color-main lead">
              Patch Berry is a social media site for all artist and creators to
              showcase their talents, sell their work, and a hub where artist
              can build a personal connection with fans and followers through
              forum and vlogs.
            </p>
            <hr className="my-4" />
            <p className="color-main">
              {" "}
              To learn more about our companies mission click the button below .{" "}
            </p>
            <button
              type="button"
              class="btn btn-outline-success color-main-bg my-2 my-sm-0"
              data-toggle="modal"
              data-target="#exampleModalScrollable"
            >
              Learn more
            </button>

            <div
              class="modal fade"
              id="exampleModalScrollable"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalScrollableTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title color-secondary"
                      id="exampleModalScrollableTitle"
                    >
                      Patch Berries Mission And Background
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>
                      Patch Berry was created june 2019, by Anthony Ortiz-Morris
                      in Boston MA. The goal was to build a fan base and
                      notoriety for independent artist, budding actors/comedians
                      and entrepreneurs through a network created over the web.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae tempore, ea deserunt corrupti sint amet, quas nobis
                      animi esse nisi obcaecati expedita rem totam maiores
                      incidunt placeat, dolorem omnis necessitatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae tempore, ea deserunt corrupti sint amet, quas nobis
                      animi esse nisi obcaecati expedita rem totam maiores
                      incidunt placeat, dolorem omnis necessitatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae tempore, ea deserunt corrupti sint amet, quas nobis
                      animi esse nisi obcaecati expedita rem totam maiores
                      incidunt placeat, dolorem omnis necessitatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae tempore, ea deserunt corrupti sint amet, quas nobis
                      animi esse nisi obcaecati expedita rem totam maiores
                      incidunt placeat, dolorem omnis necessitatibus.
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-outline-success color-main-bg my-2 my-sm-0"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
