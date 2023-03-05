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
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
