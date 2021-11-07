import React from "react";
import "./styles.scss";
import Container from "../../components/container";
import aboutImg1 from "../../images/about/about1.jpg";
import aboutImg2 from "../../images/about/about2.jpg";
import aboutImg3 from "../../images/about/about3.jpg";
import aboutImg4 from "../../images/about/about4.jpg";

const About = () => {
  return (
    <section className={"about"} id={"about"}>
      <Container>
        <div className="about-wrap flex gap-16">
          <div className="aboutImg flex flex-col">
            <div className="aboutImg-top flex flex-wrap">
              <div className="aboutImg-item">
                <img src={aboutImg1} alt="" />
              </div>
              <div className="aboutImg-item">
                <img src={aboutImg2} alt="" />
              </div>
            </div>
            <div className="aboutImg-bottom  flex flex-wrap">
              <div className="aboutImg-item">
                <img src={aboutImg3} alt="" />
              </div>
              <div className="aboutImg-item">
                <img src={aboutImg4} alt="" />
              </div>
            </div>
          </div>
          <div className="aboutTeaser">
            <h3 className="aboutTeaser-title">About Milliard</h3>
            <p>
              Here will be little information about milliard. Here will be
              little information about milliard. Here will be little information
              about milliard. Here will be little information about milliard.
              Here will be little information about milliard. Here will be
              little information about milliard club and their residents
            </p>
            <div className="counter flex flex-wrap">
              <div className="counter-item">
                <div className="counter-numb">40+</div>
                <div className="counter-title">Happy Clients</div>
              </div>
              <div className="counter-item">
                <div className="counter-numb">300</div>
                <div className="counter-title">Dedicated Members</div>
              </div>
              <div className="counter-item">
                <div className="counter-numb">540+</div>
                <div className="counter-title">Projects Completed</div>
              </div>
              <div className="counter-item">
                <div className="counter-numb">25+</div>
                <div className="counter-title">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
