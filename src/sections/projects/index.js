import React from "react";
import "./styles.scss";
import { MASONRY_IMAGES } from "../../constants";
import Container from "../../components/container";
import { useTranslation } from "react-i18next";
import Button from "../../components/button";
import Gallery from "./gallery";
import Modal from "../../components/modal";
import { useModal } from "../../hooks";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const Projects = ({ projects }) => {
  const [amount, setAmount] = React.useState(6);
  const { open, onOpen, onClose } = useModal();
  const [currentSlide, setCurrentSlide] = React.useState();

  const handleIncrement = () => {
    if (projects.length > amount) {
      setAmount((prev) => prev + 6);
    }
  };

  const { t } = useTranslation();
  return (
    <section id="projects" className="projects-section">
      <Modal onClose={onClose} open={open}>
        <Gallery
          currentSlide={currentSlide}
          onClose={onClose}
          projects={projects}
        />
      </Modal>
      <Container maxWidth="lg">
        <h2>{t("parts_from_meetings")}</h2>
        <div className="my-masonry-grid">
          {projects?.slice(0, amount).map((project, index) => (
            <div
              onClick={() => {
                onOpen();
                setCurrentSlide(index);
              }}
              key={index}
              className="project-card"
            >
              <div className="teaser">
                <h3 className="title">{project.title}</h3>
                {/*<span className="date">*/}
                {/*  {new Date(project.created_at)*/}
                {/*    .toLocaleDateString()*/}
                {/*    .replaceAll("/", ".")}*/}
                {/*</span>*/}
              </div>
              <div className="image">
                <img src={project.image_url} alt={project.title} />
              </div>

              <div className="overlay"></div>
            </div>
          ))}
        </div>

        {projects.length > amount ? (
          <Button onClick={handleIncrement} className={"load-more-btn"}>
            {t("load_more")}
          </Button>
        ) : null}
      </Container>
    </section>
  );
};

export default Projects;
