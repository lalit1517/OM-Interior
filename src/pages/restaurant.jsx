import React, { useState, useEffect, useRef } from "react";
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
import photos2 from "../components/photos2";
import { Helmet } from "react-helmet";

const Restaurant = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        opacity: 0,
        ease: "linear",
        duration: 1,
      },
    });

    tl.fromTo(
      ".restaurants",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
      }
    );
  }, []);

  const [index, setIndex] = useState(-1);

  return (
    <div className="restaurant-gallery">
      
      <Helmet>
        <title>Restaurant Photo Gallery - OM INTERIOR</title>
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
        <link rel="canonical" href="https://ominterior.ind.in/gallery-restaurants" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Helmet>

      {index === -1 && <Navbar />}

      <div role="main" className="main bg-[#F2F2F2]">
        <section className="page-header page-header-modern page-header-lg bg-[#0f0d00] py-12 border-0 my-0">
          <div className="container my-3">
            <div className="row">
              <div className="col-md-12 align-self-center p-static order-2 text-center">
                <h1 className="font-bold text-10 text-white mb-0">Photo Gallery</h1>
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

                  <div className="text-gray-400 font-medium">GALLERY</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div class="container restaurants">
            <PhotoAlbum
              photos={photos2}
              layout="rows"
              targetRowHeight={150}
              onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
              slides={photos2}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Restaurant;
