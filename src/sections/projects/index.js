import React from "react";
import "./styles.scss";
import { MASONRY_IMAGES } from "../../constants";
import Container from "../../components/container";
import { useTranslation } from "react-i18next";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const Projects = ({ projects }) => {
  console.log(projects, "projects");
  const { t } = useTranslation();
  return (
    <section id="projects" className="projects-section">
      <Container maxWidth="lg">
        <h2>{t("parts_from_meetings")}</h2>
        <div className="scroll-container">
          <div className="my-masonry-grid">
            {projects?.map((project, index) => (
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
        </div>
      </Container>
    </section>
  );
};

export default Projects;