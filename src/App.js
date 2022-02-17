import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import "./App.css";
import Home from './pages/home';
import NotFound from "./pages/notFound";
import NavBar from "./compenents/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
