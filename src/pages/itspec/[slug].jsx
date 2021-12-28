import { Link } from "gatsby";
import React from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Header from "../../components/header";
import logo from "../../images/milliard-new.svg";
import facebook from "../../images/icons/Facebook.svg";
import instagram from "../../images/icons/Instagram.svg";
import twitter from "../../images/icons/Twitter.svg";
import youtube from "../../images/icons/Youtube.svg";
import infospec from "../../images/itspec/info-spec.png";
import teamImg1 from "../../images/team/team1.png";

import "./itspec.scss";
import AnimText from "../../components/animText";
import About from "../../sections/about";
import useHomePageData from "../../services/use-home-page-data";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination } from "swiper";

import MainLayout from "../../layouts/main-layout";
import useBusinessDetail from "../../services/use-business-detail";
import PageSpinner from "../../components/page-spinner";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Modal from "../../components/modal";
import ContactMemberForm from "../../components/contact-member-form";
import { useModal } from "../../hooks";
import { useHomeContext } from "../../context/home-provider";
SwiperCore.use([Navigation, Pagination]);

const ItSpec = ({ params }) => {
  const { data: detail, loading } = useBusinessDetail(params.slug);
  const { partners } = useHomeContext();

  console.log(partners);

  const { t } = useTranslation();
  const modal = useModal();
  return (
    <>
      <Helmet>
        <title>Milliard | IT Spec | {params.slug}</title>
      </Helmet>
      <Modal {...modal}>
        <ContactMemberForm memberId={detail?.id} onExitClick={modal.onClose} />
      </Modal>
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
                      <img src={detail?.avatar_url} alt="" />
                    </div>
                    <div className="info-teaser">
                      <h3 className="info-name">{detail?.name}</h3>
                    </div>
                    <div className="info-company">
                      <div className="info-company-item">
                        <img src={detail?.logo_url} alt={detail?.name} />
                      </div>
                      {/* <div className="info-company-item">
                        <img src={logo} alt="" />
                      </div>
                      <div className="info-company-item">
                        <img src={logo} alt="" />
                      </div> */}
                    </div>
                  </div>
                  <div className="md:w-6/12 w-full">
                    <h2 className="info-title">{detail?.title}</h2>
                    <p>{detail?.description}</p>
                    <div className="info-button-wrap">
                      <Button
                        onClick={modal.onOpen}
                        className="rounded-none"
                        variant={"filled"}
                      >
                        {t("contact")}
                      </Button>
                      <a target="_blank" href={detail?.website}>
                        {t("more_info")}
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
                  {detail?.staffs?.map((member) => (
                    <SwiperSlide key={member.id}>
                      <div className="team-img">
                        <img src={member.logo_url} alt="" />
                      </div>
                      <div className="team-teaser">
                        <div className="team-title">{member.full_name}</div>
                        <div className="team-prof">{member.position}</div>
                      </div>
                    </SwiperSlide>
                  ))}
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
                  {detail?.projects?.map((project) => (
                    <SwiperSlide
                      key={project.id}
                      className="flex md:flex-row flex-col"
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-imgItem">
                          <img src={project.logo_url} alt="" />
                        </div>
                        {/* <div className="portfolio-imgItem">
                        <img src={portfolio2} alt="" />
                      </div> */}
                      </div>
                      <div className="portfolio-teaser">
                        <h3 className="portfolio-title">{project.title}</h3>
                        <p>{project.description}</p>
                        {/* <Link to={"/contact"}>
                      <Button variant={"outlined"}>Visit web site</Button>
                    </Link> */}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Container>
            </section>
            <section className="partner">
              <Container className="text-center">
                <h3 className="partner-title">{t("our_partners")}</h3>
                <p>{t("partners_description")}</p>
                <div className="partnerList">
                  {partners?.map((item) => (
                    <a
                      key={item.logo_url}
                      href={item.url}
                      target="_blank"
                      className="partnerItem"
                    >
                      <div className="partnerImg">
                        <img src={item.logo_url} alt={item.name} />
                      </div>
                      <div>{item.name}</div>
                    </a>
                  ))}
                </div>
                <Link to={"/contact"}>
                  <Button variant={"outlined"}>{t("become_one")}</Button>
                </Link>
              </Container>
            </section>
          </div>
        </MainLayout>
      </PageSpinner>
    </>
  );
};

export default ItSpec;
