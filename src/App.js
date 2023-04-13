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
