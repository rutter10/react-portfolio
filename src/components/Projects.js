import React from 'react';
import Project from './Project';

function Projects({ projects }) {
  let projectList = [];
  projects.forEach(p => {
    projectList.push(<Project key={p.projectName} project={p}></Project>);
  });
  return (
    <div className="ui centered cards">
      {projectList}
    </div>
  );
}

export default Projects;

