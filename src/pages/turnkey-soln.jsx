import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const TurnkeySoln = () => {
  return (
    <div>
      <Helmet>
        <title>Service - Turnkey Solutions</title>
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
        <link
          rel="canonical"
          href="https://ominterior.ind.in/turnkey-solutions"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Helmet>

      <Navbar />

      <div role="main" className="main bg-[#F2F2F2]">
        <section className="page-header page-header-modern page-header-lg bg-[#0f0d00] py-12 border-0 my-0">
          <div className="container my-3">
            <div className="row">
              <div className="col-md-12 align-self-center p-static order-2 text-center">
                <h1 className="font-bold text-10 text-white mb-0">Service</h1>
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

                  <div className="text-gray-400 font-medium">SERVICE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_details_area section_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="service_details_left">
                  <img
                    src="trunkey-solution.png"
                    alt="Service Details - Turnkey Solutions"
                  />
                  <h1 className="text-gray-800">Turnkey Solutions</h1>
                  <p className="text-gray-400">
                  Experience a hassle-free journey from project initiation to completion with our comprehensive turnkey solutions. Entrust us with the entire project scope, allowing you to focus on your core business activities while we handle the intricacies of design and construction.
                  </p>
                  <ul className="text-gray-400 pl-0">
                    <li className="text-gray-400">
                      <i className="fa fa-check-circle"></i> End-to-End Project Management: Seamless coordination from concept to completion.
                    </li>
                    <li className="text-gray-400">
                      <i className="fa fa-check-circle"></i> Efficiency and Peace of Mind: Let us handle the complexities, delivering a turnkey solution.

                    </li>
                    <li className="text-gray-400">
                      <i className="fa fa-check-circle"></i> Cost-Effective Approach: Maximizing value and minimizing disruptions for your business.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="border-[1px] border-gray-300 rounded-md mt-10 md:mt-0">
                  <div className="w-full text-center text-gray-800 font-medium px-4 pt-8 pb-4 text-xl">
                    Our Services
                  </div>
                  <div className="flex flex-col gap-8 py-10 px-12 md:px-6 lg:px-12">
                    <a
                      href="/interior-design"
                      className="flex text-gray-400 font-semibold no-underline items-center justify-between"
                    >
                      <div>Interior Design</div>
                      <div>
                        <i class="fa fa-angle-right"></i>
                      </div>
                    </a>
                    <a
                      href="/construction-management"
                      className="flex text-gray-400 font-semibold no-underline items-center justify-between"
                    >
                      <div>Construction Management</div>
                      <div>
                        <i class="fa fa-angle-right"></i>
                      </div>
                    </a>
                  </div>
                  <div className="flex gap-2 items-center justify-evenly bg-[#0d6efd] text-gray-800 px-6 sm:px-10 md:px-6 lg:px-12 2xl:px-16 py-10">
                  <div><svg className="w-6 h-6 lg:w-10 lg:h-10" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/></svg></div>
                  <div className="flex flex-col text-white gap-1">
                    <div>Contact with us</div>
                    <div className="text-3xl md:text-xl xl:text-3xl">+919818267341</div>
                  </div>
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

export default TurnkeySoln;
