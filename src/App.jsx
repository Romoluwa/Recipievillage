import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Recipies from "./pages/recipies";
import About from "./pages/about";
import Contact from "./pages/contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Recipies />} path="/Recipies" />
          <Route element={<About />} path="/About" />
          <Route element={<Contact />} path="/Contact" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
