import React from "react";
import MainLayout from "../../layouts/main-layout";
import logo from "../../images/milliard-new.svg";
import Header from "../../components/header";
import BusinessCard from "../../components/business-card";
import swap from "../../images/swap.svg";
import "./styles.scss";
import Contact from "../../sections/contact";
import { useTranslation } from "react-i18next";
import PageSpinner from "../../components/page-spinner";
import { useBusinesses } from "../../services/use-businesses";
import { Link } from "gatsby";
import AnimText from "../../components/animText";

const BusinessesPage = ({ params }) => {
  const { t } = useTranslation();
  const { loading, data, error } = useBusinesses(params.slug);

  if (error) {
    return <h1>{JSON.stringify(error)}</h1>;
  }

  return (
    <PageSpinner loading={loading}>
      <MainLayout>
        <Header>
          <div className="flex justify-center">
            <Link to={"/"}>
              <img className="w-40" src={logo} alt="" />
            </Link>
          </div>
          <section
            id="businesses"
            className="sm:p-10 md:p-20 lg:p-40 lg:mt-20 relative"
          >
            <AnimText
              title={"businesses businesses businesses businesses businesses"}
            />
            <h2 className="text-center capitalize mt-20 lg:mt-2">
              {t("businesses")}
            </h2>
            <div className="business-cards justify-evenly flex mt-20 flex-wrap m-auto">
              {data?.map((item) => (
                <Link key={item.slug} to={`/itspec/${item.slug}`}>
                  <BusinessCard
                    className="mb-10"
                    key={item.id}
                    img={item.logo_url}
                    name={item.name}
                  />
                </Link>
              ))}
            </div>
          </section>
          <Contact />
        </Header>
      </MainLayout>
    </PageSpinner>
  );
};

export default BusinessesPage;
