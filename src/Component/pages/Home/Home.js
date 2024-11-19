import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-wrapper-home">
      {/* Header */}
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <Link to="/">Hack-a-thon</Link>
              </div>
            </div>
            <div className="col-lg-6"></div>
            {/* Commented out section */}
            {/* <div className="col-lg-3">
              <div className="buy_tkt">
                <div className="book_btn">
                  <a href="login.html">
                    <img src="assets/img/icon.png" alt="Icon" />
                    Register Here
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Slider Area Start */}
      <div className="slider_area">
        <div className="gradient-overlay"></div>
        <video autoPlay muted loop className="background-video">
          <source src="assets/img/vd3.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="slider_text text-center">
                <p>
                  <span className="typed-text"></span>
                  <span className="cursor">&nbsp;</span>
                </p>
                <h3>
                  Unpromptable <span className="textdw">Hack-a-thon</span>
                </h3>
                <div className="book_btn">
                  <Link to="/register">
                    <img src="assets/img/icon.png" alt="Icon" />
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider Area End */}
    </div>
  );
}

 
export default Home
