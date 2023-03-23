import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import * as Component from "./components/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Component.NavBar />
      <div className="App">
        <h1>Navbar Temp</h1>
        <h3>
          <a href="#projects">Link to Project Showcase</a>
        </h3>
        <h3>
          <a href="#personal">Link to About Me</a>
        </h3>
        <h3>
          <a href="#contact">Link to Contact Me</a>
        </h3>
        <h3>
          <a href="#contact">Landing Page</a>
        </h3>
        <Routes>
          <Route exact path="/" element={<Component.Home />} />
        </Routes>
        <Routes>
          <Route exact path="/profile" element={<Component.Profile />} />
        </Routes>
        <Routes>
          <Route exact path="/projects" element={<Component.Projects />} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Component.Contact />} />
        </Routes>
        <Component.Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
