import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "top 70%",
        end: "top center",
        once: true,
        duration: -1,
      },
    });

    tl.fromTo(
      ".sp-1",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl.fromTo(
      ".sp-2",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl.fromTo(
      ".sp-3",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl.fromTo(
      ".sp-4",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl.fromTo(
      ".sp-5",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          About Us - OM INTERIOR | Leading Interior Design & Sustainable
          Architecture in India
        </title>
        <meta
          name="description"
          content="Explore OM INTERIOR, India's premier firm for interior design, sustainable architecture, and civil engineering. Renowned for innovative designs and exceptional client service."
        />
        <meta
          name="keywords"
          content="OM INTERIOR, interior design India, sustainable architecture, civil engineering India, innovative design, modern interiors, top interior designers, eco-friendly design, Gurugram architecture, best interior design firm India, luxury interiors, residential design, commercial interiors, architectural excellence, design consultation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://om-interior.vercel.app/about" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="language" content="English" />
        <meta name="author" content="OM INTERIOR" />
        <meta name="document-type" content="Public" />
        <meta name="document-rating" content="Safe for Kids" />
        <meta name="expires" content="never" />
        <meta name="handheldfriendly" content="True" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Gurugram" />
        <meta
          name="geo.position"
          content="28.47002178030715, 77.00397228607972"
        />
        <meta name="ICBM" content="28.47002178030715, 77.00397228607972" />
        <meta
          name="address"
          content="C-33A, Surya Vihar Opposite Sector-4, Gurugram, Haryana 122001, India"
        />
        <meta
          name="google-site-verification"
          content="google606c1421732f2791"
        />
        <meta
          name="facebook-domain-verification"
          content="your_facebook_domain_verification_code"
        />
        <meta name="copyright" content="© 2024, OM INTERIOR" />
        <meta
          property="og:title"
          content="About Us - OM INTERIOR | Leading Interior Design & Sustainable Architecture in India"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://om-interior.vercel.app/about"
        />
        <meta
          property="og:description"
          content="Discover OM INTERIOR, India's top firm for innovative interior design, sustainable architecture, and civil engineering. Our excellence in design and client satisfaction sets us apart."
        />
        <meta property="og:site_name" content="OM INTERIOR" />
        <meta
          property="og:image"
          content="https://om-interior.vercel.app/path-to-your-og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - OM INTERIOR | Leading Interior Design & Sustainable Architecture in India"
        />
        <meta
          name="twitter:description"
          content="Explore OM INTERIOR, India's premier firm for interior design, sustainable architecture, and civil engineering. Renowned for innovative designs and exceptional client service."
        />
        <meta
          name="twitter:image"
          content="https://om-interior.vercel.app/path-to-your-twitter-image.jpg"
        />
      </Helmet>

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
                    <a href="/contact" className="text-[#0d6efd] font-bold">
                      contact us page
                    </a>
                  </span>
                  .
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section scroll-trigger border-0 pb-0 pb-lg-5 m-0">
          <div className="container my-lg-4">
            <div className="row pb-6">
              <div className="col"></div>
              <div className="socialShareButtonFooter py-4">
                <h6
                  className="text-color-primary sp-1 font-weight-semibold text-[#0d6efd] line-height-3 text-3 mb-2 appear-animation"
                  data-appear-animation="maskRight"
                  data-appear-animation-delay="500"
                >
                  <i className="fas fa-share-alt mr-2"></i> Share this page
                </h6>
                <div className="flex items-center gap-10 pl-6 text-xl">
                  <a href="" className="text-gray-800 sp-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="text-gray-800 sp-3">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="" className="text-gray-800 sp-4">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="" className="text-gray-800 sp-5">
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
