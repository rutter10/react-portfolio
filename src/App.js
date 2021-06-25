import React from 'react';
import Projects from "./components/Projects";
import './styles/App.css';

function App() {
  const projects = [
    {
      projectName: "Note-Taker",
      language: "JavaScript",
      description: "",
      url: "https://github.com/rutter10/Note-Taker"
    },
    {
      projectName: "README-generator",
      language: "JavaScript",
      description: "",
      url: "https://github.com/rutter10/README-generator"
    },
    {
      projectName: "NihalAbdalla/Recipe_Generator",
      language: "JavaScript",
      description: "",
      url: "https://github.com/NihalAbdalla/Recipe_Generator"
    },
    {
      projectName: "Employee-Management",
      language: "JavaScript",
      description: "",
      url: "https://github.com/rutter10/Employee-Management"
    },
    {
      projectName: "Work-Schedule",
      language: "JavaScript",
      description: "",
      url: "https://github.com/rutter10/Work-Schedule"
    },
    {
      projectName: "mkotte/project2",
      language: "JavaScript",
      description: "Project Management Application using Express.js, Handlebars.js, Bootstrap and SortableJS.",
      url: "https://github.com/mkotte/project2"
    },
  ];
  return (
    <div className="ui container">
      <header className="ui blue block header">
        <h1 className="ui two column centered grid">Jesse's React Portfolio</h1>
      </header>
      <Projects projects={projects}>
      </Projects>
      <div className="ui blue block header footer">
        <h1 className="ui two column centered grid">Jesse's React Portfolio</h1>
      </div>
    </div>
  );
}

export default App;
