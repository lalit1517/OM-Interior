import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";

const Gallery = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        opacity: 0,
        ease: "linear",
        duration: 0.7,
      },
    });

    tl.fromTo(
      ".gallery-card1",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
      }
    );

    tl.fromTo(
      ".gallery-card2",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
      }
    );

    tl.fromTo(
      ".gallery-card3",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
      }
    );
  }, []);

  return (
    <div>
      <Helmet>
        <title>Gallery - OM INTERIOR</title>
        <meta
          name="description"
          content="OM INTERIOR is one of the growing and influential
                  architecture, interior design, civil engineering firm in
                  India. We are renowned for our design practice and our
                  steadfast commitment to design excellence innovation and
                  sustainability"
        />
        <meta
          name="keywords"
          content="OM Interior, interior design, architecture, civil engineering, sustainable design, India, Gurugram, innovative interiors, design excellence"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ominterior.ind.in/gallery" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Helmet>

      <Navbar />

      <div role="main" className="main bg-[#F2F2F2]">
        <section className="page-header page-header-modern page-header-lg bg-[#0f0d00] py-12 border-0 my-0">
          <div className="container my-3">
            <div className="row">
              <div className="col-md-12 align-self-center p-static order-2 text-center">
                <h1 className="font-bold text-10 text-white mb-0">Photo Gallery</h1>
              </div>
              <div className="w-full flex items-center justify-center text-[0.9rem]">
                <div className=" flex items-center gap-2 text-center">
                  <div>
                    <a
                      className="text-decoration-none font-medium text-white"
                      href="/"
                    >
                      HOME
                    </a>
                  </div>
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    className="text-[0.5rem] font-bold text-gray-400"
                  />

                  <div className="text-gray-400 font-medium">PHOTO GALLERY</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container">
            <div className="masonry-loader masonry-loader-showing">
              <div
                className="row products product-thumb-info-list"
                data-plugin-masonry
                data-plugin-options="{'layoutMode': 'fitRows'}"
              >
                <div class="col-6 col-sm-6 col-lg-4 flex items-center gallery-card1">
                  <div class="hover-effect-3d relative group">
                    <Link to="/gallery-offices">
                      <div class="thumb-info md:h-56 border rounded-lg thumb-info-no-borders overflow-hidden thumb-info-no-borders-rounded thumb-info-centered-info">
                        <div class="thumb-info-wrapper md:h-56 relative">
                          <img
                            src="./com.png"
                            class="img-fluid transition-transform duration-500 group-hover:scale-125"
                            alt="Offices Design Gallery"
                          />
                          <div class="thumb-info-content hidden absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-center group-hover:flex transition-opacity duration-600 ease-in-out">
                            <div class="thumb-info-title text-center font-bold text-[1.3rem] transition-all duration-500">
                              Offices
                            </div>
                            <div class="thumb-info-action absolute top-0 right-0 bg-[#0d6efd] rounded-bl-md h-10 w-10 flex justify-center animate-fade-out-top-right animate-fade-in-top-right items-center transition-opacity duration-500 ease-in-out">
                              <div class="w-full h-full flex items-center justify-center">
                                <i class="fas fa-plus text-white transition-all duration-500"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div class="col-6 col-sm-6 col-lg-4 flex items-center gallery-card2">
                  <div class="hover-effect-3d  relative group">
                    <Link to="/gallery-restaurants">
                      <div class="thumb-info md:h-56 border rounded-lg thumb-info-no-borders overflow-hidden thumb-info-no-borders-rounded thumb-info-centered-info">
                        <div class="thumb-info-wrapper md:h-56 relative">
                          <img
                            src="./res-6.png"
                            class="img-fluid transition-transform duration-500 group-hover:scale-125"
                            alt="Restaurants Design Gallery"
                          />
                          <div class="thumb-info-content hidden absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-center group-hover:flex transition-opacity duration-600 ease-in-out">
                            <div class="thumb-info-title text-center font-bold text-[1.3rem] transition-all duration-500">
                              Restaurants
                            </div>
                            <div class="thumb-info-action absolute top-0 right-0 bg-[#0d6efd] rounded-bl-md h-10 w-10 flex justify-center animate-fade-out-top-right animate-fade-in-top-right items-center transition-opacity duration-500 ease-in-out">
                              <div class="w-full h-full flex items-center justify-center">
                                <i class="fas fa-plus text-white transition-all duration-500"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div class="col-6 col-sm-6 col-lg-4 flex items-center pt-8 md:pt-12 lg:pt-0 gallery-card3">
                  <div class="hover-effect-3d  relative group">
                    <Link to="/gallery-residentials">
                      <div class="thumb-info md:h-56 border border-transparent rounded-lg thumb-info-no-borders overflow-hidden thumb-info-no-borders-rounded thumb-info-centered-info">
                        <div class="thumb-info-wrapper md:h-56 relative">
                          <img
                            src="./com.png"
                            class="img-fluid transition-transform duration-500 group-hover:scale-125"
                            alt="Residentials Design Gallery"
                          />
                          <div class="thumb-info-content hidden absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-center group-hover:flex transition-opacity duration-600 ease-in-out">
                            <div class="thumb-info-title text-center font-bold text-[1.3rem] transition-all duration-500">
                              Residentials
                            </div>
                            <div class="thumb-info-action absolute top-0 right-0 bg-[#0d6efd] rounded-bl-md h-10 w-10 flex justify-center animate-fade-out-top-right animate-fade-in-top-right items-center transition-opacity duration-500 ease-in-out">
                              <div class="w-full h-full flex items-center justify-center">
                                <i class="fas fa-plus text-white transition-all duration-500"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
