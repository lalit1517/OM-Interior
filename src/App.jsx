import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom"; 
import Routers from "./router/Routers";
import Cursor from "./components/cursor-animation/cursor";
import { Analytics } from "@vercel/analytics/react";

function App() {

  useEffect(() => {
    const loadStylesheet = (href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };

    const stylesheets = [
      "https://webassets.golocall.com/berlin/css/vendor/fontawesome/all.min.css",
      "https://webassets.golocall.com/berlin/css/vendor/animate/animate.compat.css",
      "https://webassets.golocall.com/berlin/css/vendor/owl/owl.carousel.min.css",
      "https://webassets.golocall.com/berlin/css/vendor/owl/owl.theme.default.min.css",
      "https://webassets.golocall.com/berlin/css/vendor/magnific-popup/magnific-popup.min.css",
      "https://webassets.golocall.com/berlin/css/vanillatoasts.css",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
      "https://fonts.googleapis.com/css?family=Raleway",
      "https://webassets.golocall.com/shiva/css/quick-call-button.css?ver=1.0.2",
      "https://webassets.golocall.com/preloader/berlin.preloader.css",
      "https://webassets.golocall.com/berlin/css/vendor/bootstrap/bootstrap.min.css",
      "https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap"
    ];

    stylesheets.forEach(loadStylesheet);
  }, []);

  return (
    <>
      <Cursor />
      <Router>
        <Routers />
      </Router>
      <Analytics />
    </>
  );
}

export default App;
