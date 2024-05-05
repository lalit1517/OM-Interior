import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/footer";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingScreen from "./LoadingScreen";
import Lenis from "@studio-freight/lenis";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="body">
        <div role="main" className="main">
          <section
            className="section section-with-shape-divider section-parallax bg-tertiary border-0 mx-0 relative"
            data-plugin-parallax
            data-plugin-options="{'speed': 1.5, 'parallaxHeight': '150%', 'fadeIn': true}"
            style={{
              backgroundImage:
                "url(https://glimageurl.golocall.com/gl-banner/844761_banner_keystoneinteriordesign_self_1676335082.jpg)",
              minHeight: "600px",
              width:"100%"
            }}
          >
            <div className="container-fluid absolute w-fit z-index-1 pb-5 my-5">
              <div className="row justify-content-center justify-content-lg-start pb-5 mb-5">
                <div className="col-md-10 col-lg-6 text-center text-lg-end pe-lg-4 pb-5 mb-5">
                  <h1
                    className="text-color-light font-weight-medium line-height-4 text-10 mb-2 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="300"
                  >
                    Experience the best of Luxury Services from us.
                    <span className="font-weight-extra-bold custom-highlight-1 ws-nowrap p-1 customHighlightAnim customHighlightAnimDelay"></span>
                  </h1>
                  <div
                    className="appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="500"
                  >
                    <p className="custom-font-secondary font-weight-light custom-font-size-1 text-color-light opacity-6 mb-4">
                      Create Unforgettable Memories With Our Designed Properties
                    </p>
                  </div>
                  <a
                    href="http://www.keystoneinteriordesign.com/#contactus"
                    data-hash
                    data-hash-offset="150"
                    className="btn btn-secondary btn-modern font-weight-bold text-3 px-5 py-3 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="700"
                  >
                    Contact us
                  </a>
                  <div className="spacer pt-5 my-5"></div>
                </div>
              </div>
            </div>
            <div
              className="shape-divider shape-divider-bottom absolute w-full"
              style={{ height: "100%" }}
            >
            <div style={{ width: "100%", position: "absolute", top: "100%"  }}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                style={{width:"100%", height: "100%" }}
                viewBox="0 0 1920 576"
                preserveAspectRatio="xMinYMin"
              >
                <path
                  className="custom-svg-fill-color-tertiary"
                  d="M-12,66c13.35,40.03,28.35,72.62,41,97c12.78,24.63,30.56,58.44,62,97c19.57,24,36.66,40.31,49,52
  c41.02,38.87,77.1,62.82,85,68c53.78,35.23,100.92,51.3,148,67c87.6,29.21,158.49,37.98,201,43c63.9,7.55,112.08,7.78,160,8
  c16.52,0.08,84.41,0.17,181-8c98.88-8.36,172.43-20.7,233-31c42.88-7.29,141.31-24.85,267-56c127.06-31.5,220.66-61.69,296-86
  c89.27-28.8,159.58-54.68,174-60c16.6-6.13,30.39-11.34,40-15c0,113.33,0,226.67,0,340c-644.33,0-1288.67,0-1933,0
  C-9.33,410-10.67,238-12,66z"
                />
                <path
                  fill="#FFF"
                  d="M-5,3c1.21,5.32,2.98,13.29,5,23c4.38,21.08,6.71,34.95,8,42c7.08,38.6,19.7,71.54,26,88
  c8.52,22.26,16.34,38.54,19,44c5.4,11.07,16.38,32.61,33,58c28.88,44.11,57.48,73.41,64,80c6.89,6.97,38.98,38.97,91,72
  c57.09,36.25,106.11,53.37,143,66c66.98,22.93,119.93,31.44,162,38c81,12.63,143.81,13.53,189,14c62.45,0.65,109.33-2.68,156-6
  c35.74-2.54,89.63-7.16,155-16c68.17-9.22,117.88-18.83,170-29c110.32-21.52,194.58-42.54,224-50c131.43-33.34,227.73-64.9,286-84
  c93.88-30.77,155.18-54.57,184-66c6.29-2.49,11.48-4.58,15-6c0,102.67,0,205.33,0,308c-643.33,0-1286.67,0-1930,0C-5,387-5,195-5,3z"
                />
              </svg>
              </div>
            </div>
          </section>

          <div className="container relative z-index-1 factWidgetLocation">
            <div className="row align-items-end pb-4 mb-4 mb-lg-5">
              <div className="col-lg-6 pe-lg-4 mb-5 mb-lg-0">
                <div
                  className="card border-0 custom-border-radius-1 box-shadow-1 appear-animation"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay="900"
                >
                  <div className="card-body p-5">
                    <h2 className="text-color-secondary font-weight-bold text-7 line-height-1 mb-1">
                      Get Free Quote
                    </h2>
                    <p className="custom-font-secondary text-4 pb-1 mb-4">
                      {" "}
                      We are the Best Architectural & Interior Design Company in
                      Tricity. Contact us for today to see what we can do for
                      you.
                    </p>
                    <form
                      className="contact-form custom-form-style-1"
                      method="POST"
                    >
                      <div className="contact-form-success alert alert-success d-none mt-4">
                        <strong>Success!</strong> Your request has been sent to
                        us.
                      </div>

                      <div className="contact-form-error alert alert-danger d-none mt-4">
                        <strong>Error!</strong> There was an error sending your
                        request.
                        <span className="mail-error-message text-1 d-block"></span>
                      </div>

                      <div className="row">
                        <div className="form-group col pb-1 mb-3">
                          <input
                            type="text"
                            value=""
                            data-msg-required="Please enter your name."
                            minlength="4"
                            maxlength="100"
                            className="form-control getStartName"
                            name="getStartName"
                            id="getStartName"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col pb-1 mb-3">
                          <input
                            type="number"
                            value=""
                            data-msg-required="Please enter your phone number."
                            minlength="10"
                            maxlength="15"
                            className="form-control getStartPhone"
                            name="getStartPhone"
                            id="getStartPhone"
                            placeholder="Your Mobile Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col pb-1 mb-3">
                          <input
                            type="email"
                            value=""
                            data-msg-required="Please enter your email address."
                            maxlength="100"
                            className="form-control getStartEmail"
                            name="getStartEmail"
                            id="getStartEmail"
                            placeholder="Your Email Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="row d-none">
                        <div className="form-group col pb-1 mb-3">
                          <input
                            type="text"
                            value=""
                            className="form-control getStartCallURL"
                            name="getStartCallURL"
                            id="getStartCallURL"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>
                      <div className="row d-none">
                        <div className="form-group col pb-1 mb-3">
                          <input
                            type="text"
                            value="1"
                            className="form-control flagType"
                            name="flagType"
                            id="flagType"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group col pb-1 mb-3"></div>
                      <div className="row">
                        <div className="form-group col">
                          <button
                            type="submit"
                            className="btn btn-secondary btn-modern font-weight-bold text-3 px-5 py-3"
                            data-loading-text="Loading..."
                          >
                            CALL ME BACK
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pb-lg-5">
                <ul className="list list-unstyled mb-0">
                  <li className="mb-4 mb-lg-2">
                    <span className="d-flex align-items-center justify-content-end justify-content-lg-end flex-column flex-lg-row font-weight-medium text-4 text-lg-3 text-xl-4">
                      SCHEDULE AN APPOINTMENT:
                      <strong className="text-5-5 mt-2 mt-lg-0 ms-lg-3">
                        <a
                          href="tel:+91******9529"
                          onclick="webClickActivity('10','Banner Footer Call','1')"
                          className="text-color-secondary text-color-hover-primary text-decoration-none"
                        >
                          ******9529
                        </a>
                      </strong>
                    </span>
                  </li>
                  <li className="mb-0">
                    <span className="d-flex align-items-center justify-content-end justify-content-lg-end flex-column flex-lg-row font-weight-medium text-4 text-lg-3 text-xl-4">
                      SEND AN EMAIL:
                      <strong className="text-3 ms-lg-3">
                        <a
                          href="mailto:******************************.com"
                          className="text-color-tertiary text-color-hover-primary text-decoration-underline"
                        >
                          ******************************.com
                        </a>
                      </strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div
                className="col-6 col-xl-3 mb-5 mb-xl-0 appear-animation"
                data-appear-animation="fadeInLeftShorter"
                data-appear-animation-delay="200"
              >
                <div className="d-flex align-items-center justify-content-center flex-column flex-xl-row text-center">
                  <svg
                    fill="none"
                    height="30"
                    stroke="#212121"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="23 3 12 14 9 11" />
                  </svg>
                  <h3 className="text-transform-none text-color-dark font-weight-bold mb-0 text-4 ps-1 ms-xl-2 mt-3 mt-xl-0">
                    15+ Years of Experience
                  </h3>
                </div>
              </div>
              <div
                className="col-6 col-xl-3 divider-left-border mb-5 mb-xl-0 appear-animation"
                data-appear-animation="fadeInLeftShorter"
              >
                <div className="d-flex align-items-center justify-content-center flex-column flex-xl-row text-center">
                  <svg
                    fill="none"
                    height="30"
                    stroke="#212121"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="23 3 12 14 9 11" />
                  </svg>
                  <h3 className="text-transform-none text-color-dark font-weight-bold mb-0 text-4 ps-1 ms-xl-2 mt-3 mt-xl-0">
                    1k+ Happy Customers
                  </h3>
                </div>
              </div>
              <div
                className="col-6 col-xl-3 divider-left-border appear-animation"
                data-appear-animation="fadeInRightShorter"
              >
                <div className="d-flex align-items-center justify-content-center flex-column flex-xl-row text-center">
                  <svg
                    fill="none"
                    height="30"
                    stroke="#212121"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="23 3 12 14 9 11" />
                  </svg>
                  <h3 className="text-transform-none text-color-dark font-weight-bold mb-0 text-4 ps-1 ms-xl-2 mt-3 mt-xl-0">
                    500+ Projects Completed
                  </h3>
                </div>
              </div>
              <div
                className="col-6 col-xl-3 divider-left-border appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="200"
              >
                <div className="d-flex align-items-center justify-content-center flex-column flex-xl-row text-center">
                  <svg
                    fill="none"
                    height="30"
                    stroke="#212121"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="23 3 12 14 9 11" />
                  </svg>
                  <h3 className="text-transform-none text-color-dark font-weight-bold mb-0 text-4 ps-1 ms-xl-2 mt-3 mt-xl-0">
                    10+ Team Members
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <section className="section section-with-shape-divider border-0 bg-transparent m-0">
            <div className="shape-divider shape-divider-reverse-x">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1920 102"
                preserveAspectRatio="xMinYMin"
              >
                <path
                  fill="#F7F7F7"
                  d="M1895,78c-56.71-6.03-113.75-12.1-167-17c-75.42-6.94-133.81-10.66-171-13c-62.1-3.91-108.85-5.97-155-8
								c-35.96-1.58-78.06-3.42-133-5c-59.81-1.72-103.18-2.23-172-3c-92.17-1.03-154.41-1.01-169-1c-69.05,0.05-115.16,0.67-137,1
								c-43.08,0.65-76.21,1.48-97,2c-28.02,0.7-71.13,1.8-128,4c-16.64,0.64-57.72,2.28-111,5c-26.12,1.33-67.11,3.45-121,7
								c-21.14,1.39-54.21,3.59-96,7c-19.93,1.63-39.22,3.32-47,4c-16.12,1.41-33.55,2.94-55,5c-26.48,2.54-19.07,2.04-77,8
								c-19.39,1.99-36.94,3.77-60.59,7.46V103H1923V81C1916.55,80.3,1906.82,79.26,1895,78z"
                />
              </svg>
            </div>
            <div className="shape-divider shape-divider-bottom">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1920 102"
                preserveAspectRatio="xMinYMin"
              >
                <path
                  fill="#F7F7F7"
                  d="M1895,78c-56.71-6.03-113.75-12.1-167-17c-75.42-6.94-133.81-10.66-171-13c-62.1-3.91-108.85-5.97-155-8
								c-35.96-1.58-78.06-3.42-133-5c-59.81-1.72-103.18-2.23-172-3c-92.17-1.03-154.41-1.01-169-1c-69.05,0.05-115.16,0.67-137,1
								c-43.08,0.65-76.21,1.48-97,2c-28.02,0.7-71.13,1.8-128,4c-16.64,0.64-57.72,2.28-111,5c-26.12,1.33-67.11,3.45-121,7
								c-21.14,1.39-54.21,3.59-96,7c-19.93,1.63-39.22,3.32-47,4c-16.12,1.41-33.55,2.94-55,5c-26.48,2.54-19.07,2.04-77,8
								c-19.39,1.99-36.94,3.77-60.59,7.46V103H1923V81C1916.55,80.3,1906.82,79.26,1895,78z"
                />
              </svg>
            </div>
            <div className="container py-5 my-5">
              <div className="row justify-content-center pb-2 mt-2 mb-4">
                <div className="col-lg-9 text-center">
                  <h2
                    className="text-color-secondary font-weight-bold text-8 mb-3 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="200"
                  >
                    What We Offer
                  </h2>
                  <p
                    className="custom-font-secondary text-4 mb-4 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="200"
                  >
                    Services we Offer{" "}
                  </p>
                  <p
                    className="mb-0 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="300"
                  >
                    We believe that everyone merit to be inspired by the spaces
                    in which they dwell. Intent Interior has been transforming
                    clients&rsquo; living and work spaces since 2010. We are a
                    full-service interior design firm located in the greater
                    mohali and offer a wide variety of services to all of our
                    clients
                  </p>
                </div>
              </div>
              <div className="featured-boxes featured-boxes-style-4 custom-featured-boxes-style-1">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-4">
                    <div
                      className="featured-box featured-box-primary featured-box-effect-5 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="300"
                    >
                      <div className="box-content text-center">
                        <div className="custom-featured-icon-wrapper bg-primary mb-4">
                          <img
                            src="https://img.icons8.com/emoji/48/null/pine-decoration.png"
                            className="img-fluid icon-featured"
                            alt="Interior Design"
                          />
                        </div>
                        <h3 className="text-transform-none font-weight-bold custom-font-size-1 mb-3">
                          Interior Design
                        </h3>
                        <p className="px-3 mb-0">
                          We are providing interior design services with a
                          dedicated team of professional interior designers
                          along with well-trained and implementers who help
                          bring designs into reality. Our scope of work includes
                          both interior and execution the design
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-4">
                    <div
                      className="featured-box featured-box-primary featured-box-effect-5 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="300"
                    >
                      <div className="box-content text-center">
                        <div className="custom-featured-icon-wrapper bg-primary mb-4">
                          <img
                            src="https://img.icons8.com/fluency/48/null/planning-skill.png"
                            className="img-fluid icon-featured"
                            alt="Space Planning"
                          />
                        </div>
                        <h3 className="text-transform-none font-weight-bold custom-font-size-1 mb-3">
                          Space Planning
                        </h3>
                        <p className="px-3 mb-0">
                          Furnishings &amp; material selection to interior &amp;
                          architectural planning, each space with the
                          owner&rsquo;s unique style and personality. illuminate
                          your space with our decorative and functional Spatial
                          Planning that meet the needs of each area. Today to
                          start outstanding services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-4">
                    <div
                      className="featured-box featured-box-primary featured-box-effect-5 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="300"
                    >
                      <div className="box-content text-center">
                        <div className="custom-featured-icon-wrapper bg-primary mb-4">
                          <img
                            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-woodwork-diy-flaticons-lineal-color-flat-icons.png"
                            className="img-fluid icon-featured"
                            alt="Design Wood Work "
                          />
                        </div>
                        <h3 className="text-transform-none font-weight-bold custom-font-size-1 mb-3">
                          Design Wood Work{" "}
                        </h3>
                        <p className="px-3 mb-0">
                          Choose the best Modular Kitchen &amp; Cupboard
                          designers in Chandigarh Mohali Panchkula . Amazing
                          designs at your price. Get consultation from the
                          industry experts &amp; create a dream kitchen/Cupboard
                          at your home.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="whoweare"
            className="section section-with-shape-divider bg-transparent border-0 m-0"
          >
            <div className="shape-divider shape-divider-bottom">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1920 102"
                preserveAspectRatio="xMinYMin"
              >
                <path
                  fill="#F7F7F7"
                  d="M1895,78c-56.71-6.03-113.75-12.1-167-17c-75.42-6.94-133.81-10.66-171-13c-62.1-3.91-108.85-5.97-155-8
								c-35.96-1.58-78.06-3.42-133-5c-59.81-1.72-103.18-2.23-172-3c-92.17-1.03-154.41-1.01-169-1c-69.05,0.05-115.16,0.67-137,1
								c-43.08,0.65-76.21,1.48-97,2c-28.02,0.7-71.13,1.8-128,4c-16.64,0.64-57.72,2.28-111,5c-26.12,1.33-67.11,3.45-121,7
								c-21.14,1.39-54.21,3.59-96,7c-19.93,1.63-39.22,3.32-47,4c-16.12,1.41-33.55,2.94-55,5c-26.48,2.54-19.07,2.04-77,8
								c-19.39,1.99-36.94,3.77-60.59,7.46V103H1923V81C1916.55,80.3,1906.82,79.26,1895,78z"
                />
              </svg>
            </div>
            <div className="container mt-2 mb-5 pb-5">
              <div className="row align-items-center mb-4">
                <div className="col-lg-5 mb-5 mb-lg-0">
                  <div className="d-flex align-items-center mb-2">
                    <span
                      className="custom-line appear-animation"
                      data-appear-animation="customLineAnimation"
                      appear-animation-duration="1s"
                    ></span>
                    <div className="overflow-hidden ms-3">
                      <h1
                        className="text-color-primary font-weight-semibold line-height-3 text-4 mb-0 appear-animation"
                        data-appear-animation="maskRight"
                        data-appear-animation-delay="200"
                      >
                        About US
                      </h1>
                    </div>
                  </div>
                  <h2
                    className="text-color-secondary font-weight-bold text-transform-none line-height-2 text-10 mb-4 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="400"
                  >
                    The Best Interior Designer{" "}
                    <span className="text-1 d-block"></span>
                  </h2>
                  <p
                    className="custom-font-secondary text-4 mb-4 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="600"
                  >
                    Keystone established in 2015, founded by Mr. Abhimanyu
                    Poonia. The organization works with the sole intention to
                    help people in making property interior designs according to
                    their preferences. We provide essential commercial and
                    residential interior designers in Chandigarh, Mohali,
                    Panchkula (Tricity). Keystone has also done some significant
                    projects in Zirakpur and many major cities.We have carried
                    out successful projects in Tricity and transformed many
                    offices, hotels, houses, restaurants, stores, malls into
                    much more alluring and glamorous.{" "}
                  </p>
                  <a
                    href="/about-us/"
                    className="btn btn-primary btn-modern font-weight-bold text-3 px-5 py-3 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="800"
                  >
                    READ MORE
                  </a>
                </div>
                <div className="col-sm-10 col-lg-6 offset-sm-1 ps-sm-5 ps-lg-0">
                  <div className="position-relative">
                    <div
                      data-plugin-float-element
                      data-plugin-options="{'startPos': 'top', 'speed': 0.2, 'transition': true, 'transitionDuration': 1000, 'isInsideSVG': true}"
                    >
                      <img
                        src="https://glimageurl.golocall.com/gl-features/737892_keystoneinteriordesign_1676335655.jpeg"
                        className="img-fluid custom-box-shadow-1 appear-animation"
                        data-appear-animation="fadeInLeftShorter"
                        data-appear-animation-delay="1000"
                        alt="About US"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section border-0 m-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center mb-2">
                    <span
                      className="custom-line appear-animation"
                      data-appear-animation="customLineAnimation"
                      appear-animation-duration="1s"
                    ></span>
                    <div className="overflow-hidden ms-3">
                      <h2
                        className="text-color-primary font-weight-semibold line-height-3 text-4 mb-0 appear-animation"
                        data-appear-animation="maskRight"
                        data-appear-animation-delay="600"
                      >
                        Our Process
                      </h2>
                    </div>
                  </div>
                  <h3
                    className="text-color-secondary font-weight-bold text-transform-none text-6 mb-3 pb-1 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="800"
                  >
                    We have revolutionized Interior Design Company in the
                    Tricity Since 2010
                  </h3>
                  <p
                    className="mb-4 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="1000"
                  >
                    Keystone Interior Design is the leading luxury interior
                    platform of choice in the Tricity Region. We change the way
                    people design and create their interior spaces by setting
                    new trends. An award-winning enterprise, Our Team has been
                    hailed as providing clients with the latest cutting edge
                    technology from discovery to purchase through customized
                    solutions to suit the client needs. We offer an unparalleled
                    service and product offering through exceptional customer
                    service.
                  </p>
                </div>
              </div>
              <div className="row align-items-center justify-content-center mb-4">
                <div className="col-lg-7 pe-lg-5 mb-5 mb-lg-0">
                  <div
                    className="accordion custom-accordion-style-1 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="1200"
                    id="accordion1"
                  >
                    <div
                      className="card card-default"
                      itemscope
                      itemtype="https://schema.org/Question"
                    >
                      <div className="card-header" id="collapseHeading1">
                        <h4 className="card-title m-0" itemprop="mainEntity">
                          <a
                            className="accordion-toggle text-decoration-none text-color-dark font-weight-bold collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            aria-expanded="false"
                            aria-controls="collapse1"
                            itemprop="name"
                          >
                            1 - Meet &amp; Agree{" "}
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse1"
                        className="collapse"
                        aria-labelledby="collapseHeading1"
                        data-bs-parent="#accordion1"
                        itemprop="acceptedAnswer"
                        itemscope
                        itemtype="https://schema.org/Answer"
                      >
                        <div className="card-body">
                          <p className="mb-0" itemprop="text"></p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card card-default"
                      itemscope
                      itemtype="https://schema.org/Question"
                    >
                      <div className="card-header" id="collapseHeading2">
                        <h4 className="card-title m-0" itemprop="mainEntity">
                          <a
                            className="accordion-toggle text-decoration-none text-color-dark font-weight-bold collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapse2"
                            itemprop="name"
                          >
                            2 - Idea &amp; Concept{" "}
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse2"
                        className="collapse"
                        aria-labelledby="collapseHeading2"
                        data-bs-parent="#accordion2"
                        itemprop="acceptedAnswer"
                        itemscope
                        itemtype="https://schema.org/Answer"
                      >
                        <div className="card-body">
                          <p className="mb-0" itemprop="text"></p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card card-default"
                      itemscope
                      itemtype="https://schema.org/Question"
                    >
                      <div className="card-header" id="collapseHeading3">
                        <h4 className="card-title m-0" itemprop="mainEntity">
                          <a
                            className="accordion-toggle text-decoration-none text-color-dark font-weight-bold collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse3"
                            aria-expanded="false"
                            aria-controls="collapse3"
                            itemprop="name"
                          >
                            3 - Build &amp; Install{" "}
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse3"
                        className="collapse"
                        aria-labelledby="collapseHeading3"
                        data-bs-parent="#accordion3"
                        itemprop="acceptedAnswer"
                        itemscope
                        itemtype="https://schema.org/Answer"
                      >
                        <div className="card-body">
                          <p className="mb-0" itemprop="text"></p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card card-default"
                      itemscope
                      itemtype="https://schema.org/Question"
                    >
                      <div className="card-header" id="collapseHeading4">
                        <h4 className="card-title m-0" itemprop="mainEntity">
                          <a
                            className="accordion-toggle text-decoration-none text-color-dark font-weight-bold collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                            itemprop="name"
                          >
                            4 - Reality Delivered{" "}
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse4"
                        className="collapse"
                        aria-labelledby="collapseHeading4"
                        data-bs-parent="#accordion4"
                        itemprop="acceptedAnswer"
                        itemscope
                        itemtype="https://schema.org/Answer"
                      >
                        <div className="card-body">
                          <p className="mb-0" itemprop="text"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-9 col-lg-5 ps-sm-5">
                  <div className="position-relative">
                    <div
                      data-plugin-float-element
                      data-plugin-options="{'startPos': 'top', 'speed': 0.2, 'transition': true, 'transitionDuration': 1000, 'isInsideSVG': true}"
                    >
                      <img
                        src="https://glimageurl.golocall.com/gl-features/548049_keystoneinteriordesign_1676335943.jpeg"
                        className="img-fluid custom-box-shadow-1 appear-animation"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="1200"
                        alt="Our Process"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="whoweare"
            className="section bg-transparent border-0 m-0"
          >
            <div className="container mt-2 mb-2 pb-2">
              <div className="row align-items-center mb-4">
                <div className="col-lg-5 mb-5 mb-lg-0">
                  <div className="position-relative">
                    <div
                      data-plugin-float-element
                      data-plugin-options="{'startPos': 'top', 'speed': 0.2, 'transition': true, 'transitionDuration': 600, 'isInsideSVG': true}"
                    >
                      <img
                        src="https://glimageurl.golocall.com/gl-features/950990_keystoneinteriordesign_1676343440.jpeg"
                        className="img-fluid custom-box-shadow-1 appear-animation"
                        data-appear-animation="fadeInLeftShorter"
                        data-appear-animation-delay="1000"
                        alt="We Create Value For Your Objects With Designs"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-10 col-lg-6 offset-sm-1 ps-sm-5 ps-lg-0">
                  <div className="d-flex align-items-center mb-2">
                    <span
                      className="custom-line appear-animation"
                      data-appear-animation="customLineAnimation"
                      appear-animation-duration="1s"
                    ></span>
                    <div className="overflow-hidden ms-3">
                      <h2
                        className="text-color-primary font-weight-semibold line-height-3 text-4 mb-0 appear-animation"
                        data-appear-animation="maskRight"
                        data-appear-animation-delay="200"
                      >
                        We Create Value For Your Objects With Designs
                      </h2>
                    </div>
                  </div>
                  <h3
                    className="text-color-secondary font-weight-bold text-transform-none line-height-2 text-10 mb-4 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="400"
                  >
                    Best Interior Designer That you will love to Meet{" "}
                    <span className="text-1 d-block"></span>
                  </h3>
                  <p
                    className="mb-4 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="600"
                  >
                    Keystone Interior Designer is one of the finest Interior
                    company in Chandigarh Mohali Panchkula and we&rsquo;re
                    always committed to serving our customers with the best of
                    Interior solutions.
                  </p>

                  <div className="marker-box">
                    <div className="marker-box-marker">
                      <i className="icon material-icons-outlined">bookmark</i>
                    </div>
                    <h4
                      className="text-color-secondary font-weight-semibold line-height-3 text-5 mb-0 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="800"
                    >
                      Design Consultation
                    </h4>
                    <p
                      className="mb-4 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="600"
                    >
                      Designing functional and aesthetic spaces which reflect
                      the style quotient &amp; lifestyle of the people residing
                      and working in them. Designs made to revive the soul of
                      your philosophy.
                    </p>
                  </div>
                  <div className="marker-box">
                    <div className="marker-box-marker">
                      <i className="icon material-icons-outlined">bookmark</i>
                    </div>
                    <h4
                      className="text-color-secondary font-weight-semibold line-height-3 text-5 mb-0 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="800"
                    >
                      Turnkey Solutions
                    </h4>
                    <p
                      className="mb-4 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="600"
                    >
                      Comprehensive implementation of all civil and design
                      schemes such as planning specific lighting and plumbing
                      schemes, flooring layouts, woodwork, false ceiling and
                      more.
                    </p>
                  </div>
                  <div className="marker-box">
                    <div className="marker-box-marker">
                      <i className="icon material-icons-outlined">bookmark</i>
                    </div>
                    <h4
                      className="text-color-secondary font-weight-semibold line-height-3 text-5 mb-0 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="800"
                    >
                      Valuation Services for Property
                    </h4>
                    <p
                      className="mb-4 appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="600"
                    >
                      Inhouse valuation experts value the property based on the
                      recent sale, rental trends, listings and govt rates and
                      data from sub-registrar records. Both comparable and
                      rental yield based approach taken at non speculative
                      valuation.
                    </p>
                  </div>

                  <a
                    href="https://www.keystoneinteriordesign.com/contact-us/"
                    className="btn btn-primary btn-modern font-weight-bold text-3 px-5 py-3 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="1000"
                  >
                    Meet Us{" "}
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-with-shape-divider bg-tertiary border-0 m-0">
            <div className="shape-divider">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1920 116"
                preserveAspectRatio="xMinYMin"
              >
                <path
                  className="custom-svg-fill-color-tertiary-darken"
                  d="M0,24c2.86,0.42,7.41,1.1,13,2c6.13,0.98,10.67,1.77,12,2c11.67,2.01,42.24,7.05,68,11
								c7.79,1.2,22.72,3.48,41,6c20.75,2.86,38.83,5.06,74,9c41.19,4.61,62.09,6.95,93,10c57.4,5.66,101.17,9.03,114,10
								c9.13,0.69,40.29,3.02,109,7c48.33,2.8,87.04,5.04,132,7c76.86,3.35,135.02,4.27,184,5c104.27,1.56,187.39,0.71,234,0
								c21.92-0.34,91.62-1.5,183-5c50.62-1.94,106.43-4.12,181-9c57.01-3.73,108.05-7.94,152-12c94.91-8.78,162.37-17.44,182-20
								c41.76-5.45,72.06-10.09,96-14c21.23-3.47,39.04-6.63,52-9c0-11.67,0-23.33,0-35C1279-11,638-11-3-11C-2,0.67-1,12.33,0,24z"
                />
                <path
                  fill="#FFF"
                  d="M-7,23c1.59,0.23,4.03,0.58,7,1c82.06,11.6,145.17,16.35,182,19c244.62,17.62,377,23,377,23
								c157.86,6.42,277.64,7.71,308,8c75.8,0.73,232.89,1.31,438-6c0,0,137.72-4.66,358-19c42.98-2.8,104.01-7.03,183-16
								c33.26-3.78,60.85-7.38,80-10c0-9.01,0-18.01,0-27.02c-644,0-1288,0-1932,0C-6.33,4.99-6.67,13.99-7,23z"
                />
              </svg>
            </div>
            <div className="shape-divider shape-divider-bottom">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1920 102"
                preserveAspectRatio="xMinYMin"
              >
                <path
                  fill="#F7F7F7"
                  d="M1895,78c-56.71-6.03-113.75-12.1-167-17c-75.42-6.94-133.81-10.66-171-13c-62.1-3.91-108.85-5.97-155-8
								c-35.96-1.58-78.06-3.42-133-5c-59.81-1.72-103.18-2.23-172-3c-92.17-1.03-154.41-1.01-169-1c-69.05,0.05-115.16,0.67-137,1
								c-43.08,0.65-76.21,1.48-97,2c-28.02,0.7-71.13,1.8-128,4c-16.64,0.64-57.72,2.28-111,5c-26.12,1.33-67.11,3.45-121,7
								c-21.14,1.39-54.21,3.59-96,7c-19.93,1.63-39.22,3.32-47,4c-16.12,1.41-33.55,2.94-55,5c-26.48,2.54-19.07,2.04-77,8
								c-19.39,1.99-36.94,3.77-60.59,7.46V103H1923V81C1916.55,80.3,1906.82,79.26,1895,78z"
                />
              </svg>
            </div>
            <div className="container pt-5 pb-3 mt-4">
              <div className="row mt-5 mb-5">
                <div className="col-lg-4 pe-lg-0 mb-4 mb-lg-0">
                  <h2 className="text-color-light font-weight-bold line-height-6 text-8 mb-3">
                    Our Happy Clients
                  </h2>
                  <p className="text-color-light opacity-7 mb-0">
                    Recognize how Keystone interior designers provide the best
                    interior designers in Chandigarh, Mohali, Panchkula
                    (Tricity)...
                  </p>
                </div>
                <div className="col-lg-8 ps-lg-4">
                  <div
                    className="owl-carousel dots-light dots-align-left"
                    data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 1}, '979': {'items': 2}, '1199': {'items': 2}}, 'margin': 20, 'loop': true, 'dots': true, 'dotsEach': 1, 'nav': false, 'autoplay': true, 'autoplayTimeout': 5000}"
                  >
                    <div>
                      <div className="testimonial testimonial-style-3 custom-testimonial-style-1">
                        <blockquote>
                          <p className="mb-0">
                            They are genuine and hardworking guys. I am
                            impressed with the variety of designs they have and
                            the way they h...
                          </p>
                        </blockquote>
                        <div className="testimonial-author">
                          <div className="testimonial-author-thumbnail">
                            <img
                              alt="Keystone Interior Design,  Interior Designers in Chandigarh,Interior Designers in Mohali,Interior Designers in Panchkula,Office interior designers in Mohali,Hospital interior designers in Chandigarh,Best interior designer in mohali"
                              src="https://glimageurl.golocall.com/gl-testimonials/keystoneinteriordesign_350695867_hfjsdhfjfs.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                          <p>
                            <strong className="text-color-light font-weight-semibold text-4 mb-1">
                              Rihan Singh
                            </strong>
                            <span className="text-color-light text-2">
                              Client
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="testimonial testimonial-style-3 custom-testimonial-style-1">
                        <blockquote>
                          <p className="mb-0">
                            They helped me a lot in my house interior designing
                            job and I am so thankful to them....
                          </p>
                        </blockquote>
                        <div className="testimonial-author">
                          <div className="testimonial-author-thumbnail">
                            <img
                              alt="Keystone Interior Design,  Interior Designers in Chandigarh,Interior Designers in Mohali,Interior Designers in Panchkula,Office interior designers in Mohali,Hospital interior designers in Chandigarh,Best interior designer in mohali"
                              src="https://glimageurl.golocall.com/gl-testimonials/keystoneinteriordesign_1078350159_IMG_20150815_161628.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                          <p>
                            <strong className="text-color-light font-weight-semibold text-4 mb-1">
                              Shobhit Tyagi
                            </strong>
                            <span className="text-color-light text-2">
                              Client
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="testimonial testimonial-style-3 custom-testimonial-style-1">
                        <blockquote>
                          <p className="mb-0">
                            Truly Great Work By their side. Thanks!!...
                          </p>
                        </blockquote>
                        <div className="testimonial-author">
                          <div className="testimonial-author-thumbnail">
                            <img
                              alt="Keystone Interior Design,  Interior Designers in Chandigarh,Interior Designers in Mohali,Interior Designers in Panchkula,Office interior designers in Mohali,Hospital interior designers in Chandigarh,Best interior designer in mohali"
                              src="https://glimageurl.golocall.com/gl-testimonials/keystoneinteriordesign_690896711_anonymous_image.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                          <p>
                            <strong className="text-color-light font-weight-semibold text-4 mb-1">
                              Dinesh Kumar
                            </strong>
                            <span className="text-color-light text-2">
                              Client
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="testimonial testimonial-style-3 custom-testimonial-style-1">
                        <blockquote>
                          <p className="mb-0">
                            Impressed with the support they showed to Me in my
                            work....
                          </p>
                        </blockquote>
                        <div className="testimonial-author">
                          <div className="testimonial-author-thumbnail">
                            <img
                              alt="Keystone Interior Design,  Interior Designers in Chandigarh,Interior Designers in Mohali,Interior Designers in Panchkula,Office interior designers in Mohali,Hospital interior designers in Chandigarh,Best interior designer in mohali"
                              src="https://glimageurl.golocall.com/gl-testimonials/keystoneinteriordesign_2109840988_anonymous_image.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                          <p>
                            <strong className="text-color-light font-weight-semibold text-4 mb-1">
                              Vikash Singh
                            </strong>
                            <span className="text-color-light text-2">
                              Client
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section border-0 bg-transparent pt-4 pt-lg-5 m-0">
            <div className="container pb-0 mb-0">
              <div className="row align-items-end pb-3 mb-4">
                <div className="col-lg-9 col-xl-10 mb-4 mb-lg-0">
                  <div className="d-flex align-items-center pb-1 mb-2">
                    <span
                      className="custom-line appear-animation"
                      data-appear-animation="customLineAnimation"
                      appear-animation-duration="1s"
                    ></span>
                    <div className="overflow-hidden ms-3">
                      <h2
                        className="text-color-primary font-weight-semibold line-height-3 text-4 mb-0 appear-animation"
                        data-appear-animation="maskRight"
                        data-appear-animation-delay="500"
                      >
                        OUR BLOG
                      </h2>
                    </div>
                  </div>
                  <h3
                    className="text-color-secondary font-weight-bold text-transform-none text-8 mb-3 pb-1 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="600"
                  >
                    Design Portfolio{" "}
                  </h3>
                  <p
                    className="mb-0 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="800"
                  >
                    Interior Design for Great Homes.These Are Our Creations...
                  </p>
                </div>
                <div className="col-lg-auto px-lg-0">
                  <div className="d-flex justify-content-lg-end">
                    <a
                      href="/blog/"
                      className="btn btn-secondary btn-modern font-weight-bold text-3 px-5 py-3 appear-animation"
                      data-appear-animation="fadeInLeftShorter"
                      data-appear-animation-delay="600"
                    >
                      VIEW MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <article
                    className="appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="1000"
                    itemscope
                    itemtype="https://schema.org/BlogPosting"
                    itemid="/commercial-interior-design-guide-by-expert-interior-designers/gl104009/"
                  >
                    <div className="card border-0 border-radius-0 box-shadow-1">
                      <div className="card-body p-3 z-index-1">
                        <span className="d-none" itemprop="headline">
                          Commercial Interior Design Guide by Expert Interior
                          Designers
                        </span>
                        <meta
                          itemprop="image"
                          content="https://glimageurl.golocall.com/golocal-post/image/798898_keystoneinteriordesign_1641203877.jpeg"
                        />
                        <a href="/commercial-interior-design-guide-by-expert-interior-designers/gl104009/">
                          <img
                            className="card-img-top border-radius-0 mb-2"
                            src="https://glimageurl.golocall.com/golocal-post/image/thumb/798898_keystoneinteriordesign_1641203877.jpeg"
                            title="Commercial Interior Design Guide by Expert Interior Designers, Keystone Interior Design, Office Interior Designers in Mohali"
                            alt="Keystone Interior Design, Office Interior Designers in Mohali"
                          />
                        </a>
                        <p className="text-uppercase text-color-default text-1 my-2">
                          <time itemprop="datePublished" datetime="2022-01-03">
                            3rd January, 2022
                          </time>
                          <span className="d-none" itemprop="locationCreated">
                            Mohali, Punjab
                          </span>
                          <span className="opacity-3 d-inline-block px-2">
                            |
                          </span>
                          by{" "}
                          <span
                            itemprop="author"
                            itemscope
                            itemtype="https://schema.org/Person"
                          >
                            <a itemprop="url" href="/">
                              <span itemprop="name">Admin</span>
                            </a>
                          </span>
                        </p>
                        <div className="card-body p-0">
                          <h4
                            className="card-title text-5 font-weight-bold pb-1 mb-2"
                            itemprop="name"
                          >
                            <a
                              className="text-color-dark text-color-hover-primary text-decoration-none"
                              href="/commercial-interior-design-guide-by-expert-interior-designers/gl104009/"
                            >
                              Commercial Interior Design Guide by Expert
                              Interior Designers
                            </a>
                          </h4>
                          <span className="d-none" itemprop="articleBody">
                            This article will teach you about four popular types
                            of commercial interior design used in today&#039;s
                            world. That is very helpful if you are looking for
                            office interior designers.
                          </span>
                          <p className="card-text mb-2">
                            This article will teach you about four popular types
                            of commercial interior design used in today&#03....
                          </p>
                          <a
                            href="/commercial-interior-design-guide-by-expert-interior-designers/gl104009/"
                            className="btn btn-link font-weight-semibold text-decoration-none text-3 ps-0"
                          >
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                  <article
                    className="appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="1000"
                    itemscope
                    itemtype="https://schema.org/BlogPosting"
                    itemid="/interior-design-trends-for-the-new-year-2022/gl103980/"
                  >
                    <div className="card border-0 border-radius-0 box-shadow-1">
                      <div className="card-body p-3 z-index-1">
                        <span className="d-none" itemprop="headline">
                          Interior Design Trends for the New Year 2022
                        </span>
                        <meta
                          itemprop="image"
                          content="https://glimageurl.golocall.com/golocal-post/image/219970_keystoneinteriordesign_1640951484.jpeg"
                        />
                        <a href="/interior-design-trends-for-the-new-year-2022/gl103980/">
                          <img
                            className="card-img-top border-radius-0 mb-2"
                            src="https://glimageurl.golocall.com/golocal-post/image/thumb/219970_keystoneinteriordesign_1640951484.jpeg"
                            title="Interior Design Trends for the New Year 2022, Keystone Interior Design, Interior Designers in Mohali"
                            alt="Keystone Interior Design, Interior Designers in Mohali"
                          />
                        </a>
                        <p className="text-uppercase text-color-default text-1 my-2">
                          <time itemprop="datePublished" datetime="2021-12-31">
                            31st December, 2021
                          </time>
                          <span className="d-none" itemprop="locationCreated">
                            Mohali, Punjab
                          </span>
                          <span className="opacity-3 d-inline-block px-2">
                            |
                          </span>
                          by{" "}
                          <span
                            itemprop="author"
                            itemscope
                            itemtype="https://schema.org/Person"
                          >
                            <a itemprop="url" href="/">
                              <span itemprop="name">Admin</span>
                            </a>
                          </span>
                        </p>
                        <div className="card-body p-0">
                          <h4
                            className="card-title text-5 font-weight-bold pb-1 mb-2"
                            itemprop="name"
                          >
                            <a
                              className="text-color-dark text-color-hover-primary text-decoration-none"
                              href="/interior-design-trends-for-the-new-year-2022/gl103980/"
                            >
                              Interior Design Trends for the New Year 2022
                            </a>
                          </h4>
                          <span className="d-none" itemprop="articleBody">
                            In this article, The interior designers &amp;
                            decorators in Chandigarh have compiled trends in
                            interior design for the new year 2022.
                          </span>
                          <p className="card-text mb-2">
                            In this article, The interior designers &amp;
                            decorators in Chandigarh have compiled trends in
                            inter....
                          </p>
                          <a
                            href="/interior-design-trends-for-the-new-year-2022/gl103980/"
                            className="btn btn-link font-weight-semibold text-decoration-none text-3 ps-0"
                          >
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-4">
                  <div className="row">
                    <div className="col-12">
                      <h3
                        className="text-color-secondary font-weight-bold text-transform-none text-6 mb-3 appear-animation"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="1000"
                      >
                        More Blog
                      </h3>
                      <article
                        className="appear-animation"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="1100"
                        itemscope
                        itemtype="https://schema.org/BlogPosting"
                        itemid="/bedroom-design-ideas-by-expert-interior-designers/gl103944/"
                      >
                        <div className="card border-0 border-radius-0 bg-transparent">
                          <div className="card-body bg-transparent p-0">
                            <span className="d-none" itemprop="headline">
                              Bedroom Design Ideas By Expert Interior Designers
                            </span>
                            <meta
                              itemprop="image"
                              content="https://glimageurl.golocall.com/golocal-post/image/876149_keystoneinteriordesign_1640684969.jpeg"
                            />
                            <p className="text-uppercase text-color-default text-1 pt-1 mb-2">
                              <time
                                itemprop="datePublished"
                                datetime="2021-12-28"
                              >
                                28th December, 2021
                              </time>
                              <span
                                className="d-none"
                                itemprop="locationCreated"
                              >
                                Mohali, Punjab
                              </span>
                              <span className="opacity-3 d-inline-block px-2">
                                |
                              </span>
                              by{" "}
                              <span
                                itemprop="author"
                                itemscope
                                itemtype="https://schema.org/Person"
                              >
                                <a itemprop="url" href="/">
                                  <span itemprop="name">Admin</span>
                                </a>
                              </span>
                            </p>
                            <div className="card-body p-0">
                              <h4
                                className="card-title text-5 font-weight-bold pb-1 mb-2"
                                itemprop="name"
                              >
                                <a
                                  className="text-color-dark text-color-hover-primary text-decoration-none"
                                  href="/bedroom-design-ideas-by-expert-interior-designers/gl103944/"
                                >
                                  Bedroom Design Ideas By Expert Interior
                                  Designers
                                </a>
                              </h4>
                              <span className="d-none" itemprop="articleBody">
                                Are you looking for a way to freshen up your
                                bedroom? Here are some helpful interior design
                                tips from expert interior designers in
                                Chandigarh for the room where it all happens.
                              </span>
                              <p className="card-text mb-2">
                                Are you looking for a way to freshen up your
                                bedroom? Here are some helpful interior design
                                tips fro....
                              </p>
                              <a
                                href="/bedroom-design-ideas-by-expert-interior-designers/gl103944/"
                                className="btn btn-link font-weight-semibold text-decoration-none text-3 ps-0"
                              >
                                READ MORE
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                      <hr />
                    </div>

                    <div className="col-12">
                      <article
                        className="appear-animation"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="1100"
                        itemscope
                        itemtype="https://schema.org/BlogPosting"
                        itemid="/is-it-time-to-hire-a-best-interior-designer-in-mohali/gl103921/"
                      >
                        <div className="card border-0 border-radius-0 bg-transparent">
                          <div className="card-body bg-transparent p-0">
                            <span className="d-none" itemprop="headline">
                              Is It Time To Hire A Best Interior Designer in
                              Mohali?
                            </span>
                            <meta
                              itemprop="image"
                              content="https://glimageurl.golocall.com/golocal-post/image/108383_keystoneinteriordesign_1640594211.jpeg"
                            />
                            <p className="text-uppercase text-color-default text-1 pt-1 mb-2">
                              <time
                                itemprop="datePublished"
                                datetime="2021-12-27"
                              >
                                27th December, 2021
                              </time>
                              <span
                                className="d-none"
                                itemprop="locationCreated"
                              >
                                Mohali, Punjab
                              </span>
                              <span className="opacity-3 d-inline-block px-2">
                                |
                              </span>
                              by{" "}
                              <span
                                itemprop="author"
                                itemscope
                                itemtype="https://schema.org/Person"
                              >
                                <a itemprop="url" href="/">
                                  <span itemprop="name">Admin</span>
                                </a>
                              </span>
                            </p>
                            <div className="card-body p-0">
                              <h4
                                className="card-title text-5 font-weight-bold pb-1 mb-2"
                                itemprop="name"
                              >
                                <a
                                  className="text-color-dark text-color-hover-primary text-decoration-none"
                                  href="/is-it-time-to-hire-a-best-interior-designer-in-mohali/gl103921/"
                                >
                                  Is It Time To Hire A Best Interior Designer in
                                  Mohali?
                                </a>
                              </h4>
                              <span className="d-none" itemprop="articleBody">
                                In this blog, you can know how the best interior
                                designer in Mohali can provide full-service
                                design for new construction and renovations?
                                Whereas interior decorators can only decorate a
                                space.
                              </span>
                              <p className="card-text mb-2">
                                In this blog, you can know how the best interior
                                designer in Mohali can provide full-service
                                design ....
                              </p>
                              <a
                                href="/is-it-time-to-hire-a-best-interior-designer-in-mohali/gl103921/"
                                className="btn btn-link font-weight-semibold text-decoration-none text-3 ps-0"
                              >
                                READ MORE
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                      <hr />
                    </div>

                    <div className="col-lg-4">
                      <div className="row"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </section>
        </div>
      </div>{" "}
      <Footer />
      <div className="quick-call-button">
        <div className="footerView-menu footerView-5-icons footerView-menu-center-icon">
          <a
            target="_blank"
            className="text-decoration-none"
            title="WhatsApp"
            href="https://api.whatsapp.com/send/?phone=91******9529&text=Hi%2C+need+more+information+about+%2AKeystone+Interior+Design%2A.+Please+contact+me."
            onclick="webClickActivity('10','Floating Footer WhatsApp','2')"
          >
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
          <a
            className="text-decoration-none"
            target="_blank"
            href="https://www.google.com/maps/dir//30.678820,76.742706/@30.678820,76.742706,17z/data=!4m8!1m7!3m6!1s0x0:0x0!2zNDDCsDQyJzM2LjAiTiA3M8KwNTcnNDcuOCJX!3b1!8m2!3d40.710005!4d-73.963269?hl=en-US"
            onclick="webClickActivity('10','Floating Footer Map','3')"
            className="nofocus"
          >
            <i className="material-icons-outlined">map</i>
            <span>Direction</span>
          </a>
          <a
            className="text-decoration-none active-navx"
            title="Mobile Number"
            onclick="webClickActivity('10','Floating Footer Call','1')"
            data-bs-toggle="modal"
            data-bs-target="#dialerConnectModal"
          >
            <i className="material-icons-outlined">phone</i>
            <span>Call</span>
          </a>{" "}
          <a className="text-decoration-none" href="/gallery/" title="Gallery">
            <i className="material-icons-outlined">photo_size_select_actual</i>
            <span>Gallery</span>
          </a>
          <a
            className="text-decoration-none"
            data-bs-toggle="modal"
            data-bs-target="#myModalCallBackRequest"
            title="Contact Us"
          >
            <i className="material-icons-outlined">message</i>
            <span>Contact Us</span>
          </a>
          <div className="clear"></div>
        </div>
      </div>
      <div
        id="dialerConnectModal"
        className="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="defaultModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="defaultModalLabel">
                CALL CONNECT
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-hidden="true"
              ></button>
            </div>
            <div className="modal-body">
              <form role="form" id="dialerRequestFormFooter" method="post">
                <span className="text-color-primary font-weight-semibold line-height-3 text-3 mb-0 px py-2">
                  Please provide your contact number to connect
                </span>
                <div className="card-content">
                  <div className="row">
                    <div className="col-md-6 px py-2">
                      <div className="form-group">
                        <input
                          type="number"
                          name="callConnectPhone"
                          placeholder="Please enter your contact number"
                          id="callConnectPhone"
                          className="form-control callConnectPhone"
                          required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 px py-2">
                      <div className="form-group label-floating">
                        <label className="control-label">URL</label>
                        <input
                          type="text"
                          name="callConnectURL"
                          id="callConnectURL"
                          className="form-control callConnectURL"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group px py-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-modern font-weight-bold text-3 px-5 py-3 callConnectButton"
                    data-loading-text="Loading..."
                  >
                    Call Connect →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
