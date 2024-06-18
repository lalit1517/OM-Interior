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
  const [ptValue2, setPtValue2] = useState("25px");

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
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/") {
      setActiveItem("Home");
    } else if (pathname === "/about") {
      setActiveItem("About");
    } else if (pathname === "/interior-design") {
      setActiveItem("Service");
    }else if (pathname === "/turnkey-solutions") {
      setActiveItem("Service");
    }else if (pathname === "/construction-management") {
      setActiveItem("Service");
    }else if (pathname === "/gallery") {
      setActiveItem("Gallery");
    }else if (pathname === "/gallery-offices") {
      setActiveItem("Gallery");
    }else if (pathname === "/gallery-restaurants") {
      setActiveItem("Gallery");
    }else if (pathname === "/gallery-residentials") {
      setActiveItem("Gallery");
    } else if (pathname === "/contact") {
      setActiveItem("Contact");
    }
  }, [location.pathname]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const scrollDirection = currentScrollPos > prevScrollPos ? "down" : "up";

      const paddingChange = scrollDirection === "down" ? "1rem" : "1rem";

      const paddingChange2 = scrollDirection === "down" ? "25px" : "25px";

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
      <div className="navcontrol flex h-[85px] md:h-[92px] ">
        <header
          id="header"
          className={`fixed top-0 left-0 right-0 bg-white header-effect-shrink mb-0 z-[10000]`}
        >
          <div className="header-body header-body-bottom-border border-top-0 pb-0">
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
                                About
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
                                <ul
                                  style={{ paddingTop: `${ptValue2}` }}
                                  className="absolute mx-auto bg-white w-60 px-0 z-[10000] hover:bg-gray-800 rounded-b-lg text-center"
                                >
                                  <li className="hover:bg-gray-500 transition duration-150 ease-in-out">
                                    <a
                                      style={{
                                        borderTop: "4px solid",
                                        borderTopColor: "#0d6efd",
                                      }}
                                      href="/interior-design"
                                      className="nav-link text-gray-500 hover:text-gray-200 font-normal"
                                      onClick={() => handleItemClick("Service")}
                                    >
                                      Interior Design
                                    </a>
                                  </li>
                                  <div className="flex items-center justify-center">
                                    <li className="text-center h-[1px] w-5/6 bg-gray-300"></li>
                                  </div>
                                  <li className="hover:bg-gray-500 transition duration-150 ease-in-out">
                                    <a
                                      href="/turnkey-solutions"
                                      className="nav-link text-gray-500 hover:text-gray-200 font-normal"
                                      onClick={() => handleItemClick("Service")}
                                    >
                                      Turnkey Solutions
                                    </a>
                                  </li>
                                  <div className="flex items-center justify-center">
                                    <li className="text-center h-[1px] w-5/6 bg-gray-300"></li>
                                  </div>
                                  <li className="hover:bg-gray-500 transition duration-150 ease-in-out">
                                    <a
                                      href="/construction-management"
                                      className="nav-link text-gray-500 hover:text-gray-200 font-normal"
                                      onClick={() => handleItemClick("Service")}
                                    >
                                      Construction Management
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
                          >
                            <p className="w-fit mb-0">SERVICE</p>
                            <i
                              onClick={handleDropdownToggle2}
                              className="fas fa-chevron-down pl-auto"
                            ></i>
                          </Link>
                          {isDropdownOpen && (
                            <ul className="mx-6 bg-white px-0 z-[10000] hover:bg-gray-800 text-left">
                              <li className="hover:bg-gray-500 transition duration-150 ease-in-out">
                                <a
                                  href="/interior-design"
                                  className="nav-link text-[#0d6efd] hover:text-gray-200 font-normal"
                                  onClick={() => handleItemClick("Service")}
                                >
                                  Interior Design
                                </a>
                              </li>
                              <div className="flex items-center justify-center">
                                <li className="text-center h-[1px] w-full bg-gray-300"></li>
                              </div>
                              <li className="hover:bg-gray-500 transition duration-150 ease-in-out">
                                <a
                                  href="/turnkey-solutions"
                                  className="nav-link text-[#0d6efd] hover:text-gray-200 font-normal"
                                  onClick={() => handleItemClick("Service")}
                                >
                                  Turnkey Solutions
                                </a>
                              </li>
                              <div className="flex items-center justify-center">
                                <li className="text-center h-[1px] w-full bg-gray-300"></li>
                              </div>
                              <li className="hover:bg-gray-500 transition duration-150 ease-in-out">
                                <a
                                  href="/construction-management"
                                  className="nav-link text-[#0d6efd] hover:text-gray-200 font-normal"
                                  onClick={() => handleItemClick("Service")}
                                >
                                  Construction Management
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
