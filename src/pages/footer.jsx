import React, { Component } from "react";

export default class navBar extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="bg-dark text-center text-white">
          <div className="container p-3">
            <hr className="mb-5" />
            <section className="mb-4">
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i className="fa fa-facebook"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i className="fa fa-twitter"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                href="#!"
                role="button"
                style={{ backgroundColor: "#ac2bac" }}
              >
                <i className="fa fa-instagram"></i>
              </a>
            </section>

            <section className="mb-4">
              <p>
                New Design | New You <br />
                Best Place to shop for clothing
              </p>
            </section>

            <section className="">
              <div className="row">
                <div className="col-lg">
                  <h5 className="text-uppercase">Store Information</h5>

                  <ul className="list-unstyled mb-0">
                    <li>NOKSHA</li>
                    <li>
                      <i
                        className="fas fa-map-marker-alt"
                        style={{ fontSize: "20px" }}
                      ></i>
                      <a
                        href="https://g.page/square-hospitals-ltd"
                        className="text-white"
                      >
                        New Market, Dhaka 1205, Dhaka Division, Bangladesh
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>
                      <a href="#!" className="text-white">
                        {" "}
                        Call US: +8801800000000
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-mail-bulk"></i>
                      <a href="mailto: info@noksha.com " className="text-white">
                        Email: info@noksha.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg">
                  <h5 className="text-uppercase">Category</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Men
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Women
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Children
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg">
                  <h5 className="text-uppercase">About</h5>

                  <ul className="list-unstyled mb-0">
                    <li className="web-name">NOKSHA</li>
                    <li>
                      <a href="#!" className="text-white">
                        Contact US
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        About US
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a className="text-white" href="index.html">
              noksha.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
