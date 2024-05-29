import { BrowserRouter as Router } from "react-router-dom"; 
import Routers from "./router/Routers";
import Cursor from "./components/cursor-animation/cursor";
import { Analytics } from "@vercel/analytics/react";

function App() {
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
