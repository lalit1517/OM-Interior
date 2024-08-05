import { BrowserRouter as Router } from "react-router-dom"; 
import Routers from "./router/Routers";
import Cursor from "./components/cursor-animation/cursor";

function App() {
  return (
    <>
      <Cursor />
      <Router>
        <Routers />
      </Router>
    </>
  );
}

export default App;
