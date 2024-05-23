import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Helmet } from "react-helmet";

import photos from "../components/photos";

const Office = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        opacity: 0,
        ease: "linear",
        duration: 1,
      },
    });

    tl.fromTo(
      ".offices",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
      }
    );
  }, []);

  const [index, setIndex] = useState(-1);

  return (
    <div>
      <Helmet>
        <title>Gallery - OM INTERIOR</title>
        <meta
          name="keywords"
          content="OM Interior, interior design, architecture, civil engineering, India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://om-interior.vercel.app/gallery-offices" />
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
          content="Gallery - Om Interior | OM Interior is a growing architecture, interior design, and civil engineering firm in India..."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://om-interior.vercel.app/gallery-offices"
        />
        <meta
          property="og:description"
          content="OM Interior is a growing architecture, interior design, and civil engineering firm in India. We are renowned for our design excellence, innovation, and sustainability."
        />
        <meta property="og:site_name" content="OM INTERIOR" />
      </Helmet>

      {index === -1 && <Navbar />}

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

        <section className="py-16 md:py-20">
          <div class="container offices">
            <PhotoAlbum
              photos={photos}
              layout="rows"
              targetRowHeight={150}
              onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
              slides={photos}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              // enable optional lightbox plugins
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Office;
