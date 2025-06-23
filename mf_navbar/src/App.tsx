import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import Navbar from "./Navbar";

const App = () => (
  <Router>
    <div>Name: mf_navbar</div>
    <div>Framework: react-19</div>
    <Navbar />
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);