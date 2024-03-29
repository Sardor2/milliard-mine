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
import { useInView } from "react-intersection-observer";
// import ProgressIndicator from "./progress-indicator";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const Projects = () => {
  const { open, onOpen, onClose } = useModal();
  const [currentSlide, setCurrentSlide] = React.useState();
  const { inView, ref } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const { projects, loading, isLoadingNextPage, total, fetchMore, hasMore } =
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

      {/* <ProgressIndicator progress={progress} /> */}

      <Container maxWidth="lg">
        <Spinner loading={loading}>
          <h2>{t("parts_from_meetings")}</h2>
          <div
            ref={ref}
            className={`my-masonry-grid  ${
              inView ? "animate__animated animate__fadeIn" : ""
            }`}
            style={{ animationDelay: 500 }}
          >
            {projects?.map((project, index) => (
              <div
                onClick={() => {
                  onOpen();
                  setCurrentSlide(index);
                }}
                key={project.image_url}
                className={`project-card animate__animated animate__zoomIn`}
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
          {hasMore && (
            <Button
              loading={isLoadingNextPage}
              onClick={fetchMore}
              className={"load-more-btn"}
              variant="filled"
            >
              {t("load_more")}
            </Button>
          )}
        </Spinner>
      </Container>
    </section>
  );
};

export default Projects;

{
  /* {!isLoadingNextPage ? (
            hasMore && (
              <Button onClick={fetchMore} className={"load-more-btn"}>
                {t("load_more")}
              </Button>
            )
          ) : (
            <div className={"load-more-btn"}>
              <Spinner loading={true} loaderSize={80} height={100} />
            </div>
          )} */
}
