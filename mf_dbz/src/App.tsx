import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Navbar from "mf_navbar/Navbar";
import CharacterPage from "./pages/CharacterPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Navbar />
    <div className="w-full md:w-[80%] mx-auto mt-10">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<CharacterPage />} />
      <Route path="/character/:id" element={<CharacterDetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
