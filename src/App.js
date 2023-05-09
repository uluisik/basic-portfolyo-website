import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "@mui/icons-material";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
