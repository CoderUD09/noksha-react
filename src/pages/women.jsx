import React, { Component } from "react";

export default class navBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div class="categories container mx-auto">
            <div class="small-container"></div>
            <h2 class="title1"> WHAT'S NEW </h2>
            <div class="row justify-content-around">
              <div class="col-2 c-box">
                <img src="img/women/ca-1.jpg" />
              </div>
              <div class="col-2 c-box">
                <img src="img/women/ca-4.jpg" />
              </div>
              <div class="col-2 c-box">
                <img src="img/women/ca-3.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div class="small-container">
          <h1 class="title"> New Arrival</h1>
          <div class="row">
            <div class="col-2">
              <img src="img/women/11.jpg" />
              <h4>Blue Kurta</h4>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <p>$50.00</p>
            </div>
            <div class="col-2">
              <img src="img/women/ca-6.jpg" />
              <h4>Blue Kurta</h4>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <p>$30.00</p>
            </div>
            <div class="col-2">
              <img src="img/women/14.jpg" />
              <h4>Blue Kurta</h4>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <p>$50.00</p>
            </div>
          </div>
          <h2 class="title"> RECOMMENDED FOR YOU</h2>
          <div class="row">
            <div class="col-2">
              <img src="img/women/k7.jpg" />
              <h4>Red Jamdani</h4>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <p>$50.00</p>
            </div>
            <div class="col-2">
              <img src="img/women/ca-5.jpg" />
              <h4>Red Kurta</h4>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>

              </div>
              <p>$30.00</p>
            </div>
            <div class="col-2">
              <img src="img/women/k8.jpg" />
              <h4>Kantha Saree</h4>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <p>$50.00</p>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <img src="img/women/k1.jpg" />
              <h4>Blue Kurta</h4>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <p>$50.00</p>
            </div>
            <div class="col-2">
              <img src="img/women/k5.jpg" />
              <h4>White Nakshi Kantha</h4>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <p>$30.00</p>
            </div>
            <div class="col-2">
              <img src="img/women/k3.jpg" />
              <h4>Katan Saree</h4>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <p>$50.00</p>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}
