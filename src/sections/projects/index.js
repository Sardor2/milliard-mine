import React from "react";
import "./styles.scss";
import { MASONRY_IMAGES } from "../../constants";
import Container from "../../components/container";
import { useTranslation } from "react-i18next";
import Button from "../../components/button";
import Gallery from "./gallery";
import Modal from "../../components/modal";
import { useModal } from "../../hooks";
import useProjects from "../../services/use-projects";
import Spinner from "../../components/spinner";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const Projects = () => {
  const { open, onOpen, onClose } = useModal();
  const [currentSlide, setCurrentSlide] = React.useState();

  const { projects, loading, isLoadingNextPage, fetchMore, hasMore } =
    useProjects();

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
        <Spinner loading={loading}>
          <h2>{t("parts_from_meetings")}</h2>
          <div className="my-masonry-grid">
            {projects?.map((project, index) => (
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

          {!isLoadingNextPage ? (
            hasMore && (
              <Button onClick={fetchMore} className={"load-more-btn"}>
                {t("load_more")}
              </Button>
            )
          ) : (
            <div className={"load-more-btn"}>
              <Spinner loading={true} loaderSize={80} height={100} />
            </div>
          )}
        </Spinner>
      </Container>
    </section>
  );
};

export default Projects;
