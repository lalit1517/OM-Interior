import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <Navbar />

      <div role="main" className="main bg-[#F2F2F2]">
        <section className="page-header page-header-modern page-header-lg bg-[#0f0d00] py-12 border-0 my-0">
          <div className="container my-3">
            <div className="row">
              <div className="col-md-12 align-self-center p-static order-2 text-center">
                <h1 className="font-bold text-10 text-white">About Us</h1>
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

                  <div className="text-gray-400 font-medium">ABOUT US</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-0 pb-0 pt-12 m-0">
          <div className="container my-lg-4">
            <div className="row mb-4 pb-2">
              <div className="col"></div>
              <div className="flex flex-col gap-6 text-gray-400 leading-relaxed">
                <div>
                  OM INTERIOR is one of the growing and influential
                  architecture, interior design, civil engineering firm in
                  India. We are renowned for our design practice and our
                  steadfast commitment to design excellence innovation and
                  sustainability{" "}
                </div>
                <div>
                  The company has an in-house core team of professionals &
                  dedicated workforce to drive it on its path to success. The
                  company has had the privilege of being associated with some of
                  the leading architects and interior designers across India and
                  has had the opportunity to create exclusive interiors for a
                  wide variety of clients.
                </div>
                <div>
                  Our Partners and directors are design, technical and
                  management experts, together they form a holistic approach
                  that bolsters the design and construction process and
                  contributes to each project success.
                </div>
                <div>
                  <img src="about-us.png" alt="Om-Interiors/About-Us" />
                </div>
                <div className="font-semibold text-gray-800">Our Process:</div>
                <div>
                  We believe the best results stem from an ongoing dialogue with
                  all the stakeholders. There are no pre-established formula at
                  OM INTERIOR. We design and develop each project to meet
                  specific needs and conditions
                </div>
                <div className="font-semibold text-gray-800">
                  Business Relationship Team
                </div>
                <div>
                  <li>Strategy</li> <li>Marketing</li> <li>Client Servicing</li>
                </div>
                <div className="font-semibold text-gray-800">
                  Production & Installation
                </div>
                <div>
                  <li>PMC</li> <li>Quantity Surveying</li> <li>Procurement</li>{" "}
                  <li>Quality Management</li> <li>Site Supervisors</li>
                </div>
                <div className="font-semibold text-gray-800">
                  SUCCESSFUL PROJECT HIGHLIGHTS
                </div>
                <div>
                  <li>
                    Successful handover of 13 Aakash Byju’s Centre, 2 Shri Ram
                    School
                  </li>{" "}
                  <li>Timely completion and handover of 7 Taco Bell</li>{" "}
                  <li>
                    Successful handover of Decathlon store at Rajori Garden
                    Delhi
                  </li>{" "}
                  <li>
                    Renovation of Hitachi office at Ashok nagar Delhi, IHG at
                    cyber city Gurgaon
                  </li>{" "}
                  <li>
                    Successful completion and handover more then 8 residential
                    projects
                  </li>
                </div>
                <div>
                  If you desire to take the best services from our interior
                  designers in Gurugram, Delhi NCR. Feel free to contact and go
                  to on Om Interior's{" "}
                  <span>
                    <a href="/contact-us" className="text-[#0d6efd] font-bold">
                      contact us page
                    </a>
                  </span>
                  .
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-0 pb-0 pb-lg-5 m-0">
          <div className="container my-lg-4">
            <div className="row mb-4 pb-2">
              <div className="col"></div>
              <div className="socialShareButtonFooter py-4">
                <h6
                  className="text-color-primary font-weight-semibold text-[#0d6efd] line-height-3 text-3 mb-2 appear-animation"
                  data-appear-animation="maskRight"
                  data-appear-animation-delay="500"
                >
                  <i className="fas fa-share-alt"></i> Share this page
                </h6>
                <div className="flex items-center gap-10 pl-6 text-xl">
                  <a href="" className="text-gray-800">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="text-gray-800">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="" className="text-gray-800">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="" className="text-gray-800">
                    <i className="fab fa-linkedin"></i>
                  </a>
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

export default About;
