import React, { useState, useEffect, useRef, useReducer } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Swiper from "swiper";
import "swiper/css";
import Navbar from "../components/navbar/Navbar";

const slides = [
  {
    title: "01",
    subtitle: "Coltfox",
    view: "https://github.com/HudbilAgency/Agency",
    site: "https://coltfox.com",
    image: "./coltfox.png",
  },
  {
    title: "02",
    subtitle: "TokenHarbor",
    view: "https://github.com/lalit1517/TokenHarbor",
    site: "https://5dttj-2yaaa-aaaal-qch7a-cai.raw.icp0.io/",
    image: "./faucet.png",
  },
  {
    title: "03",
    subtitle: "Anonymous",
    view: "https://github.com/lalit1517/Anonymous",
    site: "https://anonymous-vhve.onrender.com/",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "04",
    subtitle: "Keeper",
    view: "https://github.com/lalit1517/Keeper",
    site: "https://xanx2-lyaaa-aaaal-qckia-cai.raw.icp0.io/",
    image:
      "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "05",
    subtitle: "Portfolio",
    view: "https://github.com/lalit1517/lalit-personal-portfolio",
    site: "https://lalits-portfolio.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
];

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <div className="slideDescription py-6 w-full flex flex-col items-center gap-10 md:flex-row">
            <a href={slide.view} className="cursor-none" target="_blank">
              <div className="w-fit know-me bg-white p-2 text-black flex flex-col gap-1">
                View More
                <span className="underline"></span>
              </div>
            </a>
            <a href={slide.site} className="cursor-none" target="_blank">
              <div className="w-fit know-me bg-white p-2 text-black flex flex-col gap-1">
                Live Site
                <span className="underline"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <div>
      <Navbar />
      <div className={`overflow-hidden bg-[url("/1034.png")] cursor-none`}>
        <div className="home scroll-svg z-[] fixed hidden md:flex items-center w-fit justify-between flex items-center h-[100vh] px-4 py-10 gap-20">
          <Link className="mouse cursor-none" to="/">
            <div
              className={`know-me bg-[#dfbc28] bg-[url("/noise.png")] bg-blend-overlay border-2 border-black flex flex-col gap-1 text-lg p-2 items-center  font-bold`}
            >
              <div>💲</div>
              <div>🎃</div>
              <div>卄</div>
              <div>ⓞ</div>
              <div>๓</div>
              <div>є</div>
              <div>🎯</div>
              <div>✌</div>

              <span className="underline"></span>
            </div>
          </Link>
        </div>
        <div
          className={`md:mx-20 md:my-0 h-screen xl:h-auto bg-[#ac6314] bg-[url("/noise.png")] bg-blend-overlay`}
        >
          <div className="flex flex-col w-full h-screen xl:h-auto items-center justify-evenly gap-20 z-[99] overflow-hidden py-40 xl:py-10">
            <div className="text-responsive flex justify-center w-full font-bold items-center xl:pt-12">
              <img
                className="w-5/6 md:w-3/4"
                src="https://see.fontimg.com/api/renderfont4/MV5YJ/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UHJvamVjdHM/peacing-personal-use-regular.png"
              />
            </div>

            <div className="overflow-hidden w-full flex items-center justify-center relative pt-10">
              <div className="slides">
                <button
                  className="cursor-none"
                  onClick={() => dispatch({ type: "PREV" })}
                >
                  &lt;
                </button>
                {[...slides, ...slides, ...slides].map((slide, i) => {
                  let offset = slides.length + (state.slideIndex - i);
                  return <Slide slide={slide} offset={offset} key={i} />;
                })}
                <button
                  className="cursor-none"
                  onClick={() => dispatch({ type: "NEXT" })}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
