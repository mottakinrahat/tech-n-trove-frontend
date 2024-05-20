import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Title from "../../Title/Title";
import { brands } from "@/components/utils/const";
const BrandDisplay = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <Title heading="Brands" upperText="we provide products"></Title>
      <Marquee pauseOnHover={true}>
        {brands.map((brand, index) => (
          <Image
            key={index + 1}
            src={brand?.brandImage}
            height={200}
            width={200}
            alt="logo"
          ></Image>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandDisplay;
