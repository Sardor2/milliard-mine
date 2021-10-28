import React from "react";
import "./styles.scss";
import Container from "../../components/container";
import Flex from "../../components/flex";
import BusinessCard from "../../components/business-card";
import wallet from "../../images/wallet.svg";
import swap from "../../images/swap.svg";

const BusinessTypes = () => {
  return (
    <section className={"business-types"} id={"business-types"}>
      <Container maxWidth={"md"}>
        <h2>Business turlari</h2>
        <div className="scroller flex">
          {Array(10)
            .fill(1)
            .map((item, i) => (
              <BusinessCard
                className={"card"}
                key={i}
                img={swap}
                name={"Savod sotiq"}
              />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default BusinessTypes;
