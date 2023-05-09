import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import "./App.css";
function App() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi ,My name is Ahmet</h2>
        <div className="prompt">
          <p>A front end developer with a passion for learning and creating</p>
          <Email />
          <GitHub />
          <LinkedIn />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="item">
          <li className="item">
            <h2>Front-End</h2>
            <span>Html, Css, React, Typescript </span>
          </li>
          <li className="item">
            <h2>Programming Languages</h2>
            <span>Javascript</span>
          </li>
          <li className="item">
            <h2>Programming Ui</h2>
            <span>Bootstrap, Chakra Ui, Tailwind CSS,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
