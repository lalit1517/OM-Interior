import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "top 80%",
        end: "top center",
        once: true,
        duration: -1,
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-trigger2",
        start: "top 60%",
        once: true,
        duration: -1,
      },
    });

    tl.fromTo(
      ".title1",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl.fromTo(
      ".sub-title1",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl.fromTo(
      ".sub-title2",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl.fromTo(
      ".sub-title3",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl.fromTo(
      ".title2",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl.fromTo(
      ".sub-title11",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl.fromTo(
      ".sub-title22",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl.fromTo(
      ".map-view",
      { y: "5", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.4 }
    );

    tl2.fromTo(
      ".git",
      { x: "-50", opacity: 0 },
      { x: "0", opacity: 1, ease: "linear", duration: 0.5 }
    );

    tl2.fromTo(
      ".git2",
      { x: "-20", opacity: 0 },
      { x: "0", opacity: 1, ease: "linear", duration: 0.5 }
    );

    tl2.fromTo(
      ".sum",
      { y: "20", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.5 }
    );

    tl2.fromTo(
      ".contact-fill-form",
      { y: "20", opacity: 0 },
      { y: "0", opacity: 1, ease: "linear", duration: 0.5 }
    );
  }, []);

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      phone,
      email,
      subject,
      message,
    };

    console.log(formData);
    toggleConfirmation();

    try {
      const response = await axios.post(
        "https://om-interior-server.onrender.com/contact-form",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact - OM INTERIOR</title>
        <meta
          name="keywords"
          content="OM Interior, interior design, architecture, civil engineering, India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://om-interior.vercel.app/contact" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="language" content="English" />
        <meta name="author" content="ominteriors.com" />
        <meta name="document-type" content="Public" />
        <meta name="document-rating" content="Safe for Kids" />
        <meta name="Expires" content="never" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="geo.region" content="IN" />
        <meta name="State" content="Haryana" />
        <meta name="City" content="Gurugram" />
        <meta name="geo.position" content="28.47002178030715, 77.00397228607972" />
        <meta name="ICBM" content="28.47002178030715, 77.00397228607972" />
        <meta
          name="address"
          content="C-33A, SURYA VIHAR OPPOSITE SECTOR-4, GURUGRAM, HARYANA 122001, INDIA"
        />
        <meta
          name="google-site-verification"
          content="your_google_site_verification_code"
        />
        <meta
          name="facebook-domain-verification"
          content="your_facebook_domain_verification_code"
        />
        <meta name="Copyright" content="© 2024, https://om-interior.vercel.app" />
        <meta
          property="og:title"
          content="Contact - Om Interior | OM Interior is a growing architecture, interior design, and civil engineering firm in India..."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://om-interior.vercel.app/contact"
        />
        <meta
          property="og:description"
          content="OM Interior is a growing architecture, interior design, and civil engineering firm in India. We are renowned for our design excellence, innovation, and sustainability."
        />
        <meta property="og:site_name" content="OM INTERIOR" />
      </Helmet>

      <Navbar />

      <div role="main" className="main bg-[#F2F2F2]">
        <section className="page-header page-header-modern page-header-lg bg-[#0f0d00] py-12 border-0 my-0">
          <div className="container my-3">
            <div className="row">
              <div className="col-md-12 align-self-center p-static order-2 text-center">
                <h1 className="font-bold text-10 text-white">Contact</h1>
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

                  <div className="text-gray-400 font-medium">CONTACT</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-0 py-0 m-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="row scroll-trigger">
                  <div className="col-md-6">
                    <div className="pt-5 mt-5 hidden md:block">
                      <h2
                        className="font-bold title1 text-gray-800 text-[1.7rem] mb-4"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="300"
                      >
                        Get In Touch
                      </h2>
                      <div
                        className="appear-animation sub-title1"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="300"
                      >
                        <h3 className="font-bold text-gray-800 text-[1rem] mb-1">
                          Work Inquiries
                        </h3>
                        <a
                          href="tel:+919149159468"
                          onclick="webClickActivity('10','Contact Us Page Call','1')"
                          className="d-inline-block text-gray-400 text-[1rem] text-decoration-none mb-4"
                        >
                          ******9468
                        </a>
                      </div>
                      <div
                        className="appear-animation sub-title2"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="500"
                      >
                        <h3 className="font-bold text-gray-800 text-[1rem] mb-1">
                          WhatsApp Number
                        </h3>
                        <a
                          title="WhatsApp Number"
                          href="https://api.whatsapp.com/send/?phone=9149159468&text=Hi,+I+need+more+information+about+OM+Interior.+Please+contact+me."
                          target="_blank"
                          onclick="webClickActivity('10','Contact Us WhatsApp','2')"
                          className="d-inline-block text-gray-400 text-[1rem] text-decoration-none mb-4"
                        >
                          ******9468
                        </a>
                      </div>
                      <div
                        className="appear-animation sub-title3"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="700"
                      >
                        <h3 className="font-bold text-gray-800 text-[1rem] mb-1">
                          Assistance Hours
                        </h3>
                        <p className="text-gray-400 text-[1rem]">
                          Mon - Sat 11:00AM - 6:30PM
                        </p>
                      </div>
                    </div>
                    <div className="pt-[3.5rem] block md:hidden">
                      <h2
                        className="font-bold title1 text-gray-800 text-[1.7rem] mb-4"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="300"
                      >
                        Get In Touch
                      </h2>
                      <div
                        className="appear-animation sub-title1"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="300"
                      >
                        <h3 className="font-bold text-gray-800 text-[1rem] mb-1">
                          Work Inquiries
                        </h3>
                        <a
                          href="tel:+919149159468"
                          onclick="webClickActivity('10','Contact Us Page Call','1')"
                          className="d-inline-block text-gray-400 text-[1rem] text-decoration-none mb-4"
                        >
                          ******9468
                        </a>
                      </div>
                      <div
                        className="appear-animation sub-title2"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="500"
                      >
                        <h3 className="font-bold text-gray-800 text-[1rem] mb-1">
                          WhatsApp Number
                        </h3>
                        <a
                          title="WhatsApp Number"
                          href="https://api.whatsapp.com/send/?phone=9149159468&text=Hi,+I+need+more+information+about+OM+Interior.+Please+contact+me."
                          onclick="webClickActivity('10','Contact Us WhatsApp','2')"
                          className="d-inline-block text-gray-400 text-[1rem] text-decoration-none mb-4"
                        >
                          ******9468
                        </a>
                      </div>
                      <div
                        className="appear-animation sub-title3"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="700"
                      >
                        <h3 className="font-bold text-gray-800 text-[1rem] mb-1">
                          Assistance Hours
                        </h3>
                        <p className="text-gray-400 text-[1rem]">
                          Mon - Sat 11:00AM - 6:30PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="pt-5 mt-5 hidden md:block">
                      <h2
                        className="font-bold title2 text-gray-800 text-[1.7rem] mb-4"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="1100"
                      >
                        Post Address and Mail
                      </h2>
                      <div
                        className="appear-animation sub-title11"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="900"
                      >
                        <h3 className="font-bold text-gray-800 text-[1rem] mb-1">
                          Address
                        </h3>
                        <p className="text-gray-400 text-[1rem]">
                          C-33A, Surya Vihar, Opposite Sector-4, <br />
                          Gurugram, 122001
                          <br />
                          Haryana, INDIA
                        </p>
                      </div>
                      <div
                        className="appear-animation sub-title22"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="1100"
                      >
                        <h3 className="font-bold text-gray-800 text-[1rem] mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:lalitchauhan1517@gmail.com"
                          className="text-gray-400 text-[1rem] text-decoration-underline mb-4"
                        >
                          ******************************.com
                        </a>
                        <br />
                        <a
                          href="mailto:"
                          className="text-color-default text-color-hover-primary text-decoration-underline mb-4"
                        ></a>
                      </div>
                    </div>
                    <div className="pt-[2.3rem] block md:hidden">
                      <h2
                        className="font-bold title2 text-gray-800 text-[1.7rem] mb-4"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="1100"
                      >
                        Post Address and Mail
                      </h2>
                      <div
                        className="appear-animation sub-title11"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="900"
                      >
                        <h3 className="font-bold text-gray-800 text-[1rem] mb-1">
                          Address
                        </h3>
                        <p className="text-gray-400 text-[1rem]">
                        C-33A, Surya Vihar, Opposite Sector-4, <br />
                          Gurugram, 122001
                          <br />
                          Haryana, INDIA
                        </p>
                      </div>
                      <div
                        className="appear-animation sub-title22"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="1100"
                      >
                        <h3 className="font-bold text-gray-800 text-[1rem] mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:lalitchauhan1517@gmail.com"
                          className="text-gray-400 text-[1rem] text-decoration-underline mb-4"
                        >
                          ******************************.com
                        </a>
                        <br />
                        <a
                          href="mailto:"
                          className="text-color-default text-color-hover-primary text-decoration-underline mb-4"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-md-12 map-view">
                    <div className="py-5 my-5 hidden lg:block">
                      <iframe
                        itemprop="hasMap"
                        width="100%"
                        height="300"
                        style={{ border: "0", width: "100%" }}
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?q=28.47002178030715,77.00397228607972&hl=es;z=14&output=embed"
                      ></iframe>{" "}
                    </div>
                    <div className="pt-[3.5rem] pb-[4.5rem] md:pt-[3.5rem] md:pb-[5rem] block lg:hidden">
                      <iframe
                        itemprop="hasMap"
                        width="100%"
                        height="300"
                        style={{ border: "0", width: "100%" }}
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?q=28.47002178030715,77.00397228607972&hl=es;z=14&output=embed"
                      ></iframe>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section scroll-trigger2 bg-white border-0 py-0 m-0">
          <div className="container py-20">
            <div className="row pb-2 mb-4">
              <div className="col">
                <div className="d-flex text-left mb-2">
                  <div className="overflow-hidden flex items-center gap-3">
                    <div className="w-16 h-[3px] bg-[#0d6efd] git"></div>
                    <h2
                      className="text-[#0d6efd] font-bold text-[1.2rem] mb-0 git2"
                      data-appear-animation="maskRight"
                      data-appear-animation-delay="700"
                    >
                      GET IN TOUCH
                    </h2>
                  </div>
                </div>
                <h3
                  className="text-gray-800 text-[2rem] font-bold text-8 mb-0 appear-animation sum"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay="1200"
                >
                  Send Us a Message
                </h3>
              </div>
            </div>
            <div
              className="row appear-animation"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="900"
            >
              <div className="col">
                <form
                  className="contact-form custom-form-style-1 contact-fill-form"
                  method="POST"
                >
                  <div className="row row-gutter-sm">
                    <div className="form-group col-lg-6 mb-4">
                      <input
                        type="text"
                        data-msg-required="Please enter your name."
                        minlength="4"
                        maxlength="55"
                        className="w-full h-full shadow-inner text-[1rem] bg-gray-100 focus:shadow-inner border border-white rounded-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-[#0d6efd]"
                        name="footerName"
                        id="footerName"
                        required
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-6 mb-4">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        inputmode="numeric"
                        onKeyPress={(event) => {
                          const charCode = event.which
                            ? event.which
                            : event.keyCode;
                          if (
                            charCode > 31 &&
                            (charCode < 48 || charCode > 57)
                          ) {
                            event.preventDefault();
                          }
                        }}
                        data-msg-required="Please enter your phone number."
                        minlength="9"
                        maxlength="12"
                        className="w-full h-full shadow-inner text-[1rem] bg-gray-100 focus:shadow-inner border border-white rounded-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-[#0d6efd]"
                        name="footerPhone"
                        id="footerPhone"
                        required
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row row-gutter-sm">
                    <div className="form-group col-lg-6 mb-4">
                      <input
                        type="email"
                        data-msg-required="Please enter your email address."
                        data-msg-email="Please enter a valid email address."
                        maxlength="100"
                        className="w-full h-full shadow-inner text-[1rem] bg-gray-100 focus:shadow-inner border border-white rounded-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-[#0d6efd]"
                        name="footerEmail"
                        id="footerEmail"
                        required
                        placeholder="Your email address"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-6 mb-4">
                      <input
                        type="text"
                        data-msg-required="Please enter the subject."
                        minlength="6"
                        maxlength="100"
                        className="w-full h-full shadow-inner text-[1rem] bg-gray-100 focus:shadow-inner border border-white rounded-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-[#0d6efd]"
                        name="footerSubject"
                        id="footerSubject"
                        required
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col mb-4">
                      <textarea
                        minlength="12"
                        maxlength="450"
                        data-msg-required="Please enter your message."
                        rows="10"
                        className="w-full h-full shadow-inner text-[1rem] bg-gray-100 focus:shadow-inner border border-white rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-[#0d6efd]"
                        name="footerMessage"
                        id="footerMessage"
                        required
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row d-none">
                    <div className="form-group col pb-1 mb-3">
                      <input
                        type="text"
                        value=""
                        className="form-control footerURL"
                        name="footerURL"
                        id="footerURL"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                  <div className="row d-none">
                    <div className="form-group col pb-1 mb-3">
                      <input
                        type="text"
                        value="4"
                        className="form-control flagType"
                        name="flagType"
                        id="flagType"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col mb-4"></div>
                  <div className="row">
                    <div className="form-group col mb-0">
                      <button
                        type="submit"
                        className="btn btn-primary btn-modern font-weight-bold text-3 px-5 py-3"
                        data-loading-text="Loading..."
                        onClick={handleSubmit}
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 w-auto mx-2 sm:mx-0 flex items-center justify-center">
          <div className=" bg-gray-300 bg-blend-overlay px-2 py-6 sm:px-6 sm:py-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-center text-green-700">
              <FaCheckCircle className="mr-2" />
              <span className="font-medium text-xs sm:text-base">
                Your message has been sent.
              </span>
            </div>
            <p className="text-center text-xs sm:text-base mt-4">
              Please check your email for the confirmation.
            </p>
            <button
              className="ml-auto mt-2 font-semibold border border-[#0d6efd] text-xs sm:text-base text-[#0d6efd] bg-white shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64] py-1 px-2 sm:py-2 sm:px-4 rounded-full"
              onClick={toggleConfirmation}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
