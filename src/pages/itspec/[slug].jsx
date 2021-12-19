import { Link } from "gatsby";
import React from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Header from "../../components/header";
import logo from "../../images/milliard-new.svg";
import facebook from "../../images/icons/Facebook.svg";
import instagram from "../../images/icons/Instagram.svg";
import twitter from "../../images/icons/Twitter.svg";
import youtube from "../../images/icons/Youtube.png";
import infospec from "../../images/itspec/info-spec.png";
import teamImg1 from "../../images/team/team1.png";
import teamImg2 from "../../images/team/team2.png";
import teamImg3 from "../../images/team/team3.png";
import portfolio1 from "../../images/portfolio/1.png";
import portfolio2 from "../../images/portfolio/2.png";
import partnerImg from "../../images/itspec partners/1.png";
import "./itspec.scss";
import AnimText from "../../components/animText";
import About from "../../sections/about";
import useHomePageData from "../../services/use-home-page-data";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination } from "swiper";

import MainLayout from "../../layouts/main-layout";
import useBusinessDetail from "../../services/use-business-detail";
import PageSpinner from "../../components/page-spinner";
SwiperCore.use([Navigation, Pagination]);

const ItSpec = ({ params }) => {
  const { data: detail, loading } = useBusinessDetail(params.slug);

  return (
    <PageSpinner loading={loading}>
      <MainLayout>
        <div className="itspec">
          <Header>
            <Container>
              <div className="text-center">
                <Link to="/" className="inline-block">
                  <img className={"logo"} src={logo} alt="" />
                </Link>
              </div>
            </Container>
          </Header>
          <section className="info-spec">
            <AnimText title="founder founder founder founder founder founder founder founder founder founder founder founder founder" />
            <Container>
              <div className="flex items-center xl:gap-32 md:gap-17 md:flex-row flex-col">
                <div className="md:w-6/12 w-full mb-24 md:mb-0 flex md:block flex-col md:flex-col items-center md:items-start">
                  <div className="info-img">
                    <img src={infospec} alt="" />
                  </div>
                  <div className="info-teaser">
                    <h3 className="info-name">{detail?.name}</h3>
                    {/*<div className="info-profes">Sales Doctor & Vshop</div>*/}
                  </div>
                  <div className="info-company">
                    <div className="info-company-item">
                      <img src={logo} alt="" />
                    </div>
                    <div className="info-company-item">
                      <img src={logo} alt="" />
                    </div>
                    <div className="info-company-item">
                      <img src={logo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="md:w-6/12 w-full">
                  <h2 className="info-title">{detail?.title}</h2>
                  <p>{detail?.description}</p>
                  <div className="info-button-wrap">
                    <Link to={"/contact"}>
                      <Button className="rounded-none" variant={"filled"}>
                        Contact
                      </Button>
                    </Link>
                    <a target="_blank" href={detail?.website}>
                      Go to the web-site
                    </a>
                  </div>
                  <div className="social">
                    <div className="social-links flex">
                      <a className="mr-7" href="#facebook">
                        <img src={facebook} alt="facebook" />
                      </a>
                      <a className="mr-7" href="#instagram">
                        <img src={instagram} alt="instagram" />
                      </a>
                      <a className="mr-7" href="#twitter">
                        <img src={twitter} alt="twitter" />
                      </a>
                      <a className="mr-7" href="#youtube">
                        <img src={youtube} alt="yotube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          <About
            images_url={detail?.images_url}
            description={detail?.description}
            info={detail?.info}
            title={detail?.title}
          />
          <section className="team">
            <AnimText title="our team our team our team our team our team our team" />
            <Container>
              <Swiper
                navigation={true}
                pagination={{
                  type: "progressbar",
                }}
                className="team-swiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  640: {
                    spaceBetween: 10,
                  },
                  968: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="team-img">
                    <img src={teamImg1} alt="" />
                  </div>
                  <div className="team-teaser">
                    <div className="team-title">Sardor Tillaev</div>
                    <div className="team-prof">Recruter</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-img">
                    <img src={teamImg2} alt="" />
                  </div>
                  <div className="team-teaser">
                    <div className="team-title">Momin Rahimov</div>
                    <div className="team-prof">Racer</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-img">
                    <img src={teamImg3} alt="" />
                  </div>
                  <div className="team-teaser">
                    <div className="team-title">John Doe</div>
                    <div className="team-prof">Master</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-img">
                    <img src={teamImg2} alt="" />
                  </div>
                  <div className="team-teaser">
                    <div className="team-title">Rasmus Lermond</div>
                    <div className="team-prof">Founder Kio</div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Container>
          </section>
          <section className="portfolio">
            <AnimText title="portfolio portfolio portfolio portfolio portfolio" />
            <Container>
              <Swiper
                navigation={true}
                pagination={{
                  type: "progressbar",
                }}
                className="portfolio-swiper"
                breakpoints={{
                  320: {
                    spaceBetween: 50,
                  },
                  640: {
                    spaceBetween: 60,
                  },
                  968: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                }}
              >
                <SwiperSlide className="flex md:flex-row flex-col">
                  <div className="portfolio-img">
                    <div className="portfolio-imgItem">
                      <img src={portfolio1} alt="" />
                    </div>
                    <div className="portfolio-imgItem">
                      <img src={portfolio2} alt="" />
                    </div>
                  </div>
                  <div className="portfolio-teaser">
                    <h3 className="portfolio-title">Project info</h3>
                    <p>
                      Here will be information about the project Here will be
                      information about the project Here will be information
                      about the project Here will be information about the
                      project Here will be information about the project Here
                      will be information about the project Here will be
                      information about the project
                    </p>
                    <Link to={"/contact"}>
                      <Button variant={"outlined"}>Visit web site</Button>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex md:flex-row flex-col">
                  <div className="portfolio-img">
                    <div className="portfolio-imgItem">
                      <img src={portfolio1} alt="" />
                    </div>
                    <div className="portfolio-imgItem">
                      <img src={portfolio2} alt="" />
                    </div>
                  </div>
                  <div className="portfolio-teaser">
                    <h3 className="portfolio-title">Project info</h3>
                    <p>
                      Here will be information about the project Here will be
                      information about the project Here will be information
                      about the project Here will be information about the
                      project Here will be information about the project Here
                      will be information about the project Here will be
                      information about the project
                    </p>
                    <Link to={"/contact"}>
                      <Button variant={"outlined"}>Visit web site</Button>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex md:flex-row flex-col">
                  <div className="portfolio-img">
                    <div className="portfolio-imgItem">
                      <img src={portfolio1} alt="" />
                    </div>
                    <div className="portfolio-imgItem">
                      <img src={portfolio2} alt="" />
                    </div>
                  </div>
                  <div className="portfolio-teaser">
                    <h3 className="portfolio-title">Project info</h3>
                    <p>
                      Here will be information about the project Here will be
                      information about the project Here will be information
                      about the project Here will be information about the
                      project Here will be information about the project Here
                      will be information about the project Here will be
                      information about the project
                    </p>
                    <Link to={"/contact"}>
                      <Button variant={"outlined"}>Visit web site</Button>
                    </Link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Container>
          </section>
          <section className="partner">
            <Container className="text-center">
              <h3 className="partner-title">Our Partners</h3>
              <p>We have been working with some Fortune 500 clients</p>
              <div className="partnerList">
                <div className="partnerItem">
                  <div className="partnerImg">
                    <img src={partnerImg} alt="" />
                  </div>
                  <div>Slack</div>
                </div>
                <div className="partnerItem">
                  <div className="partnerImg">
                    <img src={partnerImg} alt="" />
                  </div>
                  <div>Medium</div>
                </div>
                <div className="partnerItem">
                  <div className="partnerImg">
                    <img src={partnerImg} alt="" />
                  </div>
                  <div>Microsoft</div>
                </div>
                <div className="partnerItem">
                  <div className="partnerImg">
                    <img src={partnerImg} alt="" />
                  </div>
                  <div>Slack</div>
                </div>
                <div className="partnerItem">
                  <div className="partnerImg">
                    <img src={partnerImg} alt="" />
                  </div>
                  <div>Shopify</div>
                </div>
              </div>
              <Link to={"/contact"}>
                <Button variant={"outlined"}>Become one</Button>
              </Link>
            </Container>
          </section>
        </div>
      </MainLayout>
    </PageSpinner>
  );
};

export default ItSpec;
