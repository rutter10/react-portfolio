import React from 'react';

function Project({ project }) {
  const { projectName, language, description, url } = project;
  return (
    <div className="card">
      <div className="content">
        <div className="header"><a href={url}>{projectName}</a></div>
        <div className="meta">{language}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default Project;