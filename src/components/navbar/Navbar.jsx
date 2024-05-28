import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [ptValue, setPtValue] = useState("1rem");
  const [ptValue2, setPtValue2] = useState("34px");

  const handleDropdownToggle = () => {
    setIsDropdownOpen2((prevState) => !prevState);
  };

  const handleDropdownToggle2 = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Gallery");

  useEffect(() => {
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const scrollDirection = currentScrollPos > prevScrollPos ? "down" : "up";

      const paddingChange = scrollDirection === "down" ? ".5rem" : "1rem";

      const paddingChange2 = scrollDirection === "down" ? "25px" : "33px";

      setPtValue(paddingChange);

      setPtValue2(paddingChange2);

      setVisible(currentScrollPos === 0);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <div className="navcontrol flex h-[206px] md:h-[183px] ">
        <header
          id="header"
          className={`fixed top-0 left-0 right-0 bg-white header-effect-shrink mb-0 z-[10000]`}
        >
          <div className="header-body header-body-bottom-border border-top-0 pb-0">
            <motion.div
              className="header-top navbar header-top-bottom-containered-border pt-2 pb-0"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: visible ? 0 : -50, opacity: visible ? 1 : 0 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeIn" }}
            >
              <AnimatePresence>
                {visible && (
                  <div className="container">
                    <div className={`header-row flex w-full justify-between`}>
                      <div className="header-column flex items-center">
                        <div className="header-row flex items-center justify-between">
                          <ul className="header-social-icons flex gap-1 items-center mb-0 justify-between social-icons social-icons-clean social-icons-medium position-relative right-7">
                            <li className="social-icons-facebook">
                              <a
                                href="https://www.facebook.com/keystoneinteriordesign"
                                target="_blank"
                                className="w-8 h-8 lg:w-10 lg:h-10 icons-list no-underline hover:bg-[#1877F2] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                              >
                                <i className="icon fab fa-facebook-f "></i>
                              </a>
                            </li>{" "}
                            <li className="social-icons-twitter">
                              <a
                                href="https://twitter.com/Keystoneidesign"
                                target="_blank"
                                className="w-8 h-8 lg:w-10 lg:h-10 icons-list no-underline hover:bg-[#000000] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  fill="currentColor"
                                  class="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                              </a>
                            </li>{" "}
                            <li className="social-icons-instagram">
                              <a
                                href="https://www.instagram.com/keystoneinterior"
                                target="_blank"
                                className="w-8 h-8 lg:w-10 lg:h-10 icons-list no-underline hover:bg-[#FCAF45] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                              >
                                <i className="icon fab fa-instagram"></i>
                              </a>
                            </li>{" "}
                            <li className="social-icons-linkedin">
                              <a
                                href="https://www.linkedin.com/company/keystone-interior"
                                target="_blank"
                                className="w-8 h-8 lg:w-10 lg:h-10 icons-list no-underline hover:bg-[#0077b5] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                              >
                                <i className="icon fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="social-icons-youtube">
                              <a
                                href="https://www.youtube.com/channel/UClN_l_ICNWbIdUjXzFEeMoQ"
                                target="_blank"
                                className="w-8 h-8 lg:w-10 lg:h-10 icons-list no-underline hover:bg-[#FF0000] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                              >
                                <i className="icon fab fa-youtube"></i>
                              </a>
                            </li>
                            <li className="social-icons-google">
                              <a
                                href="https://goo.gl/maps/KeA8fk4YjHAGWNjr7"
                                target="_blank"
                                className="w-8 h-8 lg:w-10 lg:h-10 icons-list no-underline hover:bg-[#34A853] text-[0.9rem] text-gray-800 hover:text-white border border-white rounded-full inline-flex items-center justify-center"
                              >
                                <i className="icon fab fa-google"></i>
                              </a>
                            </li>
                          </ul>
                          <ul className="nav nav-pills">
                            <li className="nav-item hidden md:block">
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

                    <div className="w-full h-[1px] bg-gray-300 mt-2 mb-2"></div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
            <div
              style={{
                paddingTop: `${ptValue}`,
                transition: "padding-top 0.7s ease",
              }}
              className="header-container container pb-3"
            >
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
                          alt="OM-INTERIOR-LOGO"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="header-column justify-end">
                  <div className="header-row flex">
                    <div className="block lg:hidden">
                      <button
                        onClick={handleDropdownToggle}
                        style={{ backgroundColor: "#0d6efd" }}
                        className="btn header-btn-collapse-nav block lg:hidden"
                        id="navbar-toggle-btn"
                      >
                        <i className="fas fa-bars block text-white lg:hidden"></i>
                      </button>
                    </div>
                    <div
                      className="header-nav header-nav-links hidden lg:flex"
                      id="navbar-links"
                    >
                      <div className="header-nav-main header-nav-main-text-capitalize header-nav-main-effect-2 header-nav-main-sub-effect-1">
                        <nav className="">
                          <ul className="nav nav-pills" id="mainNav">
                            <li>
                              <a
                                href="/"
                                className={`nav-link font-medium hover:text-#0d6efd ${
                                  activeItem === "Home"
                                    ? "text-[#0d6efd]"
                                    : "text-gray-800"
                                }`}
                                onClick={() => handleItemClick("Home")}
                              >
                                Home
                              </a>
                            </li>
                            <li>
                              <a
                                href="/about"
                                className={`nav-link font-medium hover:text-#0d6efd ${
                                  activeItem === "About"
                                    ? "text-[#0d6efd]"
                                    : "text-gray-800"
                                }`}
                                onClick={() => handleItemClick("About")}
                              >
                                About Us
                              </a>
                            </li>
                            <li
                              className="relative"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            >
                              <a
                                className={`nav-link cursor-pointer font-medium hover:text-#0d6efd ${
                                  activeItem === "Service"
                                    ? "text-[#0d6efd]"
                                    : "text-gray-800"
                                }`}
                              >
                                Service
                              </a>
                              {isDropdownOpen && (
                                <ul style={{paddingTop: `${ptValue2}`}} className="absolute bg-white px-0 z-[10000] hover:bg-gray-800 rounded-b-lg text-center">
                                  <li className="hover:bg-gray-500 transition duration-150 ease-in-out">
                                    <a
                                      style={{
                                        borderTop: "4px solid",
                                        borderTopColor: "#0d6efd",
                                      }}
                                      href="/service/residential/1g2076/"
                                      className="nav-link text-gray-500 hover:text-gray-200 font-normal"
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
                                      className="nav-link text-gray-500 hover:text-gray-200 font-normal"
                                      title="COMMERCIAL"
                                    >
                                      COMMERCIAL
                                    </a>
                                  </li>
                                </ul>
                              )}
                            </li>
                            <li>
                              <a
                                href="/gallery"
                                className={`nav-link font-medium hover:text-#0d6efd ${
                                  activeItem === "Gallery"
                                    ? "text-[#0d6efd]"
                                    : "text-gray-800"
                                }`}
                                onClick={() => handleItemClick("Gallery")}
                              >
                                Gallery
                              </a>
                            </li>
                            <li>
                              <a
                                href="/contact"
                                className={`nav-link font-medium hover:text-#0d6efd ${
                                  activeItem === "Contact"
                                    ? "text-[#0d6efd]"
                                    : "text-gray-800"
                                }`}
                                onClick={() => handleItemClick("Contact")}
                              >
                                Contact
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {isDropdownOpen2 && (
                <motion.div
                  className="header-nav header-nav-links flex flex-col mt-4 "
                  id="navbar-links"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "tween", duration: 1 }}
                >
                  <div className="header-nav-main header-nav-main-text-capitalize header-nav-main-effect-2 header-nav-main-sub-effect-1">
                    <nav>
                      <ul className="pl-0 mb-0 py-2">
                        <li>
                          <Link
                            to="/"
                            className={`nav-link border border-white rounded-md font-medium hover:text-#0d6efd ${
                              activeItem === "Home"
                                ? "bg-[#0d6efd] text-white"
                                : "bg-white text-[#0d6efd]"
                            }`}
                            onClick={() => handleItemClick("Home")}
                          >
                            HOME
                          </Link>
                        </li>
                        <li className="h-[1px] w-full bg-gray-300 "></li>
                        <li>
                          <Link
                            to="/about"
                            className={`nav-link border border-white rounded-md font-medium hover:text-#0d6efd ${
                              activeItem === "About"
                                ? "bg-[#0d6efd] text-white"
                                : "bg-white text-[#0d6efd]"
                            }`}
                            onClick={() => handleItemClick("About")}
                          >
                            ABOUT US
                          </Link>
                        </li>
                        <li className="h-[1px] w-full bg-gray-300 "></li>
                        <li className="relative">
                          <Link
                            style={{ display: "flex" }}
                            to="#"
                            className={`nav-link border flex items-center justify-between border-white rounded-md font-medium hover:text-#0d6efd ${
                              activeItem === "Service"
                                ? "bg-[#0d6efd] text-white"
                                : "bg-white text-[#0d6efd]"
                            }`}
                            onClick={(e) => handleItemClick("Service", e)}
                          >
                            <p className="w-fit mb-0">SERVICE</p>
                            <i
                              onClick={handleDropdownToggle2}
                              className="fas fa-chevron-down pl-auto"
                            ></i>
                          </Link>
                          {isDropdownOpen && (
                            <ul className="mx-6 bg-white px-0 z-[10000] hover:bg-gray-800 pb-2 text-left">
                              <li className="hover:bg-gray-500 transition duration-150 ease-in-out">
                                <a
                                  href="#"
                                  className="nav-link text-[#0d6efd] hover:text-gray-200 font-normal"
                                  title="RESIDENTIAL"
                                >
                                  RESIDENTIAL
                                </a>
                              </li>
                              <div className="flex items-center justify-center">
                                <li className="text-center h-[1px] w-full bg-gray-300"></li>
                              </div>
                              <li className="hover:bg-gray-500 transition duration-150 ease-in-out">
                                <a
                                  href="#"
                                  className="nav-link text-[#0d6efd] hover:text-gray-200 font-normal"
                                  title="COMMERCIAL"
                                >
                                  COMMERCIAL
                                </a>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li className="h-[1px] w-full bg-gray-300 "></li>
                        <li>
                          <Link
                            to="/gallery"
                            className={`nav-link border border-white rounded-md font-medium hover:text-#0d6efd ${
                              activeItem === "Gallery"
                                ? "bg-[#0d6efd] text-white"
                                : "bg-white text-[#0d6efd]"
                            }`}
                            onClick={() => handleItemClick("Gallery")}
                          >
                            GALLERY
                          </Link>
                        </li>
                        <li className="h-[1px] w-full bg-gray-300 "></li>
                        <li>
                          <Link
                            to="/contact"
                            className={`nav-link border border-white rounded-md font-medium hover:text-#0d6efd ${
                              activeItem === "Contact"
                                ? "bg-[#0d6efd] text-white"
                                : "bg-white text-[#0d6efd]"
                            }`}
                            onClick={() => handleItemClick("Contact")}
                          >
                            CONTACT
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
