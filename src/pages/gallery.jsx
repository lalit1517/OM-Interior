import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {

  return (
    <div>
      <Navbar />

      <div role="main" className="main bg-[#F2F2F2]">
        <section className="page-header page-header-modern page-header-lg bg-[#0f0d00] py-12 border-0 my-0">
          <div className="container my-3">
            <div className="row">
              <div className="col-md-12 align-self-center p-static order-2 text-center">
                <h1 className="font-bold text-10 text-white">Photo Gallery</h1>
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

        <section>
          <div className="container py-16">
            <div className="masonry-loader masonry-loader-showing">
              <div
                className="row products product-thumb-info-list"
                data-plugin-masonry
                data-plugin-options="{'layoutMode': 'fitRows'}"
              >

                <div class="col-6 col-sm-6 col-lg-4 flex items-center">
                  <div class="hover-effect-3d relative group">
                    <Link target="_blank" to="/commercials">
                      <div class="thumb-info h-56 border rounded-lg thumb-info-no-borders overflow-hidden thumb-info-no-borders-rounded thumb-info-centered-info">
                        <div class="thumb-info-wrapper h-56 relative">
                          <img
                            src="./com.png"
                            class="img-fluid transition-transform duration-500 group-hover:scale-125"
                            alt="Living Room Design Gallery"
                          />
                          <div class="thumb-info-content hidden absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center group-hover:flex transition-opacity duration-600 ease-in-out">
                            <div class="thumb-info-title text-center font-bold text-[1.3rem] transition-all duration-500">
                              Commercials
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

                <div class="col-6 col-sm-6 col-lg-4 flex items-center">
                  <div class="hover-effect-3d  relative group">
                    <Link target="_blank" to="/restaurants">
                      <div class="thumb-info h-56 border rounded-lg thumb-info-no-borders overflow-hidden thumb-info-no-borders-rounded thumb-info-centered-info">
                        <div class="thumb-info-wrapper h-56 relative">
                          <img
                            src="./res-8.png"
                            class="img-fluid transition-transform duration-500 group-hover:scale-125"
                            alt="Living Room Design Gallery"
                          />
                          <div class="thumb-info-content hidden absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center group-hover:flex transition-opacity duration-600 ease-in-out">
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

                <div class="col-6 col-sm-6 col-lg-4 flex items-center">
                  <div class="hover-effect-3d  relative group">
                    <Link target="_blank" to="/restaurants">
                      <div class="thumb-info h-56 border rounded-lg thumb-info-no-borders overflow-hidden thumb-info-no-borders-rounded thumb-info-centered-info">
                        <div class="thumb-info-wrapper h-56 relative">
                          <img
                            src="./com.png"
                            class="img-fluid transition-transform duration-500 group-hover:scale-125"
                            alt="Living Room Design Gallery"
                          />
                          <div class="thumb-info-content hidden absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center group-hover:flex transition-opacity duration-600 ease-in-out">
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
