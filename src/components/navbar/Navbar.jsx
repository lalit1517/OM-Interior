import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    // Update activeItem state based on the current pathname
    const pathname = location.pathname;
    if (pathname === "/") {
      setActiveItem("Home");
    } else if (pathname === "/about") {
      setActiveItem("About");
    } else if (pathname === "/service") {
      setActiveItem("Service");
    } else if (pathname === "/blog") {
      setActiveItem("Blog");
    } else if (pathname === "/gallery") {
      setActiveItem("Gallery");
    } else if (pathname === "/contact") {
      setActiveItem("Contact");
    }
  }, [location.pathname]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    console.log(itemName);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <header
        id="header"
        className="header-effect-shrink mb-4 z-[10000]"
        data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 85}"
      >
        <div className="header-body header-body-bottom-border border-top-0">
          <div className={`header-top header-top-bottom-containered-border pt-2 ${visible ? "" : "header-top-hidden"}`}>
            <div className="container">
              <div className="header-row flex w-full justify-between">
                <div className="header-column flex items-center">
                  <div className="header-row flex w-full items-center justify-between">
                    <ul className="header-social-icons flex gap-1 items-center mb-0 justify-between social-icons social-icons-clean social-icons-medium position-relative right-7">
                      <li className="social-icons-facebook">
                        <a
                          href="https://www.facebook.com/keystoneinteriordesign"
                          target="_blank"
                          className="w-10 h-10 no-underline hover:bg-[#1877F2] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                        >
                          <i className="icon fab fa-facebook-f "></i>
                        </a>
                      </li>{" "}
                      <li className="social-icons-twitter">
                        <a
                          href="https://twitter.com/Keystoneidesign"
                          target="_blank"
                          className="w-10 h-10 no-underline hover:bg-[#1DA1F2] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                        >
                          <i className="icon fab fa-twitter"></i>
                        </a>
                      </li>{" "}
                      <li className="social-icons-instagram">
                        <a
                          href="https://www.instagram.com/keystoneinterior"
                          target="_blank"
                          className="w-10 h-10 no-underline hover:bg-[#FCAF45] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                        >
                          <i className="icon fab fa-instagram"></i>
                        </a>
                      </li>{" "}
                      <li className="social-icons-linkedin">
                        <a
                          href="https://www.linkedin.com/company/keystone-interior"
                          target="_blank"
                          className="w-10 h-10 no-underline hover:bg-[#0077b5] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                        >
                          <i className="icon fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li className="social-icons-youtube">
                        <a
                          href="https://www.youtube.com/channel/UClN_l_ICNWbIdUjXzFEeMoQ"
                          target="_blank"
                          className="w-10 h-10 no-underline hover:bg-[#FF0000] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                        >
                          <i className="icon fab fa-youtube"></i>
                        </a>
                      </li>
                      <li className="social-icons-google">
                        <a
                          href="https://goo.gl/maps/KeA8fk4YjHAGWNjr7"
                          target="_blank"
                          className="w-10 h-10 no-underline hover:bg-[#34A853] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                        >
                          <i className="icon fab fa-google"></i>
                        </a>
                      </li>
                    </ul>
                    <ul className="nav nav-pills ">
                      <li className="nav-item">
                        <span className="header-top-opening-hours text-gray-500 px-0 font-weight-normal d-flex align-items-center">
                          {/* <i className="far fa-clock text-4 pr-1"></i> */}
                          Mon - Sat 11:00AM - 6:30PM
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-column justify-content-end">
                  <div className="header-row">
                    <a
                      href="https://www.keystoneinteriordesign.com/contact-us/"
                      target="_blank"
                      className="custom-header-top-btn-style-1 bg-gray-800 btn btn-secondary font-weight-bold px-4 px-sm-5 py-3"
                      style={{ backgroundColor: "#333" }}
                    >
                      Get Free Quote
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-300 mt-2 mb-4"></div>
            </div>
          </div>
          <div className="header-container container">
            <div className="header-row flex items-center justify-between">
              <div className="header-column">
                <div className="header-row">
                  <div className="header-logo">
                    <a className="text-decoration-none " href="/">
                      <img
                        src="logo.png"
                        className="img-fluid"
                        width="200"
                        height="100%"
                        alt="Keystone Interior Design  Interior Designers in Chandigarh,Interior Designers in Mohali,Interior Designers in Panchkula,Office interior designers in Mohali,Hospital interior designers in Chandigarh,Best interior designer in mohali"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="header-column justify-end">
                <div className="header-row flex">
                  <button
                    className="btn header-btn-collapse-nav lg:hidden"
                    id="navbar-toggle-btn"
                  >
                    <i className="fas fa-bars block lg:hidden"></i>
                  </button>
                  <div
                    className="header-nav header-nav-links hidden lg:flex"
                    id="navbar-links"
                  >
                    <div className="header-nav-main header-nav-main-text-capitalize header-nav-main-effect-2 header-nav-main-sub-effect-1">
                      <nav>
                        <ul className="nav nav-pills" id="mainNav">
                          <li>
                            <Link
                              to="/"
                              className={`nav-link font-medium hover:text-#0d6efd ${
                                activeItem === "Home"
                                  ? "text-[#0d6efd]"
                                  : "text-gray-800"
                              }`}
                              onClick={() => handleItemClick("Home")}
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about"
                              className={`nav-link font-medium hover:text-#0d6efd ${
                                activeItem === "About"
                                  ? "text-[#0d6efd]"
                                  : "text-gray-800"
                              }`}
                              onClick={() => handleItemClick("About")}
                            >
                              About Us
                            </Link>
                          </li>
                          <li
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <Link
                              to="#"
                              className={`nav-link font-medium hover:text-#0d6efd ${
                                activeItem === "Service"
                                  ? "text-[#0d6efd]"
                                  : "text-gray-800"
                              }`}
                              onClick={(e) => handleItemClick("Service", e)}
                            >
                              Service
                            </Link>
                            {isDropdownOpen && (
                              <ul className="absolute bg-white shadow-md px-0 border border-[#0d6efd] z-[10000] hover:bg-gray-800 py-2 text-center rounded-md">
                                <li className="hover:bg-gray-500 transition duration-150 ease-in-out">
                                  <a
                                    href="/service/residential/1g2076/"
                                    className="nav-link text-[#0d6efd] hover:text-gray-200 font-medium"
                                    title="RESIDENTIAL"
                                  >
                                    RESIDENTIAL
                                  </a>
                                </li>
                                <div className="flex items-center justify-center">
                                  <li className="text-center h-[1px] w-5/6 bg-gray-300"></li>
                                </div>
                                <li className="hover:bg-gray-500 transition duration-150 ease-in-out">
                                  <a
                                    href="/service/commercial/1g2077/"
                                    className="nav-link text-[#0d6efd] hover:text-gray-200 font-medium"
                                    title="COMMERCIAL"
                                  >
                                    COMMERCIAL
                                  </a>
                                </li>
                              </ul>
                            )}
                          </li>
                          <li>
                            <Link
                              to="/blog"
                              className={`nav-link font-medium hover:text-#0d6efd ${
                                activeItem === "Blog"
                                  ? "text-[#0d6efd]"
                                  : "text-gray-800"
                              }`}
                              onClick={() => handleItemClick("Blog")}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/gallery"
                              className={`nav-link font-medium hover:text-#0d6efd ${
                                activeItem === "Gallery"
                                  ? "text-[#0d6efd]"
                                  : "text-gray-800"
                              }`}
                              onClick={() => handleItemClick("Gallery")}
                            >
                              Gallery
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/contact"
                              className={`nav-link font-medium hover:text-#0d6efd ${
                                activeItem === "Contact"
                                  ? "text-[#0d6efd]"
                                  : "text-gray-800"
                              }`}
                              onClick={() => handleItemClick("Contact")}
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
