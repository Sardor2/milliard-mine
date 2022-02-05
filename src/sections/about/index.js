import React from "react";
import "./styles.scss";
import Container from "../../components/container";
import { useInView } from "react-intersection-observer";

const AboutSection = ({
  images_url = [],
  description,
  info = [],
  title,
  animated = false,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className={"about"} id={"about"}>
      <Container>
        <div
          ref={ref}
          className={`about-wrap flex gap-16 ${
            inView ? "animate__animated animate__fadeIn" : ""
          }`}
        >
          <div className="aboutImg flex flex-col">
            <div className="aboutImg-top flex flex-wrap">
              <div className={`aboutImg-item ${animated ? "animated" : ""}`}>
                <img src={images_url[0]} alt="" />
              </div>
              <div className={`aboutImg-item ${animated ? "animated" : ""}`}>
                <img src={images_url[1]} alt="" />
              </div>
            </div>
            <div className="aboutImg-bottom  flex sm:flex-wrap">
              <div className={`aboutImg-item ${animated ? "animated" : ""}`}>
                <img style={{ maxWidth: "164px" }} src={images_url[2]} alt="" />
              </div>
              <div className={`aboutImg-item ${animated ? "animated" : ""}`}>
                <img style={{ width: "356px" }} src={images_url[3]} alt="" />
              </div>
            </div>
          </div>
          <div className="aboutTeaser">
            <h2 className="aboutTeaser-title">{title}</h2>
            <p>{description}</p>
            <div className="counter flex flex-wrap">
              {info?.map((item) => (
                <div key={item.name} className="counter-item">
                  <div className="counter-numb">{item.value}</div>
                  <div className="counter-title">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
