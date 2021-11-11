import React from "react";
import "./styles.scss";
import { MASONRY_IMAGES } from "../../constants";
import Container from "../../components/container";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const Projects = ({ projects }) => {
  console.log(projects, "projects");
  return (
    <section id="projects" className="projects-section">
      <Container maxWidth="md">
        <h2>Uchrashuvlardan lavhalar</h2>
        <div className="my-masonry-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="teaser">
                <h3 className="title">{project.title}</h3>
                <span className="date">
                  {new Date(project.created_at)
                    .toLocaleDateString()
                    .replaceAll("/", ".")}
                </span>
              </div>
              <div className="image">
                <img src={project.image_url} alt={project.title} />
              </div>

              <div className="overlay"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
