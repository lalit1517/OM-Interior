import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="footer-reveal bg-black text-white border-0 mt-0"
      >
        <div className="container container-xl-custom pt-4 pb-3">
          <div className="flex flex-col md:flex-row gap-8 justify-between py-5">
            <div className="md:max-w-[21%] mb-0">
              <h4 className="font-weight-bold ls-0 text-base lg:text-xl">
                OM INTERIOR
              </h4>
              <ul className="list list-unstyled mb-0">
                <li className="mb-1 text-gray-400 text-[0.9rem]">
                  OM INTERIOR is one of the growing and influential
                  architecture, interior design, civil engineering firm in
                  India...
                  <a
                    href="/about"
                    className="text-decoration-none text-gray-400"
                  >
                    Read More
                  </a>
                </li>
                <li className="mb-0"></li>
              </ul>
              <h4 className="font-weight-bold ls-0 mt-4 text-base lg:text-xl">
                Our Address
              </h4>
              <ul className="list list-unstyled mb-0 text-gray-400 text-[0.9rem]">
                <li className="mb-1">
                C-33A, SURYA VIHAR, OPPOSITE SECTOR-4
                </li>
                <li className="mb-1">Gurugram, 122001</li>
                <li className="mb-0">Haryana, INDIA</li>
              </ul>
            </div>
            <div className="w-fit mb-0">
              <h4 className="font-weight-bold ls-0 text-base lg:text-xl">
                Our Contacts
              </h4>
              <div className="feature-box feature-box-style-2 items-center mb-3 flex gap-2">
                <div className="feature-box-icon border p-2.5 rounded-full inline-flex items-center justify-center border-red-700 h-full bg-[#0d6efd]">
                  <i className="fas fa-phone text-base text-white"></i>
                </div>
                <div className="feature-box-info ps-2">
                  <p className="text-uppercase font-weight-semibold line-height-1 text-gray-400 text-[0.9rem] pb-0 mb-0">
                    CALL US NOW
                  </p>
                  <a
                    href="tel:+919149159468"
                    onclick="webClickActivity('10','Footer Call','1')"
                    className="text-uppercase text-white text-xl text-decoration-none text-5 font-weight-bold pb-0"
                  >
                    ******9468
                  </a>
                </div>
              </div>
              <div className="feature-box feature-box-style-2 items-center mb-3 flex gap-2">
                <div className="feature-box-icon px-2.5 py-2 border rounded-full inline-flex items-center justify-center border-red-700 h-full bg-[#0d6efd]">
                  <i className="fab fa-whatsapp text-xl text-white"></i>
                </div>
                <div className="feature-box-info ps-2">
                  <p className="text-uppercase font-weight-semibold line-height-1 text-gray-400 text-[0.9rem] pb-0 mb-0">
                    WHATSAPP
                  </p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=9149159468&text=Hi,+I+need+more+information+about+OM+Interior.+Please+contact+me."
                    target="_blank"
                    className="text-uppercase text-white text-xl text-decoration-none text-5 font-weight-bold pb-0"
                  >
                    ******9468
                  </a>
                </div>
              </div>
              <a
                href="/contact"
                className="btn btn-primary font-weight-bold px-5 py-3 mb-2"
              >
                CONTACT US
              </a>
            </div>
            <div className="w-fit">
              <h4 className="font-weight-bold ls-0 text-base lg:text-xl">
                About
              </h4>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a
                    className="text-decoration-none text-gray-400 text-[0.9rem]"
                    href="/about"
                    title="About Us"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none text-gray-400 text-[0.9rem]"
                    href="/contact"
                    title="Contact Us"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-fit lg:w-[13%]">
              <h4 class="font-weight-bold ls-0 text-base lg:text-xl">
                Follow Us
              </h4>
              <ul class="social-icons social-icons-clean flex gap-10 mt-3 mb-0 md:gap-2 pl-0 justify-between social-icons-medium">
                <li>
                  <a
                    className="text-gray-400 text-[0.9rem]"
                    href=""
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f opacity-75 hover:scale-150 hover:opacity-100 transition-all"></i>
                  </a>
                </li>{" "}
                <li className="flex items-center justify-center">
                  {" "}
                  <a
                    className="text-gray-400 text-[0.9rem]"
                    href=""
                    target="_blank"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-twitter-x h-3 w-4 opacity-75 hover:scale-150 hover:opacity-100 transition-all"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </div>
                  </a>
                </li>{" "}
                <li>
                  {" "}
                  <a
                    className="text-gray-400 text-[0.9rem]"
                    href=""
                    target="_blank"
                  >
                    <i class="fab fa-instagram opacity-75 hover:scale-150 hover:opacity-100 transition-all"></i>
                  </a>
                </li>{" "}
                <li>
                  {" "}
                  <a
                    className="text-gray-400 text-[0.9rem]"
                    href=""
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in opacity-75 hover:scale-150 hover:opacity-100 transition-all"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright bg-color-secondary">
          <div className="container container-xl-custom px-2.5">
            <div className="row opacity-[0.1]">
              <div className="col">
                <div className=" my-0 mb-4 bg-gray-200 h-[0.01rem]" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between py-0 mt-0 md:py-4 md:mt-2 text-gray-400 text-[0.9rem]">
              <div className="w-fit lg:w-1/2 lg:text-lg-start mb-3 mb-lg-0">
                <p className="text-3 mb-0">
                  OM INTERIOR. 
                </p>
              </div>
              <div className="w-fit text-right lg:w-1/2 lg:text-lg-end">
                &copy; 2024, made with <i className="fa fa-heart heart"></i>
              </div>
            </div>
            <div className="flex items-center justify-between py-0">
              <div className="w-full flex items-center justify-center md:justify-between text-left lg:w-1/2 lg:text-lg-start py-4 mb-lg-0">
                <p className="text-gray-400 text-[0.9rem] mb-0">
                  Interior Designers In Gurugram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
