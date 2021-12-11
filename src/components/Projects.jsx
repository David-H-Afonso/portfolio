import { projects } from "../utils/projects";
import "../assets/styles/Projects.css";

const Projects = ({ images }) => {
  return (
    <div className="Projects cards">
      {projects.map((project) => {
        return (
          <div className="Project" key={project.id}>
            <div className="ProjectTitleAndImage">
              <img
                className="ProjectImage"
                src={images[project.id] ? images[project.id] : ""}
                alt={project.id + 1}
              />
              <p>
                {project.id + 1} - {project.title}
              </p>
            </div>
            <p className="ProjectDescription">{project.description}</p>
            <div className="ProjectLinkContainer">
              <a target="_blank" rel="noreferrer" className="ProjectLink" href={project.github}>See Github Repository</a> -{" "}
              <a target="_blank" rel="noreferrer" className="ProjectLink" href={project.deploy}>Check it live!</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
