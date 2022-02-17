import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import "./App.css";
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
