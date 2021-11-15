import React from "react";
import MainLayout from "../../layouts/main-layout";
import logo from "../../images/logo.svg";
import Header from "../../components/header";
import BusinessCard from "../../components/business-card";
import swap from "../../images/swap.svg";
import "./styles.scss";
import Contact from "../../sections/contact";
import { BUSINESSES } from "../../constants";
import { useTranslation } from "react-i18next";
import Spinner from "../../components/spinner";
import PageSpinner from "../../components/page-spinner";
import { useBusinesses } from "../../services/use-businesses";
import { Redirect } from "@reach/router";
import { Link } from "gatsby";

const BusinessesPage = ({ params }) => {
  const { t } = useTranslation();
  const { loading, data, error } = useBusinesses(params.slug);

  if (error) {
    return <h1>{JSON.stringify(error)}</h1>;
  }

  console.log(data);

  // console.log(params.slug);
  return (
    <PageSpinner loading={loading}>
      <MainLayout>
        <Header>
          <div className="flex justify-center">
            <img className="w-40" src={logo} alt="" />
          </div>
          <section id="businesses" className="sm:p-10 md:p-20 lg:p-40">
            <h2 className="text-center capitalize mt-20 lg:mt-2">
              {t("businesses")}
            </h2>
            <div className="business-cards justify-evenly flex mt-20 flex-wrap m-auto">
              {data?.map((item) => (
                <Link to={"/itspec"}>
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
