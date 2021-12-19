import React from "react";
import "./styles.scss";
import Container from "../../components/container";

const About = ({ images_url = [], description, info = [], title }) => {
  return (
    <section className={"about"} id={"about"}>
      <Container>
        <div className="about-wrap flex gap-16">
          <div className="aboutImg flex flex-col">
            <div className="aboutImg-top flex flex-wrap">
              <div className="aboutImg-item">
                <img src={images_url[0]} alt="" />
              </div>
              <div className="aboutImg-item">
                <img src={images_url[1]} alt="" />
              </div>
            </div>
            <div className="aboutImg-bottom  flex flex-wrap">
              <div className="aboutImg-item">
                <img src={images_url[2]} alt="" />
              </div>
              <div className="aboutImg-item">
                <img src={images_url[3]} alt="" />
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
              {/*<div className="counter-item">*/}
              {/*  <div className="counter-numb">40+</div>*/}
              {/*  <div className="counter-title">Happy Clients</div>*/}
              {/*</div>*/}
              {/*<div className="counter-item">*/}
              {/*  <div className="counter-numb">300</div>*/}
              {/*  <div className="counter-title">Dedicated Members</div>*/}
              {/*</div>*/}
              {/*<div className="counter-item">*/}
              {/*  <div className="counter-numb">540+</div>*/}
              {/*  <div className="counter-title">Projects Completed</div>*/}
              {/*</div>*/}
              {/*<div className="counter-item">*/}
              {/*  <div className="counter-numb">25+</div>*/}
              {/*  <div className="counter-title">Awards Won</div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
