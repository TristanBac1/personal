import { useState } from "react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const onUpdateActiveProject = (value) => {
    setActiveProject(value);
  };

  return (
    <div>
      <h1>Projects</h1>
      <h3>
        <a href="/">Back to home</a>
      </h3>
      <div className="projectsContainer">
        <div
          className={`panel ${activeProject === 0 && "active"}`}
          onClick={() => onUpdateActiveProject(0)}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506111583091-becfd4bfa05d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
          }}
        >
          <h3>Explore The World</h3>
        </div>
        <div
          className={`panel ${activeProject === 1 && "active"}`}
          onClick={() => onUpdateActiveProject(1)}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
          }}
        >
          <h3>Beach Getaway</h3>
        </div>
        <div
          className={`panel ${activeProject === 2 && "active"}`}
          onClick={() => onUpdateActiveProject(2)}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
          }}
        >
          <h3>Winter Wonderland</h3>
        </div>
        <div
          className={`panel ${activeProject === 3 && "active"}`}
          onClick={() => onUpdateActiveProject(3)}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1473283147055-e39c51463929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
          }}
        >
          <h3>Mountain Ranges</h3>
        </div>
        <div
          className={`panel ${activeProject === 4 && "active"}`}
          onClick={() => onUpdateActiveProject(4)}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
          }}
        >
          <h3>Historic Lands</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
