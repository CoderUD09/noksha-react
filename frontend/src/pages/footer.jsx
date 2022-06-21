import React, { Component } from "react";

export default class navBar extends Component {
  render() {
    return (
      <div class="footer">
        <footer class="bg-dark text-center text-white">
          <div class="container p-3">
            <hr class="mb-5" />
            <section class="mb-4">
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor: "#3b5998"}}
                href="#!"
                role="button"
              >
                <i class="fa fa-facebook"></i>
              </a>

              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor: "#55acee"}}
                href="#!"
                role="button"
              >
                <i class="fa fa-twitter"></i>
              </a>

              <a
                class="btn btn-primary btn-floating m-1"
                href="#!"
                role="button"
                style={{backgroundColor: "#ac2bac"}}
              >
                <i class="fa fa-instagram"></i>
              </a>
            </section>

            <section class="mb-4">
              <p>
                New Design | New You <br />
                Best Place to shop for clothing
              </p>
            </section>

            <section class="">
              <div class="row">
                <div class="col-lg">
                  <h5 class="text-uppercase">Store Information</h5>

                  <ul class="list-unstyled mb-0">
                    <li>NOKSHA</li>
                    <li>
                      <i
                        class="fas fa-map-marker-alt"
                        style={{fontSize: "20px"}}
                      ></i>
                      <a
                        href="https://g.page/square-hospitals-ltd"
                        class="text-white"
                      >
                        New Market, Dhaka 1205, Dhaka Division, Bangladesh
                      </a>
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>
                      <a href="#!" class="text-white">
                        {" "}
                        Call US: +8801800000000
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-mail-bulk"></i>
                      <a href="mailto: info@noksha.com " class="text-white">
                        Email: info@noksha.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg">
                  <h5 class="text-uppercase">Category</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">
                        Men
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Women
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Children
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg">
                  <h5 class="text-uppercase">About</h5>

                  <ul class="list-unstyled mb-0">
                    <li class="web-name">NOKSHA</li>
                    <li>
                      <a href="#!" class="text-white">
                        Contact US
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        About US
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div
            class="text-center p-3"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © 2022 Copyright:
            <a class="text-white" href="index.html">
              noksha.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
