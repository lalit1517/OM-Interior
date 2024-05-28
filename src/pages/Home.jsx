import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/footer";
import { Helmet } from "react-helmet";
import Loading from "../components/loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = (e) => {
      if (e.matches) {
        setLoading(true);
        const timer = setTimeout(() => {
          setLoading(false);
          setFadeIn(true);
        }, 1500);

        return () => clearTimeout(timer);
      } else {
        setLoading(false);
        setFadeIn(true);
      }
    };

    handleMediaChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!loading) {
      const mediaQuery = window.matchMedia("(min-width: 768px)");

      const handleMediaChange = (e) => {
        if (e.matches) {
          gsap.registerPlugin(ScrollTrigger);

          const tl = gsap.timeline({
            defaults: {
              opacity: 0,
              ease: "linear",
              duration: 1,
            },
          });

          const tl1 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger1",
              start: "top 60%",
              once: true,
              duration: -1,
            },
          });

          const tl111 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger11",
              start: "top 60%",
              once: true,
              duration: -1,
            },
          });

          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger",
              start: "top 80%",
              once: true,
              duration: -1,
            },
          });

          const tl3 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger2",
              start: "top 60%",
              once: true,
            },
          });

          const tl4 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger3",
              start: "top 75%",
              once: true,
            },
          });

          const tl5 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger4",
              start: "top 75%",
              once: true,
            },
          });

          const tl6 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger5",
              start: "top bottom",
              once: true,
            },
          });

          const tl7 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger6",
              start: "top 70%",
              once: true,
            },
          });

          const tl8 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger7",
              start: "top 70%",
              once: true,
            },
          });

          const tl9 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger8",
              start: "top 60%",
              once: true,
            },
          });

          const tl10 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger9",
              start: "top 60%",
              once: true,
            },
          });

          const tl11 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger10",
              start: "top 60%",
              once: true,
            },
          });

          const tl12 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-triggerlast",
              start: "top 60%",
              once: true,
            },
          });

          const tl13 = gsap.timeline({
            scrollTrigger: {
              trigger: ".scroll-trigger12",
              start: "top 90%",
              once: true,
            },
          });

          tl.fromTo(
            ".section1-part1",
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
            },
            0
          );

          tl.fromTo(
            ".section1-part2",
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
            },
            0.6
          );

          tl.fromTo(
            ".section1-part3",
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
            },
            1.2
          );

          tl1.fromTo(
            ".mobilesection2-part1",
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl1.fromTo(
            ".mobilesection2-part2",
            { x: -40, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl111.fromTo(
            ".mobilesection2-part3",
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl111.fromTo(
            ".mobilesection2-part4",
            { x: -40, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl2.fromTo(
            ".section2-part1",
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl2.fromTo(
            ".section2-part2",
            { x: -40, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl3.fromTo(
            ".section3-part1",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl3.fromTo(
            ".section3-part2",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            0.4
          );

          tl3.fromTo(
            ".section3-part3",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            0.5
          );

          tl4.fromTo(
            ".section3-part4",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            1
          );

          tl5.fromTo(
            ".section5-part1",
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl5.fromTo(
            ".section5-part2",
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 }
          );

          tl5.fromTo(
            ".section5-part3",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            1.2
          );

          tl5.fromTo(
            ".section5-part4",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            1.6
          );

          tl5.fromTo(
            ".section5-part5",
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 },
            2
          );

          tl6.fromTo(
            ".section5-part6",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            2
          );

          tl7.fromTo(
            ".section6-part1",
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl7.fromTo(
            ".section6-part2",
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 }
          );

          tl7.fromTo(
            ".section6-part3",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            1.6
          );

          tl7.fromTo(
            ".section6-part4",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            2
          );

          tl8.fromTo(
            ".section6-part5",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl9.fromTo(
            ".section7-part1",
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl9.fromTo(
            ".section7-part2",
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 }
          );

          tl9.fromTo(
            ".section7-part3",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            1.6
          );

          tl9.fromTo(
            ".section7-part4",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            2
          );

          tl9.fromTo(
            ".section7-part5",
            { x: -80, opacity: 0 },
            { x: 0, opacity: 1, ease: "linear", duration: 1 }
          );

          tl10.fromTo(
            ".section7-part6",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            0
          );

          tl10.fromTo(
            ".section7-part7",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            0.8
          );

          tl11.fromTo(
            ".section7-part8",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            1.2
          );

          tl11.fromTo(
            ".section7-part9",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            1.6
          );

          tl12.fromTo(
            ".section7-part10",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            2
          );

          tl12.fromTo(
            ".section7-part11",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            2.4
          );

          tl13.fromTo(
            ".section7-part12",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "linear", duration: 1 },
            3
          );
        }
      };

      handleMediaChange(mediaQuery);

      mediaQuery.addEventListener("change", handleMediaChange);

      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }
  }, [loading]);

  return (
    <div>
      <Helmet>
        <title>Home - OM INTERIOR</title>
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
        <link rel="canonical" href="https://om-interior.vercel.app" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="language" content="English" />
        <meta name="author" content="https://om-interior.vercel.app" />
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
          content="your_google_site_verification_code"
        />
        <meta
          name="facebook-domain-verification"
          content="your_facebook_domain_verification_code"
        />
        <meta
          name="copyright"
          content="© 2024, https://om-interior.vercel.app"
        />
        <meta
          property="og:title"
          content="Home - OM INTERIOR | Innovative Design & Sustainable Architecture"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://om-interior.vercel.app" />
        <meta
          property="og:description"
          content="OM INTERIOR is a top architecture, interior design, and civil engineering firm in India, known for our innovative designs, sustainability practices, and client satisfaction."
        />
        <meta property="og:site_name" content="OM INTERIOR" />
        <meta
          property="og:image"
          content="https://om-interior.vercel.app/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - OM INTERIOR | Innovative Design & Sustainable Architecture"
        />
        <meta
          name="twitter:description"
          content="Discover OM INTERIOR, a leading firm in innovative interior design, architecture, and civil engineering in India. Our commitment to excellence, sustainability, and client satisfaction sets us apart."
        />
        <meta
          name="twitter:image"
          content="https://om-interior.vercel.app/path-to-your-twitter-image.jpg"
        />
      </Helmet>

      <Navbar />

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="80vh"
        >
          <Loading size={160} thickness={4} />
        </Box>
      ) : (
        <div className={`animate ${fadeIn ? "fade-in" : ""}`}>
          <div className="body">
            <div role="main" className="main">
              <section>
                <div className="overflow-hidden bg-cover bg-[url('/home-main.png')]">
                  <div className="container z-index-1 ">
                    <div className="row justify-content-center justify-content-lg-start pt-5 mt-5">
                      <div className="col-md-10 col-lg-12 text-center text-lg-end pe-lg-4 pt-12 mt-10">
                        <h1 className="section1-part1 text-white font-semibold line-height-4 text-10 mb-2 appear-animation">
                          Experience the best of Luxury Services from us.
                          <span className="font-weight-extra-bold custom-highlight-1 ws-nowrap p-1"></span>
                        </h1>
                        <div className="appear-animation">
                          <p className="section1-part2 custom-font-secondary font-weight-light  custom-font-size-1 text-white opacity-[0.8] mb-4">
                            Create Unforgettable Memories With Our Designed
                            Properties
                          </p>
                        </div>
                        <a
                          href="/contact"
                          data-hash
                          data-hash-offset="150"
                          className="btn btn-secondary btn-modern section1-part3 font-weight-bold text-3 px-5 py-3 appear-animation"
                        >
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="relative w-[110%] right-[6%]">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 1920 576"
                      preserveAspectRatio="xMinYMin"
                    >
                      <path
                        className="w-[200%]"
                        d="M-12,66c13.35,40.03,28.35,72.62,41,97c12.78,24.63,30.56,58.44,62,97c19.57,24,36.66,40.31,49,52
                                c41.02,38.87,77.1,62.82,85,68c53.78,35.23,100.92,51.3,148,67c87.6,29.21,158.49,37.98,201,43c63.9,7.55,112.08,7.78,160,8
                                c16.52,0.08,84.41,0.17,181-8c98.88-8.36,172.43-20.7,233-31c42.88-7.29,141.31-24.85,267-56c127.06-31.5,220.66-61.69,296-86
                                c89.27-28.8,159.58-54.68,174-60c16.6-6.13,30.39-11.34,40-15c0,113.33,0,226.67,0,340c-644.33,0-1288.67,0-1933,0
                                C-9.33,410-10.67,238-12,66z"
                      />
                      <path
                        fill="#FFF"
                        d="M-5,3c1.21,5.32,2.98,13.29,5,23c4.38,21.08,6.71,34.95,8,42c7.08,38.6,19.7,71.54,26,88
                                c8.52,22.26,16.34,38.54,19,44c5.4,11.07,16.38,32.61,33,58c28.88,44.11,57.48,73.41,64,80c6.89,6.97,38.98,38.97,91,72
                                c57.09,36.25,106.11,53.37,143,66c66.98,22.93,119.93,31.44,162,38c81,12.63,143.81,13.53,189,14c62.45,0.65,109.33-2.68,156-6
                                c35.74-2.54,89.63-7.16,155-16c68.17-9.22,117.88-18.83,170-29c110.32-21.52,194.58-42.54,224-50c131.43-33.34,227.73-64.9,286-84
                                c93.88-30.77,155.18-54.57,184-66c6.29-2.49,11.48-4.58,15-6c0,102.67,0,205.33,0,308c-643.33,0-1286.67,0-1930,0C-5,387-5,195-5,3z
                                "
                      />
                    </svg>
                  </div>
                </div>
              </section>

              <div className="container flex md:hidden flex-col gap-16 mt-20">
                <div className="flex scroll-trigger1 items-center justify-between">
                  <div className="flex mobilesection2-part1 flex-col items-center justify-between gap-3 w-1/2">
                    <div>
                      <svg
                        fill="none"
                        height="25"
                        stroke="#212121"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="23 3 12 14 9 11" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-transform-none text-center text-gray-700 font-bold mb-0 text-lg ms-xl-2 mt-xl-0">
                        15+ Years of <br /> Experience
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="h-20 w-[2px] bg-gray-400 opacity-75"></div>
                  </div>

                  <div className="mobilesection2-part2 flex flex-col items-center justify-between gap-3 w-1/2">
                    <div>
                      <svg
                        fill="none"
                        height="25"
                        stroke="#212121"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="23 3 12 14 9 11" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-transform-none text-center text-gray-700 font-bold mb-0 text-lg ms-xl-2 mt-xl-0">
                        100+ Happy <br /> Customers
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="scroll-trigger11 flex items-center justify-between ">
                  <div className="mobilesection2-part3 flex flex-col items-center justify-between gap-3 w-1/2">
                    <div>
                      <svg
                        fill="none"
                        height="25"
                        stroke="#212121"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="23 3 12 14 9 11" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-transform-none text-center text-gray-700 font-bold mb-0 text-lg ms-xl-2 mt-xl-0">
                        50+ Projects <br /> Completed
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="h-20 w-[2px] bg-gray-400 opacity-75"></div>
                  </div>

                  <div className="mobilesection2-part4 flex flex-col items-center justify-between gap-3 w-1/2">
                    <div>
                      <svg
                        fill="none"
                        height="25"
                        stroke="#212121"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="23 3 12 14 9 11" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-transform-none text-center text-gray-700 font-bold mb-0 text-lg ms-xl-2 mt-xl-0">
                        10+ Team <br /> Members
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container my-10 pt-6 hidden md:block">
                <div className="scroll-trigger flex items-center justify-between gap-2">
                  <div className="section2-part1 flex items-center justify-center gap-1">
                    <div>
                      <svg
                        fill="none"
                        height="25"
                        stroke="#212121"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="23 3 12 14 9 11" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-transform-none text-gray-700 font-bold mb-0 text-xl ms-xl-2 mt-xl-0">
                        15+ Years of Experience
                      </h3>
                    </div>
                  </div>
                  <div className="flex section2-part1 items-center justify-center gap-1">
                    <div>
                      <svg
                        fill="none"
                        height="25"
                        stroke="#212121"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="23 3 12 14 9 11" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-transform-none text-gray-700 font-bold mb-0 text-xl ms-xl-2 mt-xl-0">
                        100+ Happy Customers
                      </h3>
                    </div>
                  </div>
                  <div className="flex section2-part2 items-center justify-center gap-1">
                    <div>
                      <svg
                        fill="none"
                        height="25"
                        stroke="#212121"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="23 3 12 14 9 11" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-transform-none text-gray-700 font-bold mb-0 text-xl ms-xl-2 mt-xl-0">
                        50+ Projects Completed
                      </h3>
                    </div>
                  </div>
                  <div className="flex section2-part2 items-center justify-center gap-1">
                    <div>
                      <svg
                        fill="none"
                        height="25"
                        stroke="#212121"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="23 3 12 14 9 11" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-transform-none text-gray-700 font-bold mb-0 text-xl ms-xl-2 mt-xl-0">
                        10+ Team Members
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <section class="section section-with-shape-divider border-0 bg-transparent m-0">
                <div class="container pvt-container py-16 my-16">
                  <div class="row justify-content-center scroll-trigger2 pb-2 mt-2 mb-10">
                    <div class="col-lg-9 text-center">
                      <h2 class="text-color-secondary section3-part1 font-bold text-3xl md:text-4xl mb-3 appear-animation text-gray-900">
                        What We Offer
                      </h2>
                      <p class="custom-font-secondary section3-part2 text-xl mb-4 appear-animation text-gray-400">
                        Services we Offer{" "}
                      </p>
                      <p class="mb-0 section3-part3 appear-animation text-gray-400">
                        We believe that everyone merit to be inspired by the
                        spaces in which they dwell. Intent Interior has been
                        transforming clients&rsquo; living and work spaces since
                        2010. We are a full-service interior design firm located
                        in the greater mohali and offer a wide variety of
                        services to all of our clients
                      </p>
                    </div>
                  </div>
                  <div class="scroll-trigger3 featured-boxes featured-boxes-style-4 custom-featured-boxes-style-1">
                    <div class="row justify-content-center section3-part4">
                      <div class="col-md-8 col-lg-4 mb-12 md:mb-0">
                        <div class="featured-box featured-box-primary featured-box-effect-5 appear-animation">
                          <div class="box-content text-center flex flex-col items-center">
                            <div class="custom-featured-icon-wrapper bg-primary w-fit p-8 border rounded-full mb-4">
                              <img
                                src="https://img.icons8.com/emoji/48/null/pine-decoration.png"
                                class="img-fluid icon-featured"
                                alt="Om-Interior/Home Page - What we Offer - card1"
                              />
                            </div>
                            <h3 class="text-transform-none font-weight-bold custom-font-size-1 mb-3 text-gray-800">
                              Interior Design
                            </h3>
                            <p class="px-3 mb-0 text-gray-400">
                              We are providing interior design services with a
                              dedicated team of professional interior designers
                              along with well-trained and implementers who help
                              bring designs into reality. Our scope of work
                              includes both interior and execution the design
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-8 col-lg-4 mb-12 md:mb-0">
                        <div class="featured-box featured-box-primary featured-box-effect-5 appear-animation">
                          <div class="box-content text-center flex flex-col items-center">
                            <div class="custom-featured-icon-wrapper bg-primary w-fit p-8 border rounded-full mb-4">
                              <img
                                src="https://img.icons8.com/fluency/48/null/planning-skill.png"
                                class="img-fluid icon-featured"
                                alt="Om-Interior/Home Page - What we Offer - card2"
                              />
                            </div>
                            <h3 class="text-transform-none font-weight-bold custom-font-size-1 mb-3 text-gray-800">
                              Interior Design
                            </h3>
                            <p class="px-3 mb-0 text-gray-400">
                              We are providing interior design services with a
                              dedicated team of professional interior designers
                              along with well-trained and implementers who help
                              bring designs into reality. Our scope of work
                              includes both interior and execution the design
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-8 col-lg-4">
                        <div class="featured-box featured-box-primary featured-box-effect-5 appear-animation">
                          <div class="box-content text-center flex flex-col items-center">
                            <div class="custom-featured-icon-wrapper bg-primary w-fit p-8 border rounded-full mb-4">
                              <img
                                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-woodwork-diy-flaticons-lineal-color-flat-icons.png"
                                class="img-fluid icon-featured"
                                alt="Om-Interior/Home Page - What we Offer - card3"
                              />
                            </div>
                            <h3 class="text-transform-none font-weight-bold custom-font-size-1 mb-3 text-gray-800">
                              Interior Design
                            </h3>
                            <p class="px-3 mb-0 text-gray-400">
                              We are providing interior design services with a
                              dedicated team of professional interior designers
                              along with well-trained and implementers who help
                              bring designs into reality. Our scope of work
                              includes both interior and execution the design
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="whoweare"
                class="section section-with-shape-divider bg-transparent border-0 m-0"
              >
                <div class="container pvt-container-2 py-5 my-4">
                  <div class="row scroll-trigger4 align-items-center mb-4">
                    <div class="col-lg-5 mb-5 mb-lg-0">
                      <div class="d-flex align-items-center mb-1">
                        <div className="overflow-hidden flex items-center gap-3">
                          <div className="w-12 h-[3px] bg-[#0d6efd] section5-part1 git"></div>
                          <h2 className="text-[#0d6efd] section5-part2 font-semibold text-[1.2rem] mb-0 git2">
                            About Us
                          </h2>
                        </div>
                      </div>
                      <h2 class="text-[#text-gray-900] section5-part3 font-bold text-transform-none line-height-2 text-3xl md:text-4xl mb-4 appear-animation">
                        The Best Interior Designer{" "}
                      </h2>
                      <p class="custom-font-secondary text-lg section5-part4 font-normal mb-4 appear-animation text-gray-400">
                        Keystone established in 2015, founded by Mr. Abhimanyu
                        Poonia. The organization works with the sole intention
                        to help people in making property interior designs
                        according to their preferences. We provide essential
                        commercial and residential interior designers in
                        Chandigarh, Mohali, Panchkula (Tricity). Keystone has
                        also done some significant projects in Zirakpur and many
                        major cities.We have carried out successful projects in
                        Tricity and transformed many offices, hotels, houses,
                        restaurants, stores, malls into much more alluring and
                        glamorous.{" "}
                      </p>
                      <div className="section5-part6 scroll-trigger5">
                        <a
                          href="/about"
                          class="btn btn-primary btn-modern font-weight-bold text-3 px-5 py-3 appear-animation"
                        >
                          READ MORE
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-10 col-lg-6 offset-sm-1 ps-sm-5 ps-lg-0">
                      <div class="position-relative">
                        <div>
                          <img
                            src="https://glimageurl.golocall.com/gl-features/737892_keystoneinteriordesign_1676335655.jpeg"
                            class="img-fluid section5-part5 custom-box-shadow-1 appear-animation"
                            alt="Om-Interior/Home Page - About"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div class="shape-divider shape-divider-bottom">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1920 102"
                  preserveAspectRatio="xMinYMin"
                >
                  <path
                    fill="#F7F7F7"
                    d="M1895,78c-56.71-6.03-113.75-12.1-167-17c-75.42-6.94-133.81-10.66-171-13c-62.1-3.91-108.85-5.97-155-8
								c-35.96-1.58-78.06-3.42-133-5c-59.81-1.72-103.18-2.23-172-3c-92.17-1.03-154.41-1.01-169-1c-69.05,0.05-115.16,0.67-137,1
								c-43.08,0.65-76.21,1.48-97,2c-28.02,0.7-71.13,1.8-128,4c-16.64,0.64-57.72,2.28-111,5c-26.12,1.33-67.11,3.45-121,7
								c-21.14,1.39-54.21,3.59-96,7c-19.93,1.63-39.22,3.32-47,4c-16.12,1.41-33.55,2.94-55,5c-26.48,2.54-19.07,2.04-77,8
								c-19.39,1.99-36.94,3.77-60.59,7.46V103H1923V81C1916.55,80.3,1906.82,79.26,1895,78z"
                  />
                </svg>
              </div>

              <section class="section border-0 m-0 bg-[#f7f7f7]">
                <div class="container pvt-container2 py-20">
                  <div class="row">
                    <div class="col-lg-8 scroll-trigger6">
                      <div class="d-flex align-items-center mb-1">
                        <div className="overflow-hidden flex items-center gap-3">
                          <div className="w-12 h-[3px] bg-[#0d6efd] section6-part1 git"></div>
                          <h2 className="text-[#0d6efd] font-semibold section6-part2 text-[1.2rem] mb-0 git2">
                            Our Process
                          </h2>
                        </div>
                      </div>
                      <h3 class="text-color-secondary font-bold section6-part3 text-transform-none text-gray-900 text-6 mb-3 pb-1 appear-animation">
                        We have revolutionized Interior Design Company in the
                        Tricity Since 2010
                      </h3>
                      <p class="mb-4 appear-animation section6-part4 text-gray-400">
                        Keystone Interior Design is the leading luxury interior
                        platform of choice in the Tricity Region. We change the
                        way people design and create their interior spaces by
                        setting new trends. An award-winning enterprise, Our
                        Team has been hailed as providing clients with the
                        latest cutting edge technology from discovery to
                        purchase through customized solutions to suit the client
                        needs. We offer an unparalleled service and product
                        offering through exceptional customer service.
                      </p>
                    </div>
                  </div>
                  <div class="scroll-trigger7 section6-part5 row align-items-center justify-content-center pvt-container3 py-12">
                    <div class="col-lg-7 pe-lg-5 mb-5 mb-lg-0">
                      <div class="accordion custom-accordion-style-1 appear-animation flex flex-col gap-4">
                        <div className="border bg-white text-gray-800 hover:text-[#0d6efd] font-bold text-xl border-white rounded-lg py-4 px-6">
                          <div className="flex items-center">
                            <div>1 - Meet & Agree</div>
                          </div>
                        </div>

                        <div className="border bg-white text-gray-800 hover:text-[#0d6efd] font-bold text-xl border-white rounded-lg py-4 px-6">
                          <div className="flex items-center">
                            <div>2 - Idea & Concept</div>
                          </div>
                        </div>

                        <div className="border bg-white text-gray-800 hover:text-[#0d6efd] font-bold text-xl border-white rounded-lg py-4 px-6">
                          <div className="flex items-center">
                            <div>3 - Build & Install</div>
                          </div>
                        </div>

                        <div className="border bg-white text-gray-800 hover:text-[#0d6efd] font-bold text-xl border-white rounded-lg py-4 px-6">
                          <div className="flex items-center">
                            <div>4 - Reality Delivered</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-9 col-lg-5 ps-sm-5">
                      <div class="position-relative">
                        <div
                          data-plugin-float-element
                          data-plugin-options="{'startPos': 'top', 'speed': 0.2, 'transition': true, 'transitionDuration': 1000, 'isInsideSVG': true}"
                        >
                          <img
                            src="https://glimageurl.golocall.com/gl-features/548049_keystoneinteriordesign_1676335943.jpeg"
                            class="img-fluid custom-box-shadow-1 appear-animation"
                            data-appear-animation="fadeInUpShorter"
                            data-appear-animation-delay="1200"
                            alt="Om-Interior/Home Page - Process"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="whoweare"
                class="section bg-transparent border-0 m-0"
              >
                <div class="container py-5 my-5">
                  <div class="scroll-trigger8 row align-items-center mb-4">
                    <div class="col-lg-5 mb-5 mb-lg-0">
                      <div class="position-relative">
                        <div>
                          <img
                            src="https://glimageurl.golocall.com/gl-features/950990_keystoneinteriordesign_1676343440.jpeg"
                            alt="Om-Interior/Home Page - Best Interior Designer"
                            className="section7-part5"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-10 col-lg-6 offset-sm-1 ps-sm-5 ps-lg-0">
                      <div class="d-flex align-items-center mb-1">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-[3px] bg-[#0d6efd] section7-part1 git"></div>
                          <h2 className="text-[#0d6efd] font-semibold section7-part2 text-[1.1rem] md:text-[1.2rem] mb-0 git2">
                            We Create Value For Your Objects With Designs
                          </h2>
                        </div>
                      </div>
                      <h3 class="text-gray-900 font-bold section7-part3 text-transform-none line-height-2 text-3xl md:text-4xl mb-6 appear-animation">
                        Best Interior Designer That you will love to Meet
                      </h3>
                      <p class="mb-4 section7-part4 appear-animation text-gray-400">
                        Keystone Interior Designer is one of the finest Interior
                        company in Chandigarh Mohali Panchkula and we&rsquo;re
                        always committed to serving our customers with the best
                        of Interior solutions.
                      </p>

                      <div class="marker-box scroll-trigger9">
                        <h4 class="text-color-secondary section7-part6 font-weight-semibold line-height-3 text-5 mb-1 appear-animation">
                          Design Consultation
                        </h4>
                        <p class="mb-4 appear-animation section7-part7 text-gray-400">
                          Designing functional and aesthetic spaces which
                          reflect the style quotient &amp; lifestyle of the
                          people residing and working in them. Designs made to
                          revive the soul of your philosophy.
                        </p>
                      </div>
                      <div class="marker-box scroll-trigger10">
                        <h4 class="text-color-secondary section7-part8 font-weight-semibold line-height-3 text-5 mb-1 appear-animation">
                          Turnkey Solutions
                        </h4>
                        <p class="mb-4 appear-animation section7-part9 text-gray-400">
                          Comprehensive implementation of all civil and design
                          schemes such as planning specific lighting and
                          plumbing schemes, flooring layouts, woodwork, false
                          ceiling and more.
                        </p>
                      </div>
                      <div class="marker-box scroll-triggerlast">
                        <h4 class="text-color-secondary section7-part10 font-weight-semibold line-height-3 text-5 mb-1 appear-animation">
                          Valuation Services for Property
                        </h4>
                        <p class="mb-8 appear-animation section7-part11 text-gray-400">
                          Inhouse valuation experts value the property based on
                          the recent sale, rental trends, listings and govt
                          rates and data from sub-registrar records. Both
                          comparable and rental yield based approach taken at
                          non speculative valuation.
                        </p>
                      </div>

                      <div className="scroll-trigger12 section7-part12">
                        <a
                          href="/contact"
                          class="btn  btn-primary btn-modern font-weight-bold  text-3 px-5 py-3 appear-animation"
                        >
                          Meet Us{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-6 bg-blue-600"></div>
              </section>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
