import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import NavBar from "./compenents/NavBar";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
