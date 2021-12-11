import { projects } from "../utils/projects";
import "../assets/styles/Projects.css"

const Projects = ({images}) => {
  return (
    <div className="Projects">
      {projects.map((project) => {
        return (
          <div className="Project">
            <p>{project.id + 1} - {project.title}</p>
            <img width="300px" src={images[project.id]} alt={project.id + 1}/>
            <p>{project.description}</p>
            <div><a href={project.github}>Github</a> - <a href={project.deploy}>Deploy</a></div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
