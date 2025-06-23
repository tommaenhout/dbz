import ReactDOM from "react-dom/client";
import CardDetail from "./CardDetail";

import "./index.css";

const App = () => (
  <div>
    <div>Name: mf_card_detail</div>
    <div>Framework: react-19</div>
    <CardDetail id="1" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);