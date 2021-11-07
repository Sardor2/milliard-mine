import React from "react";
import MainLayout from "../../layouts/main-layout";
import logo from "../../images/logo.svg";
import Header from "../../components/header";
import BusinessCard from "../../components/business-card";
import swap from "../../images/swap.svg";
import "./styles.scss";
import Contact from "../../sections/contact";
import { BUSINESSES } from "../../constants";

const BusinessesPage = () => {
  return (
    <MainLayout>
      <Header>
        <div className="flex justify-center">
          <img className="w-40" src={logo} alt="" />
        </div>
        <section id="businesses" className="sm:p-10 md:p-20 lg:p-40">
          <h2 className="text-center capitalize mt-20 lg:mt-2">Biznesslar</h2>
          <div className="business-cards justify-between flex mt-20 flex-wrap m-auto">
            {BUSINESSES.map((item) => (
              <BusinessCard
                className={"mb-10"}
                key={item.id}
                img={item.img}
                name={item.title}
              />
            ))}
          </div>
        </section>
        <Contact />
      </Header>
    </MainLayout>
  );
};

export default BusinessesPage;
